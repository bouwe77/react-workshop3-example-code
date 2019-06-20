import React from "react";

import Hello from "./Hello";
import Title from "../Title";

function App() {
  return (
    <div>
      <Title title="Example 3: props" subtitle="My Hello App" />
      <Hello name="World" />
    </div>
  );
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
