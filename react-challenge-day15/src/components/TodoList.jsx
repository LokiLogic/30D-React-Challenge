import React from 'react';
import './TodoList.css';

function TodoList() {
    const [inputValue, setInputValue] = React.useState('');
    const [tasks, setTasks] = React.useState([
        { id: 1, text: 'React challenge day 15' },
        { id: 2, text: 'Buy coffee'},

    ]);

    const addTask = () => {
        if (inputValue.trim() ==='') return;
        const newTask ={
            id: Date.now(),
            text: inputValue
        };
        setTasks([...tasks, newTask]);
        setInputValue('');
    };
    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks (updatedTasks);
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTask();
        };
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
                    onKeyPress={handleKeyPress}
                />
                <button onClick={addTask} className='add-btn'>Add</button>
            </div>
            <ul className='todo-lust'>
                {tasks.length === 0? (
                    <p className='empty-msg'>No tasks available. Please add a task.</p>
                ) : (
                    tasks.map((task) => (
                        <li key={task.id} className='todo-item'>
                            <span>{task.text}</span>
                            <button onClick={() => deleteTask(task.id)} className='delete-btn'>Delete</button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default TodoList;