import React, { useState, useEffect } from 'react';

const Counter = () => {
  // Set the initial state based on localStorage or default to 0
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount ? Number(savedCount) : 0;
  });
  const [input, setInput] = useState('');

 


  // Save count to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]);

  const increment = () => {
    if (count < 10) {
      setCount(prevCount => prevCount + 1);
    } else {
      alert('You have reached the maximum value');
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    } else {
      alert('You have reached the minimum value');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-50">
      <h1 className="text-2xl font-bold mb-4">Counter</h1>
      <p className="text-lg mb-4">{count}</p>
      <div className="space-x-4">
        <button
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
