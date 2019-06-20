import React from "react";
import Title from "../Title";

function App() {
  const counter = 42;

  return (
    <>
      <Title title="Example 4: useState hook" subtitle="My Counter App" />
      <h3>{counter}</h3>
    </>
  );
}

export default App;
