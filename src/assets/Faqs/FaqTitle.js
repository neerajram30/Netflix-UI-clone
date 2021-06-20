import React from "react";
import "./FaqStyles.css";

function FaqTitle({ children, ...restProps }) {
  return (
    <h1 className="Faq-title" {...restProps}>
      {children}
    </h1>
  );
}

export default FaqTitle;