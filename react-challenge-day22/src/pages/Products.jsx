import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

export const products = [
    { id: 1, name: 'Gamer Laptop 💻', price: 1200, desc: 'Brutal performance with an RTX 4060.', image: 'https://media.istockphoto.com/id/906347962/hu/fot%C3%B3/j%C3%A1t%C3%A9k-laptop-csatlakoztatott-eg%C3%A9rrel-%C3%A9s-fejhallgat%C3%B3val.jpg?s=2048x2048&w=is&k=20&c=f_E4Et2hDm9NX0O57FN8iz816zVpYe3AQAaDO0QGkVI=' },
    { id: 2, name: 'Smartwatch ⌚', price: 120, desc: 'Tracks heart rate, sleep and notifications.', image: 'https://media.istockphoto.com/id/469328286/hu/fot%C3%B3/okos%C3%B3ra.jpg?s=2048x2048&w=is&k=20&c=UZVuEzFK6QgwKacFCstDCUfKeg3TrAwHPaQBEcG7aKw=' },
    { id: 3, name: 'Wireless Headphones 🎧', price: 100, desc: 'Active noise cancellation and 30h battery.', image: 'https://media.istockphoto.com/id/1443305526/hu/fot%C3%B3/fiatal-mosolyg%C3%B3s-f%C3%A9rfi-fejhallgat%C3%B3ban-laptop-billenty%C5%B1zet%C3%A9n-g%C3%A9pel.jpg?s=2048x2048&w=is&k=20&c=pfDTeVp3A3qpc_sERHs3zSpsql43LxEbq_nmGwhc6as=' },
    { id: 4, name: '4K Monitor 🖥️', price: 500, desc: 'Crystal clear display ideal for creatives.', image: 'https://media.istockphoto.com/id/978339282/hu/fot%C3%B3/k%C3%A9s%C5%91-este-kora-reggel-a-m%C3%A9rn%C3%B6ki-irod%C3%A1ban-n%C5%91i-tervez%C5%91-dolgozik-egy-szem%C3%A9lyi-sz%C3%A1m%C3%ADt%C3%B3g%C3%A9pen-amely.jpg?s=2048x2048&w=is&k=20&c=-f3i9G5g478uX6LllRo3lwSgAGjOc2d2DfppFYbr1_I=' },
];

export default function Products() {
    return (
        <div className="products-page page">
            <h2>Products</h2>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="product-media">
                            <img src={product.image} alt={product.name} className="product-image" />
                        </div>
                        <div className="product-body">
                            <h3>{product.name}</h3>
                            <p className="price">{product.price} $</p>
                            <p className="muted small">{product.desc}</p>
                            <Link to={`/product/${product.id}`} className="details-btn">Details</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}