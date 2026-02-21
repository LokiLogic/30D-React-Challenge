import React, { useState } from 'react';
import MovieCard from './MovieCard';
import './MovieApp.css';

const MovieApp = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const rawKey = (import.meta.env.VITE_OMDB_API_KEY || '').toString();
    const API_KEY = rawKey;

    if (typeof window !== 'undefined') {
        console.info('VITE_OMDB_API_KEY present:', Boolean(rawKey));
    }

    const searchMovies = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        setError(null);

        try {
            if (!API_KEY) {
                setError('Missing OMDB API key. Add VITE_OMDB_API_KEY to your .env');
                setMovies([]);
                return;
            }

            const url = `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${API_KEY}`;
            const masked = url.replace(API_KEY, '***');
            if (typeof window !== 'undefined') console.debug('Searching:', masked);

            const response = await fetch(url);
            const data = await response.json();

            if (data.Response === 'True') {
                setMovies(data.Search);
            } else {
                setError(data.Error || 'No results');
                setMovies([]);
            }
        } catch (err) {
            setError(err.message || 'An error occurred while fetching data.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="movie-container">
            <header className="search-section">
                <h1>Movie Finder 🎬</h1>
                <p className="hint">Search the OMDB database — English titles work best.</p>
                <form onSubmit={searchMovies} className="search-form" role="search" aria-label="Search movies">
                    <input
                        type="search"
                        placeholder="Search for movies (e.g. Batman)..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        aria-label="Movie title"
                        autoComplete="off"
                    />
                    <button className="search-btn" type="submit" disabled={loading} aria-label="Search">
                        {loading ? <span className="spinner" aria-hidden="true"></span> : '🔍 Search'}
                    </button>
                    {query && (
                        <button type="button" className="clear-btn" onClick={() => setQuery('')} aria-label="Clear search">
                            ×
                        </button>
                    )}
                </form>
            </header>

            {loading && <div className="loader">Searching for movies...</div>}
            {error && <div className="error-msg">{error}</div>}

            <main className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </main>
        </div>
    );
};

export default MovieApp;