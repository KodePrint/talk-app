import { useState, useEffect } from "react";

const HelloContainer = () => {
  const [hi, setHi] = useState(false);

  const handleClick = () => {
    setHi(!hi);
  }

  return (
    <div>
      <h3>
        { hi ? "" : "Hello" }
      </h3>
      <button onClick={handleClick}>Click me..!</button>
    </div>
  );
}

export default HelloContainer;