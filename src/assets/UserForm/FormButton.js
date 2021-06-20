import React from "react";
import "./FormStyles.css";

function FormButton({ children, ...restProps }) {
  return (
    <button className="sign-form-Button" type="submit" {...restProps}>
      {children}
    </button>
  );
}

export default FormButton;