import React from "react";
import "./FrontPage.css";

function Wrapper({ children, ...restProps }) {
  return (
    <section className="wrapper" {...restProps}>
      {children}
    </section>
  );
}

export default Wrapper;