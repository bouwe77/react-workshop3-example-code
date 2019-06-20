import React from "react";

function Title({ title, subtitle }) {
  return (
    <>
      <div className="header">
        <span className="title">&raquo; {title}</span>
      </div>
      <h3>{subtitle}</h3>
    </>
  );
}

export default Title;
