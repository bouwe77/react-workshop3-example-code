import React from "react";

import Hello from "./Hello";

function App() {
  return (
    <div>
      <Title />
      <Hello name="World" />
    </div>
  );
}

function Title() {
  return <h1>Example 3: props</h1>;
}

export default App;

// Other stuff to pass as props:
// const name = "people";
// const names = ["John", "Paul", "George", "Ringo"];
// const capitalize = name => name.toUpperCase();
// const reorder = name =>
//   name
//     .split("")
//     .sort()
//     .join("");
