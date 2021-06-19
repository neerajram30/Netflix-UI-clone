import React from "react";
import "./FrontForm.css";

function FormWrapper({ children, ...restProps }) {
  return (
    <div className="form-wrapper" {...restProps}>
      {children}
    </div>
  );
}

export default FormWrapper;