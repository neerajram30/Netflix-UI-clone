import React from "react";
import "./FormStyles.css";

function FormBase({ children, ...restProps }) {
  return (
    <form className="sign-form-base" {...restProps}>
      {children}
    </form>
  );
}

export default FormBase;