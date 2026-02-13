import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import ThemeButton from './components/ThemeButton';
import './App.css';

function App() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className='content-box'>
        <h1>Welcome to the {isDarkMode ? 'Dark' : 'Light'} Mode
          <p>
            This demo shows how to implement a theme toggle using React Context and Hooks. Click the button below to switch themes!
          </p>
        </h1>
        <ThemeButton />
      </div>
    </div>
  );
}

export default App;