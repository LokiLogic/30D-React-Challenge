import React from 'react';
import './ListDemo.css';

function ListDemo() {
    const fruits = [{ id: 1, name: "Apple", emoji: "🍎", price: 1.99 }, { id: 2, name: "Banana", emoji: "🍌", price: 0.99}, { id: 3, name: "Grapes", emoji: "🍇", price: 2.99 }, { id: 4, name: "Orange", emoji: "🍊", price: 3.99 }, { id: 5, name: "watermelon", emoji: "🍉", price: 4.99 }];

fruits.filter(fruit => fruit.price < 3.00);

  return (
    <div className="list-card">
      <h2>Fruit market 🛒</h2>
      <p>Today's selection:</p>
      
      <ul className="fruit-list">
        {fruits.map((fruit) => (

          <li key={fruit.id} className="fruit-item">
            <span className="fruit-emoji">{fruit.emoji}</span>
            <div className="fruit-info">
              <h3>{fruit.name}</h3>
              <span className="fruit-price">{fruit.price}</span>
            </div>
            <button className="buy-btn">+</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default ListDemo;