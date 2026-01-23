import React from 'react';
import './Navbar.css';

function Navbar(){
    return (
        <nav className='navbar'>
            <div className='logo'>ReactChallenge</div>
            <ul className='nav-links'>
                <li><a href='#home'>Home</a></li>
                <li><a href='#features'>Features</a></li>
                <li><a href='#contact'>Contact</a></li>

            </ul>
            <button className='nav-btn'>Sign In</button>
        </nav>
    );
}

export default Navbar;
