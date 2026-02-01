import React from 'react';
import './JokeFetcher.css';

function JokeFetcher() {
    const [joke, setJoke] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const fetchJoke = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode');
            if (!response.ok) {
                throw new Error(`Network error: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            if (data.error) {
                throw new Error(data.message || 'API returned an error');
            }
            setJoke(data);
        } catch (err) {
            setError(err.message || 'Unknown error');
            setJoke(null);
        } finally {
            setIsLoading(false);
        }
    }

    React.useEffect(() => {
        fetchJoke();
    }, []);
    
    return (
        <div className='joke-card'>
            <h2>Daily Joke Fetcher</h2>

            {!isLoading && joke && (
                <div className='joke-content'>
                    {joke.type === 'single' ? (
                        <p className='joke-text'>{joke.joke}</p>
                    ) : (
                        <>
                            <p className='setup'>{joke.setup}</p>
                            <p className='delivery'>{joke.delivery}</p>
                        </>
                    )}
                </div>
            )}

            {isLoading && <div className='loading-spinner' aria-hidden="true"></div>}

            <button onClick={fetchJoke} className='new-joke-btn' disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Fetch New Joke'}
            </button>

            {error && <p className='error-message'>Error: {error}</p>}
        </div>
    )
};

export default JokeFetcher;

