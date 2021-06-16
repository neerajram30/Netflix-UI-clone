import React from "react";
import "./FrontPage.css";

function TextWrapper({ children, ...restProps }) {
  return (
    <div className="text-wrapper" {...restProps}>
      {children}
    </div>
  );
}

export default TextWrapper;