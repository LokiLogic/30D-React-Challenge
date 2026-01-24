import React from 'react';
import './DigitalClock.css';

function DigitalClock() {
    const [time, setTime] = React.useState(new Date());
    
    React.useEffect(() => {
        const timerID = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timerID);
    }, []);

    const formatNumber = (num) => (num < 10 ? `0${num}` : num);

    const hours = formatNumber(time.getHours());
    const minutes = formatNumber(time.getMinutes());
    const seconds = formatNumber(time.getSeconds());

    return (
        <div className='clock-container'>
            <h2>Digital Clock</h2>
            <div className='clock-face'>
                <span className='time-segment'>{hours}</span>
                <span className='colon'>:</span>
                <span className='time-segment'>{minutes}</span>
                <span className='colon'>:</span>
                <span className='time-segment seconds'>{seconds}</span>
            </div>
            <div className='date-display'>
                {time.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}
            </div>
        </div>
    );
}

export default DigitalClock;

