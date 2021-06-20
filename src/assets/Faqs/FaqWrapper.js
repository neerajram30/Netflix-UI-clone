import React from "react";
import "./FaqStyles.css";

function FaqWrapper({ children, ...restProps }) {
  return (
    <section className="Faq-wrapper" {...restProps}>
      {children}
    </section>
  );
}

export default FaqWrapper;