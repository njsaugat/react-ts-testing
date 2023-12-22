import React, { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((prev) => prev + 1);
  useEffect(() => {
    const timeout = async () => {
      setTimeout(() => {
        setCounter(10);
      }, 1000);
    };
    timeout();
    // return () => clearTimeout(timeout);
  }, []);
  return (
    <div>
      <span data-testid="counter">{counter}</span>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
