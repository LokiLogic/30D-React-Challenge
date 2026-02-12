import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from './Products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail page">
        <h1>Product Not Found</h1>
        <p>The product you are looking for does not exist.</p>
        <Link to="/products" className="btn primary">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="product-detail page">
      <div className="detail-card">
        <img src={product.image} alt={product.name} className="detail-image" />
        <div className="detail-body">
          <h1>{product.name}</h1>
          <p className="price" style={{ color: '#6c5ce7' }}>{product.price} $</p>
          <p className="muted">{product.desc}</p>
          <Link to="/products" className="btn primary" style={{ marginTop: 16 }}>&larr; Back to Products</Link>
        </div>
      </div>
    </div>
  );
}
