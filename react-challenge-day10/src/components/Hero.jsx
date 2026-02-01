import React from 'react';
import './Hero.css';


function Hero({ title, subtitle, ctaText }) {
    const handleClick = () => {
        alert('Follow me!');
    }
    return (
        <div className='hero-section'>
            <div className='hero-content'>
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <button onClick={handleClick} className='hero-btn'>{ctaText}</button>
            
            </div>
        </div>
    );
        
}

export default Hero;