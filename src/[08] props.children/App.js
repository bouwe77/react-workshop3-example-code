import React from "react";

const App = () => {
  return (
    <>
      <h1>Example 8: props.children</h1>
      <Panel>
        <h1>Title</h1>
        <p> content...</p>
      </Panel>
    </>
  );
};

const Panel = props => <div className="panel">{props.children}</div>;

export default App;

// Photo:
// <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/vestrahorn-iceland-francesco-riccardo-iacomino.jpg" width="300" height="200" alt=""/>
