import React from "react";
import "./FormStyles.css";

function FormCaptcha({ children, ...restProps }) {
  return (
    <p className="sign-form-captcha" {...restProps}>
      {children}
    </p>
  );
}
export default FormCaptcha;