
import { useState, useRef, useEffect } from "react";

function Exercise3() {
  const [count, setCount] = useState(0);
  const previousCount = useRef(0);

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  return (
    <div>
      <h1>Exercise 3</h1>
       <h2>Previous Counter</h2>
      <p>
        Current: {count} (Previous: {previousCount.current})
      </p>

      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Exercise3;
