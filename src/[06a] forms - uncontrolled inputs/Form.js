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

    // Clear the textbox.
    descField.current.value = "";
  }

  return (
    <form onSubmit={submitForm}>
      <input type="text" ref={descField} /> <button type="submit">Add</button>
    </form>
  );
}
