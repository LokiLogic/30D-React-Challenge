import React, {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);

    };

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <CartContext.Provider value={{cart, addToCart, totalPrice}}>
            {children}
        </CartContext.Provider>
    );
};
