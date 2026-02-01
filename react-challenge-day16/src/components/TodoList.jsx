import React, { useState, useEffect, useRef } from 'react';
import './TodoList.css';

function TodoList() {
    const [inputValue, setInputValue] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState('');
    const [tasks, setTasks] = useState(() => {
        try {
            const raw = localStorage.getItem('todo.tasks');
            return raw ? JSON.parse(raw) : [
                { id: 1, text: 'React challenge day 15', completed: false },
                { id: 2, text: 'Buy coffee', completed: false },
            ];
        } catch {
            return [
                { id: 1, text: 'React challenge day 15', completed: false },
                { id: 2, text: 'Buy coffee', completed: false },
            ];
        }
    });

    const inputRef = useRef(null);
    const editInputRef = useRef(null);

    useEffect(() => {
        localStorage.setItem('todo.tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        if (editingId !== null && editInputRef.current) {
            editInputRef.current.focus();
            editInputRef.current.select();
        }
    }, [editingId]);

    const addTask = () => {
        const trimmed = inputValue.trim();
        if (trimmed === '') return;
        const newTask = {
            id: Date.now(),
            text: trimmed,
            completed: false
        };
        setTasks(prev => [...prev, newTask]);
        setInputValue('');
        if (inputRef.current) inputRef.current.focus();
    };

    const deleteTask = (id) => {
        const task = tasks.find(t => t.id === id);
        if (task && !window.confirm(`Delete task "${task.text}"?`)) return;
        setTasks(prev => prev.filter((task) => task.id !== id));
    };

    const toggleComplete = (id) => {
        setTasks(prev => prev.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const startEditing = (id, text) => {
        setEditingId(id);
        setEditingText(text);
    };

    const cancelEdit = () => {
        setEditingId(null);
        setEditingText('');
    };

    const saveEdit = (id) => {
        const trimmed = editingText.trim();
        if (trimmed === '') return;
        setTasks(prev => prev.map((task) =>
            task.id === id ? { ...task, text: trimmed } : task
        ));
        cancelEdit();
    };

    const handleAddKey = (e) => {
        if (e.key === 'Enter') addTask();
    };

    const handleEditKey = (e, id) => {
        if (e.key === 'Enter') saveEdit(id);
        if (e.key === 'Escape') cancelEdit();
    };

    const clearCompleted = () => {
        if (!tasks.some(t => t.completed)) return;
        if (!window.confirm('Remove all completed tasks?')) return;
        setTasks(prev => prev.filter(task => !task.completed));
    };

    return (
        <div className='todo-card' role="region" aria-label="Todo list">
            <div className="todo-header">
                <div className="title-group">
                    <h2>Todo List</h2>
                    <span className="count-badge" aria-live="polite">
                        {tasks.filter(t => !t.completed).length}/{tasks.length}
                    </span>
                </div>
                <button
                    onClick={clearCompleted}
                    className="clear-btn"
                    disabled={tasks.every(t => !t.completed)}
                    title="Remove all completed tasks"
                    aria-disabled={tasks.every(t => !t.completed)}
                    aria-label="Clear completed tasks"
                >
                    Clear Completed
                </button>
            </div>

            <div className='input-group'>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder='Add New Task'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleAddKey}
                    aria-label="New task"
                    autoComplete="off"
                />
                <button onClick={addTask} className='add-btn' aria-label="Add task">Add</button>
            </div>

            <ul className='todo-list' role="list" aria-label="Tasks">
                {tasks.length === 0 ? (
                    <div className='empty-msg' role="status">
                        <p>No tasks available. Please add a task.</p>
                    </div>
                ) : (
                    tasks.map((task) => (
                        <li key={task.id} className={`todo-item ${task.completed ? 'completed' : ''}`} role="listitem">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleComplete(task.id)}
                                className='checkbox'
                                aria-label={`Mark "${task.text}" as ${task.completed ? 'incomplete' : 'complete'}`}
                            />
                            {editingId === task.id ? (
                                <>
                                    <input
                                        ref={editInputRef}
                                        type="text"
                                        value={editingText}
                                        onChange={(e) => setEditingText(e.target.value)}
                                        onKeyDown={(e) => handleEditKey(e, task.id)}
                                        className='edit-input'
                                        aria-label={`Edit task ${task.text}`}
                                    />
                                    <button onClick={() => saveEdit(task.id)} className="icon-btn save-btn" aria-label="Save edit">💾</button>
                                    <button onClick={cancelEdit} className="icon-btn" aria-label="Cancel edit">✖️</button>
                                </>
                            ) : (
                                <>
                                    <span
                                        className='task-text'
                                        onClick={() => toggleComplete(task.id)}
                                        tabIndex={0}
                                        onKeyDown={(e) => { if (e.key === 'Enter') toggleComplete(task.id); }}
                                        role="button"
                                        aria-pressed={task.completed}
                                    >
                                        {task.text}
                                    </span>

                                    <div className='actions'>
                                        <button onClick={() => startEditing(task.id, task.text)} className="icon-btn edit-btn" aria-label={`Edit ${task.text}`}>✏️</button>
                                        <button onClick={() => deleteTask(task.id)} className="icon-btn delete-btn" aria-label={`Delete ${task.text}`}>🗑️</button>
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