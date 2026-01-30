import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
    const [inputValue, setInputValue] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState('');
    const [tasks, setTasks] = useState([
        { id: 1, text: 'React challenge day 15', completed: false },
        { id: 2, text: 'Buy coffee', completed: false },
    ]);

    const addTask = () => {
        if (inputValue.trim() === '') return;
        const newTask = {
            id: Date.now(),
            text: inputValue,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setInputValue('');
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const startEditing = (id, text) => {
        setEditingId(id);
        setEditingText(text);
    };

    const saveEdit = (id) => {
        if (editingText.trim() === '') return;
        setTasks(tasks.map((task) =>
            task.id === id ? { ...task, text: editingText } : task
        ));
        setEditingId(null);
        setEditingText('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    };

    return (
        <div className='todo-card'>
            <h2>Todo List</h2>
            <div className='input-group'>
                <input
                    type="text"
                    placeholder='Add New Task'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <button onClick={addTask} className='add-btn'>Add</button>
            </div>
            <ul className='todo-list'>
                {tasks.length === 0 ? (
                    <p className='empty-msg'>No tasks available. Please add a task.</p>
                ) : (
                    tasks.map((task) => (
                        <li key={task.id} className={`todo-item ${task.completed ? 'completed' : ''}`}>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleComplete(task.id)}
                                className='checkbox'
                            />
                            {editingId === task.id ? (
                                <>
                                    <input
                                        type="text"
                                        value={editingText}
                                        onChange={(e) => setEditingText(e.target.value)}
                                        className='edit-input'
                                        autoFocus
                                    />
                                    <button onClick={() => saveEdit(task.id)} className="icon-btn save-btn">💾</button>
                                </>
                            ) : (
                                <>
                                    <span className='task-text' onClick={() => toggleComplete(task.id)}>
                                        {task.text}
                                    </span>

                                    <div className='actions'>
                                        <button onClick={() => startEditing(task.id, task.text)} className="icon-btn edit-btn">✏️</button>
                                        <button onClick={() => deleteTask(task.id)} className="icon-btn delete-btn">🗑️</button>
                                    </div>
                                </>
                            )}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default TodoList;