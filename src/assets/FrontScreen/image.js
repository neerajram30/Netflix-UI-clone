import React from "react";
import "./FrontPage.css";

function Image({ ...restProps }) {
  return <img className="image" alt="" {...restProps} />;
}

export default Image;