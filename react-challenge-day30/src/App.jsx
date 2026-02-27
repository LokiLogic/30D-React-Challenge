import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());
  const [quote, setQuote] = useState({ text: 'Loading...', author: '' });
  const [tasks, setTasks] = useState([
    'Finish challenge 🚀',
    'Celebrate day 30 🥂'
  ]);
  const [newTask, setNewTask] = useState('');
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://dummyjson.com/quotes/random');
        const data = await response.json();
        setQuote({ text: data.quote, author: data.author });
      } catch (error) {
        setQuote({ text: "Don't give up!", author: 'React Dev' });
      }
    };
    fetchQuote();
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.body.classList.toggle('dark-mode', isDark);
    document.body.classList.toggle('light-mode', !isDark);
  }, [isDark]);

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const removeTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="dashboard-container">
      <header className="header">
        <h1>Personal Dashboard ⚡</h1>
        <button
          className="theme-toggle"
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </header>

      <main className="grid-layout">
        <div className="card clock-card">
          <h2 className="time">
            {time.toLocaleTimeString('hu-HU', {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </h2>
          <p className="date">
            {time.toLocaleDateString('hu-HU', {
              weekday: 'long',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>

        <div className="card quote-card">
          <h3>Daily Motivation 💡</h3>
          <blockquote className="quote-text">
            "{quote.text}"
          </blockquote>
          <p className="quote-author">- {quote.author}</p>
        </div>

        <div className="card todo-card span-2">
          <h3>Focus Tasks 🎯</h3>
          <form onSubmit={addTask} className="todo-form">
            <input
              type="text"
              placeholder="What's next?"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>
          <ul className="task-list">
            {tasks.map((task, index) => (
              <li key={index} className="task-item">
                <span>{task}</span>
                <button
                  onClick={() => removeTask(index)}
                  className="delete-btn"
                >
                  ✅
                </button>
              </li>
            ))}
            {tasks.length === 0 && (
              <p className="empty-msg">All done! Relax ☕</p>
            )}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;