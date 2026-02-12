import React from 'react';

export default function Contact() {
    return (
        <div className="contact page">
            <h1>Contact Us</h1>
            <p className="muted">This is a demo — the form is non-functional.</p>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <label>
                    Name
                    <input type="text" name="name" placeholder="Your name" />
                </label>

                <label>
                    Email
                    <input type="email" name="email" placeholder="you@example.com" />
                </label>

                <label>
                    Message
                    <textarea name="message" rows="4" placeholder="Write a message..."></textarea>
                </label>

                <button className="btn primary" type="submit">Send Message</button>
            </form>
        </div>
    );
}