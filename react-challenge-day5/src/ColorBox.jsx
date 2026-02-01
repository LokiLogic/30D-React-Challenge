import React, { useState } from 'react';
import './ColorBox.css';

function ColorBox() {
    const [bgColor, setBgColor] = useState('#ffffff');

const generateRandomColor = () => {
    const randomColor ='#' + Math.floor(Math.random()*16777215).toString(16);
    setBgColor(randomColor);
    };


return (
    <div className="color-card" style={{ backgroundColor: bgColor }}>
        <div className="content-box">
            <h2>Random Color Box</h2>
            <p>the used color is {bgColor}</p>
            <div className="color-code">
                {bgColor}
            </div>
        </div>

        
        <button className="change-btn" onClick={generateRandomColor}>Change Color</button>

    </div>


);
};

export default ColorBox;