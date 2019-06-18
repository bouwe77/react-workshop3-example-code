import React from "react";

export default function Photo(props) {
  const handleSelectClick = () => {
    props.selectPhoto(this.props.photo.id);
  };

  const className = this.props.isPhotoSelected ? "photo-selected" : "photo";
  return (
    <div className={className}>
      <img
        src={props.photo.url}
        onClick={handleSelectClick}
        alt={props.photo.id}
      />
    </div>
  );
}
