import React, { useState } from "react";
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);


const increment = () => {
  setCount(count + 1);
};

const decrement = () => {
  setCount(count - 1);
};

const reset = () => {
    setCount(0);
};

const checkColor = () => {
    if (count > 0) return 'positive';
    if (count < 0) return 'negative';
    return 'neutral';
};

return (
    <div className="counter-card"><h2>React counter</h2>
  <div className={`count-display ${checkColor()}`}>{count}</div>

  <div className="button-group">
    <button onClick={decrement} className="btn minus">-</button>
    <button onClick={reset} className="btn reset">Reset</button>
    <button onClick={increment} className="btn plus">+</button>
  </div>


</div>
);
}

export default Counter;
