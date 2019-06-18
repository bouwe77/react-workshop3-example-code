import React from "react";

export default function Buttons(props) {
  const handleUpdateClick = () => {
    props.updatePhoto();
  };

  const handleDeleteClick = () => {
    props.removePhoto();
  };

  const handleAddClick = () => {
    props.addPhoto();
  };

  return (
    <div className="buttons">
      <button onClick={handleAddClick}>+</button>
      &nbsp;
      <button onClick={handleUpdateClick}>&#x21bb;</button>
      &nbsp;
      <button onClick={handleDeleteClick}>-</button>
    </div>
  );
}
