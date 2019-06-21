import React, { useState, useEffect } from "react";
import Title from "../Title";

// Data fetching, setting up a subscription, and manually changing the DOM
// in React components are all examples of side effects.

function App() {
  const [renderCount, setRenderCount] = useState(0);

  // This effect is called after each render and updates the document title.
  useEffect(() => {
    document.title = `Rendered ${renderCount} times`;
  });

  //TODO uitlezen renderCount uit localStorage

  useEffect(() => {
    console.log("renderCount in useEffect", renderCount);
    localStorage.setItem("renderCount", renderCount);
    console.log(
      "renderCount in localStorage",
      localStorage.getItem("renderCount")
    );
  }, [renderCount]);

  function rerenderClick() {
    console.log("renderCount before set", renderCount);
    setRenderCount(renderCount + 1);
    console.log("renderCount after set", renderCount);
  }

  console.log("Rendering...");

  return (
    <>
      <Title title="Example 8: useEffect" />
      <p>{renderCount}</p>
      <button onClick={rerenderClick}>rerender</button>
    </>
  );
}

export default App;
