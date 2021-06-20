  
import React from "react";
import "./FormStyles.css";

function FormLink({ children, ...restProps }) {
  return (
    <a className="sign-form-link" {...restProps}>
      {children}
    </a>
  );
}

export default FormLink;