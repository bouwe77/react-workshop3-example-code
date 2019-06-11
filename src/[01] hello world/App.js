import React from "react";
import ReactDOM from "react-dom";
import "../styles.css";

function App() {
  return <div>Example 1: Hello World!</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
// End of example...

// Note that the export below is only here to make my Examples App work...
export default App;
