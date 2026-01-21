import './FAQAccordion.css';
import React, { useState } from 'react';

function FAQAccordion() {
    const [activeIndex, setActiveIndex] = useState(null);
    const faqs = [
        {
            question: "What is React?",
            answer: "React is a JavaScript library for building user interfaces."
        },
        {
            question: "What is a component?",
            answer: "A component is a reusable piece of code that represents part of a user interface."
        },
        {
            question: "What is state in React?",
            answer: "State is an object that determines how a component renders and behaves."
        }
    ];

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className='faq-container'>
            <h2>FAQ Accordion</h2>
            <div className='accordion'>
                {faqs.map((faq, index) => (
                    <div key={index} className='accordion-item'>
                        <div className={`accordion-header ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
                            <h3>{faq.question}</h3>
                            <span className='icon'>▼</span>
                        </div>
                        {activeIndex === index && (
                            <div className='accordion-body'>
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            
        </div>
        </div>
    );
}

export default FAQAccordion;