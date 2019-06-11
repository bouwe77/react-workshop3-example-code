import React from "react";

import Hello from "./Hello";

function App() {
  const name = "everyone";

  return (
    <div>
      <Title />
      <Hello name={name} />
    </div>
  );
}

function Title() {
  return <h1>Example 3: props</h1>;
}

export default App;
