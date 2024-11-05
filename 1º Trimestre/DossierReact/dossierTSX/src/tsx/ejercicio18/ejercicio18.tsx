import React, { useState, useEffect } from 'react';

const Example: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Numero de clicks: ${count} `;

    return () => {
      document.title = 'React App';
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

export default Example;
