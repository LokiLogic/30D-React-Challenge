import React, { useState } from 'react';
import './GithubFinder.css';

function GithubFinder() {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchUser = async (e) => {
        if (e && e.preventDefault) e.preventDefault();
        const trimmed = username.trim();
        if (!trimmed) {
            setError('Please enter a GitHub username.');
            setUserData(null);
            return;
        }

        setLoading(true);
        setError(null);
        setUserData(null);

        try {
            const response = await fetch(`https://api.github.com/users/${encodeURIComponent(trimmed)}`);
            if (!response.ok) {
                if (response.status === 404) throw new Error('User not found');
                throw new Error(`Network error: ${response.status}`);
            }
            const data = await response.json();
            setUserData(data);
        } catch (err) {
            setError(err.message || 'Failed to fetch user');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='github-card'>
            <h2>Github Finder</h2>
            <form onSubmit={fetchUser} className='search-form'>
                <input
                    type='text'
                    placeholder='Enter GitHub username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type='submit'>Search</button>
            </form>
            {loading && <div className='spinner'></div>}
            {error && <p className='error-msg'>{error}</p>}
            {userData && (
                <div className='profile-info'>
                    <img src={userData.avatar_url} alt="Avatar" className='avatar' />
                    <h3>{userData.name || userData.login}</h3>
                    <p className='bio'>{userData.bio || "No bio available"}</p>
                    <div className='stats'>
                        <div className='stat-box'>
                            <span>Repos</span>
                            <strong>{userData.public_repos}</strong>
                        </div>
                        <div className='stat-box'>
                            <span>Followers</span>
                            <strong>{userData.followers}</strong>
                        </div>
                        <div className='stat-box'>
                            <span>Following</span>
                            <strong>{userData.following}</strong>
                        </div>
                    </div>
                    <a href={userData.html_url} target='_blank' rel='noopener noreferrer' className='visit-btn'>
                        Visit Profile
                    </a>

                </div>
            )}
        </div>
    );
}

export default GithubFinder;