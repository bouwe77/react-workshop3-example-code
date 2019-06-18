import React from "react";

export default function Form(props) {
  let descField = React.createRef();

  function submitForm(event) {
    // Prevent that a submit reloads the page.
    event.preventDefault();

    // Read the entered description from the textbox
    const description = descField.current.value;

    // Call the addToDo callback function from props and supply the entered description.
    props.addToDo(description);

    // Clear the description so the textbox is cleared.
    descField.current.clear();
  }

  return (
    <form onSubmit={submitForm}>
      <input type="text" ref={descField} />
      <br />
      <button type="submit">OK</button>
    </form>
  );
}
