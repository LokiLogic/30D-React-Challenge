import React from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './ThemeButton.css';

function ThemeButton() {
    const { isDarkMode, toggleTheme } = React.useContext(ThemeContext);

    return (
        <button className={`theme-btn ${isDarkMode ? 'dark-btn' : 'light-btn'}`} onClick={toggleTheme}>
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    );
}

export default ThemeButton;