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

  useEffect(() => {
    //TODO save to local storage
  }, [renderCount]);

  function rerenderClick() {
    setRenderCount(renderCount + 1);
    // After the renderCount has been incremented we want to save it to local storage.
    // However, we need the new value after the state has changed. That is a side effect,
    // which means we have to create a useEffect hook for that.
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
