import React from "react";
import "./FrontPage.css";

function ImageWrapper({ children, ...restProps }) {
  return (
    <div className="imagewrapper" {...restProps}>
      {children}
    </div>
  );
}

export default ImageWrapper;