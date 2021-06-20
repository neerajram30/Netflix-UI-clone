
import React, { useContext } from "react";
import FaqContext from "./FaqContext";
import "./FaqStyles.css";

function FaqBody({ children, ...restProps }) {
  const [FaqShow, setFaqShow] = useContext(FaqContext);

  return FaqShow ? (
    <div className="faq-body" {...restProps}>
      {children}
    </div>
  ) : null;
}
export default FaqBody;