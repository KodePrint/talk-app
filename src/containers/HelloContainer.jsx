import { useState, useEffect } from "react";

const HelloContainer = () => {
  const [hi, setHi] = useState('');

  const handleClick = () => {
    setHi('Hello');
  }

  return (
    <div>
      <h3>{hi}</h3>
      <button onClick={handleClick}>Click me..!</button>
    </div>
  );
}

export default HelloContainer;