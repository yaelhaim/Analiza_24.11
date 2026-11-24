
import { forwardRef, useRef, useState } from "react";

const TextBox = forwardRef((props, ref) => {
  return (
    <input type="text" ref={ref} />
  );
});

function Exercise2() {
  const inputRef = useRef(null);
  const [displayValue, setDisplayValue] = useState("");

  function showValue() {
    setDisplayValue(inputRef.current.value);
  }

  return (
    <div>
    <h1>Exercise 2</h1>
      <h2>Parent Component</h2>

      <TextBox ref={inputRef} />

      <button onClick={showValue}>
        Show Value
      </button>

      <p>{displayValue}</p>
    </div>
  );
}

export default Exercise2;
