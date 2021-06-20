import React from "react";
import "./FormStyles.css";

function FormTitle({ children, ...restProps }) {
  return (
    <h1 className="sign-form-title" {...restProps}>
      {children}
    </h1>
  );
}

export default FormTitle;