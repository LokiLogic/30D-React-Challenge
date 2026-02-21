import React from 'react';

const MovieCard = ({ movie }) => {

    const posterUrl = movie.Poster !== 'N/A'
        ? movie.Poster
        : 'https://via.placeholder.com/300x450?text=No+Poster';

    return (
        <article className="movie-card">
            <div style={{ position: 'relative' }}>
                <img src={posterUrl} alt={movie.Title} loading="lazy" />
                <div className="badge">{movie.Type}</div>
            </div>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
        </article>
    );
};

export default MovieCard;