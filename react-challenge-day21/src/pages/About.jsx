import React from 'react';

export default function About() {
    return (
        <div className="about page">
            <h1>About Router Village</h1>
            <p className="muted">A small example project for learning React Router and component-driven design.</p>

            <section className="team">
                <div className="avatar">RV</div>
                <div>
                    <h3>Created by LT</h3>
                    <p className="muted">Built as part of a 30-day React challenge to practice fundamentals.</p>
                </div>
            </section>
        </div>
    );
}