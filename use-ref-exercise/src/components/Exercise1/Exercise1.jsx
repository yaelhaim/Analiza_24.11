
import { useState, useRef } from "react";

function Exercise1() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  function clearStateInput() {
    setInputValue("");
  }

  function clearRefInput() {
    inputRef.current.value = "";
  }

  return (
    <div>
      <h1>Exercise 1 </h1>

      <h2>Using useState</h2>

      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />

      <button onClick={clearStateInput}>
        Clear Input
      </button>

      <h2>Using useRef</h2>

      <input type="text" ref={inputRef} />

      <button onClick={clearRefInput}>
        Clear Input
      </button>
    </div>
  );
}

export default Exercise1;
