import React from 'react';
import './ProfileCard.css';

function ProfileCard({ name, role, bio }) {
    return (
    <div className="card-container">
      <div className="card-header">
        <img
          src="https://via.placeholder.com/100"
          alt="Avatar"
          className="avatar"
        />
        </div>
        <div className="card-body">
            <h2>{name}</h2>
            <h4>{role}</h4>
            <p>{bio}</p>
            <button className="contact-btn">Contact</button>
            
        </div>
    </div>
    );
}

export default ProfileCard;