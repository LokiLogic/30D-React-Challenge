import React from 'react';
import './WindowTracker.css';

function WindowTracker() {
    const [windowSize, setWindowSize] = React.useState({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    React.useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getDeviceType = () => {
        if (windowSize.width < 768) return 'Mobile';
        if (windowSize.width < 1024) return 'Tablet';
        return 'Desktop';
    }

    return (
        <div className='tracker-container'>
            <h2>Window Tracker</h2>
            <div className='metrics'>
                <div className='metric-box'>
                    <span className='label'>Width:</span>
                    <span className='value'>{windowSize.width}px</span>
                </div>
                <div className='metric-box'>
                    <span className='label'>Height:</span>
                    <span className='value'>{windowSize.height}px</span>
                </div>
            </div>
            <div className={`device-indicator ${windowSize.width < 768 ? 'mobile' : windowSize.width < 1024 ? 'tablet' : 'desktop'}`}>
                {getDeviceType()}
            </div>
        </div>
    );
}

export default WindowTracker;
    