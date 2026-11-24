
import { useRef, useState } from "react";

function Exercise5() {
  const clicks = useRef(0);
  const [totalClicks, setTotalClicks] = useState(null);

  function handleClick() {
    clicks.current += 1;
  }

  function showTotalClicks() {
    setTotalClicks(clicks.current);
  }

  return (
    <div>
    <h1> Exercise 5</h1>
      <h2> Click Counter</h2>

      <button onClick={handleClick}>Click Me</button>

      <button onClick={showTotalClicks}>
        Show Total Clicks
      </button>

      {totalClicks !== null && <p>Total Clicks: {totalClicks}</p>}
    </div>
  );
}

export default Exercise5;
