import React, { useState, useEffect } from "react";
import Title from "../Title";

// Data fetching, setting up a subscription, and manually changing the DOM
// in React components are all examples of side effects.

function App() {
  const getInitialRenderCount = () =>
    Number(localStorage.getItem("renderCount")) || 0;
  const [renderCount, setRenderCount] = useState(getInitialRenderCount);

  // This effect is called after each render and updates the document title.
  // The way you call an effect after each render is by NOT supplying a second argument.
  useEffect(() => {
    document.title = `Rendered ${renderCount} times`;
  });

  // This effect is only called when the renderCount variable from state changes.
  // You do that by supplying the renderCount variable as seconds argument to useEffect.
  // What this effect does is saving the renderCount to local storage.
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
