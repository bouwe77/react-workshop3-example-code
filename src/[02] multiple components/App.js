import React from "react";

// Child components:
import Hello from "./Hello";

function App() {
  return (
    <div>
      <Title />
      <Hello />
    </div>
  );
}

function Title() {
  return (
    <>
      <h1>Example 2: multiple components</h1>
      <h3>My Hello App</h3>
    </>
  );
}

export default App;
