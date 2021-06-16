import React from "react";
import "./FrontPage.css";

function SubTitle({ children, ...restProps }) {
  return (
    <h2 className="subtitle" {...restProps}>
      {children}
    </h2>
  );
}

export default SubTitle;