import React from 'react';

export default function Home() {
  return (
    <div className="home page">
      <header className="hero">
        <h1>Welcome to Router Village</h1>
        <p className="lead">A tiny demo showcasing React Router and a clean, modern UI.</p>
      </header>

      <section className="cards">
        <article className="card">
          <h3>Easy Routing</h3>
          <p>Navigate between pages without reloads using React Router.</p>
        </article>

        <article className="card">
          <h3>Responsive</h3>
          <p>Layouts adapt to mobile and desktop automatically.</p>
        </article>

        <article className="card">
          <h3>Fast Dev</h3>
          <p>Built with Vite and modern React for a snappy development experience.</p>
        </article>
      </section>
    </div>
  );
}