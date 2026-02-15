import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Navbar.css';

function Navbar() {
    const { cart, totalPrice } = useContext(CartContext);

    return (
        <nav className='navbar'>
            <div className='logo'>My Store</div>
            <div className='cart-info'>
                <span>{cart.length} Items</span>
                <span className='price-tag'>${totalPrice.toFixed(2)}</span>
            </div>

        </nav>
    );

}

export default Navbar;