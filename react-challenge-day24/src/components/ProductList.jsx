import React, {useContext} from 'react';
import {CartContext} from '../context/CartContext';
import './ProductList.css';

function ProductList() {
    const { addToCart } = useContext(CartContext);

    const products = [
        { id: 1, name: 'Aurora Headphones', price: 199.99, image: 'https://cdn.pixabay.com/photo/2016/11/19/16/01/audio-1840073_1280.jpg' },
        { id: 2, name: 'Nebula Keyboard', price: 129.99, image: 'https://cdn.pixabay.com/photo/2017/08/27/16/51/illuminated-keyboard-2686774_1280.jpg' },
        { id: 3, name: 'Orion Monitor', price: 399.99, image: 'https://cdn.pixabay.com/photo/2016/11/29/08/41/apple-1868496_1280.jpg' },
    ];

    return (
        <div className="content">
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="product-media">
                            <img src={product.image} alt={product.name} className="product-image" />
                        </div>
                        <div className="product-body">
                            <div>
                                <h3>{product.name}</h3>
                                <p className="muted">Premium tech for everyday use</p>
                            </div>
                            <div className="product-footer">
                                <div className="price">${product.price.toFixed(2)}</div>
                                <button onClick={() => addToCart(product)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;