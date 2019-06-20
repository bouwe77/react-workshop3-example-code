import React from "react";

function Title({ title, subtitle }) {
  return (
    <>
      <span className="title">&raquo; {title}</span>
      <h3>{subtitle}</h3>
    </>
  );
}

export default Title;
