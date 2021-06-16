import React from "react";
import "./FrontPage.css";

function Title({ children, ...restProps }) {
  return (
    <h1 className="title" {...restProps}>
      {children}
    </h1>
  );
}

export default Title;