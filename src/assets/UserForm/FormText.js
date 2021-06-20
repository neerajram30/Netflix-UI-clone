import React from "react";
import "./FormStyles.css";

function FormText({ children, ...restProps }) {
  return (
    <p className="sign-form-text" {...restProps}>
      {children}
    </p>
  );
}

export default FormText;