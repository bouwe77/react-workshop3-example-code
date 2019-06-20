import React, { useState } from "react";

import Title from "../Title";
import Form from "./Form";
import ToDoList from "./ToDoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addToDo(description) {
    setTodos([...todos, { description }]);
  }

  return (
    <div>
      <Title
        title="Example 6a: forms with UNCONTROLLED inputs"
        subtitle="My TO DO App"
      />
      <Form addToDo={addToDo} />
      <ToDoList todos={todos} />
    </div>
  );
}
