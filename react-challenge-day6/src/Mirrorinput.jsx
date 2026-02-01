import React, { useState } from 'react';
import './Mirrorinput.css';

function Mirrorinput() {const [text, setText] = useState('');
    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className='input-card'>
            <h2>Mirror Input</h2>
            <p className='instruction'>Type something in the input box below, and it will be mirrored in real-time.</p>
            <input type="text" value={text} onChange={handleChange} className='my-input' />

            <div className='output-box'>
                <h3>Value:</h3>
                <p className='mirrored-text'>
                    {text === '' ? '...' : text}
                </p>
            </div>

        </div>
    );
}

export default Mirrorinput;
