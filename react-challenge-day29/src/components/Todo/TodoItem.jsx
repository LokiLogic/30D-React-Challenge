import React, { useState } from 'react';

function TodoItem({ task, onToggle, onDelete, onSaveEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    onSaveEdit(task.id, editText);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="checkbox"
      />

      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
            autoFocus
          />
          <button onClick={handleSave} className="icon-btn save-btn">💾</button>
        </>
      ) : (
        <>
          <span className="task-text" onClick={() => onToggle(task.id)}>
            {task.text}
          </span>
          <div className="actions">
            <button onClick={() => setIsEditing(true)} className="icon-btn edit-btn">✏️</button>
            <button onClick={() => onDelete(task.id)} className="icon-btn delete-btn">🗑️</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;