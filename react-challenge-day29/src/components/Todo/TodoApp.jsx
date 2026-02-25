import React, { useState } from 'react';
import { useTodos } from '../../hooks/useTodos';
import TodoItem from './TodoItem';
import './TodoApp.css';

function TodoApp() {
  const [inputValue, setInputValue] = useState("");
  const { tasks, addTask, deleteTask, toggleComplete, saveEdit } = useTodos([
    { id: 1, text: "Finish refactor 🧹", completed: false }
  ]);

  const handleAdd = () => {
    addTask(inputValue);
    setInputValue("");
  };

  return (
    <div className="todo-card">
      <h2>To‑Do List ✨</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="New task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        />
        <button onClick={handleAdd} className="add-btn">Add</button>
      </div>
      <ul className="todo-list">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onToggle={toggleComplete}
            onDelete={deleteTask}
            onSaveEdit={saveEdit}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;