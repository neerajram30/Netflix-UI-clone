import React from "react";
import "./FormStyles.css";

function FormWrapper({ children, ...restProps }) {
  return (
    <div className="sign-form-wrapper" {...restProps}>
      {children}
    </div>
  );
}

export default FormWrapper;