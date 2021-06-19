import React from "react";
import "./FrontForm.css";

function FrontFormtext({ children, ...restProps }) {
  return (
    <div className="form-text" {...restProps}>
      {children}
    </div>
  );
}

export default FrontFormtext;