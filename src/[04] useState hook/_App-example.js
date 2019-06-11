import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(42);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1>Example 4: useState hook</h1>
      <h3>{counter}</h3>
      <button onClick={incrementCounter}>+</button>
    </div>
  );
}

export default App;
