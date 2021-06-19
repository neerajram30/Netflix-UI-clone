import React from "react";
import "./FrontForm.css";
import image from '../images/chevron-right.png'
function FormButton({ children, ...restProps }) {
  return (
    <div>
      <a className="form-button" href="/signup" {...restProps}>
        {children}
        <img
          className="form-button-image"
          src={image}
          alt=""
        />
      </a>
    </div>
  );
}

export default FormButton;