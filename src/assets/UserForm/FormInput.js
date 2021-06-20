import React from "react";
import "./FormStyles.css";

function FormInput({ ...restProps }) {
  return <input className="sign-form-input" {...restProps} />;
}

export default FormInput;