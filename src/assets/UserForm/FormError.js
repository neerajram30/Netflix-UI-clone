import React from "react";
import "./FormStyles.css";

function FormError({ children, ...restProps }) {
  return (
    <div className="sign-form-error" {...restProps}>
      {children}
    </div>
  );
}

export default FormError;