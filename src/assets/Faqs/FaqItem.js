import React, { useState } from "react";
import FaqContext from "./FaqContext";
import "./FaqStyles.css";

function FaqItem({ children, ...restProps }) {
  const [FaqShow, setFaqShow] = useState(false);
  return (
    <FaqContext.Provider
      value={[FaqShow, setFaqShow]}
      {...restProps}
    >
      <div className="Faq-item">{children}</div>
    </FaqContext.Provider>
  );
}

export default FaqItem;