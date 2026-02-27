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

  // Ticking Clock
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch Quote
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

  // BOOTSTRAP 5 THEME TOGGLE
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
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
    <div className="container py-3 py-md-5">
      
      {/* HEADER */}
      <header className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3 text-center text-md-start">
        <h1 className="m-0 fw-bolder gradient-text display-5">
          Personal Dashboard ⚡
        </h1>
        <button
          className={`btn ${isDark ? 'btn-light' : 'btn-dark'} rounded-pill px-4 py-2 fw-bold shadow-sm d-flex align-items-center gap-2`}
          onClick={() => setIsDark(!isDark)}
          style={{ transition: 'all 0.3s ease' }}
        >
          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      {/* GRID */}
      <div className="row g-3 g-md-4">
        
        {/* CLOCK CARD */}
        <div className="col-12 col-lg-6">
          <div className="card h-100 shadow-sm border-0 rounded-4">
            <div className="card-body d-flex flex-column justify-content-center align-items-center py-4 py-md-5">
              <h2 className="display-3 fw-bolder text-primary mb-0" style={{ letterSpacing: '-2px' }}>
                {time.toLocaleTimeString('hu-HU', {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </h2>
              <p className="text-secondary fs-5 fs-md-4 mb-0 text-capitalize fw-medium mt-2">
                {time.toLocaleDateString('hu-HU', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* QUOTE CARD */}
        <div className="col-12 col-lg-6">
          <div className="card h-100 shadow-sm border-0 rounded-4 quote-card-bg">
            <div className="card-body d-flex flex-column justify-content-center p-4">
              <h3 className="h5 mb-3 fw-bold">Daily Motivation 💡</h3>
              <blockquote className="blockquote border-start border-primary border-4 ps-3 mb-2">
                <p className="fst-italic fs-6 fs-md-5 lh-sm m-0">"{quote.text}"</p>
              </blockquote>
              <figcaption className="blockquote-footer text-end mb-0 mt-2 fs-7">
                <span className="fw-bold">{quote.author}</span>
              </figcaption>
            </div>
          </div>
        </div>

        {/* TODO CARD */}
        <div className="col-12 mt-3 mt-md-4">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-3 p-md-4">
              <h3 className="h4 mb-3 fw-bold">Focus Tasks 🎯</h3>
              
              <form onSubmit={addTask} className="input-group mb-4 shadow-sm rounded-3">
                <input
                  type="text"
                  className="form-control form-control-lg border-secondary-subtle task-bg text-body"
                  placeholder="What's next?"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  style={{ boxShadow: 'none' }}
                />
                <button type="submit" className="btn btn-primary px-3 px-md-4 fw-bold">
                  Add Task
                </button>
              </form>
              
              <ul className="list-group list-group-flush gap-2">
                {tasks.map((task, index) => (
                  <li 
                    key={index} 
                    className="list-group-item d-flex justify-content-between align-items-center task-bg border-0 rounded-3 px-3 py-2 shadow-sm custom-hover-item"
                  >
                    <span className="fs-6 fs-md-5 fw-medium text-body text-break">{task}</span>
                    <button
                      onClick={() => removeTask(index)}
                      className="btn btn-outline-success border-0 rounded-circle p-2 d-flex align-items-center justify-content-center flex-shrink-0 ms-2"
                      style={{ width: '35px', height: '35px', transition: 'all 0.2s' }}
                      title="Mark as done"
                    >
                      <span className="fs-6" style={{ lineHeight: '1' }}>✓</span>
                    </button>
                  </li>
                ))}
                
                {tasks.length === 0 && (
                  <div className="text-center py-4 task-bg rounded-3 mt-2">
                    <p className="text-muted fst-italic mb-0">All tasks completed! Relax ☕</p>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
