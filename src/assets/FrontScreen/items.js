import React from "react";
import "./FrontPage.css";

function Item({ children, ...restProps }) {
  return (
    <div className="item" {...restProps}>
      {children}
    </div>
  );
}

export default Item;