import React, { useState } from 'react';
import './PropDrilling.css';

function UserDetails ({ username}) {
    return (
        <div className='box grandchild'>
            <h3>grandchild component</h3>
            <p>I got the data</p>
            <span className='data-tag'>
                {username}
            </span>
        </div>
    )
}

function ProfileContainer({ username }) {
    return (
        <div className='box child'>
            <h3>child component</h3>
            <p>I am passing the data to grandchild</p>
            <UserDetails username={username} />
        </div>
    )
}

function PropDrilling() {
    const [user, setUser] = useState("Follow me");

    return(
        <div className='box parent'>
            <h3>parent component</h3>
            <p>I have some data</p>
            <strong style={{color:'#111111'}}>{user}</strong>
            <ProfileContainer username={user} />

        </div>
    )
}

export default PropDrilling;