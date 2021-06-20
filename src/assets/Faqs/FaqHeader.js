import React, { useContext } from "react";
import FaqContext from "./FaqContext";
import "./FaqStyles.css";
import close from '../images/close-slim.png'
import plus from '../images/add.png'

function FaqHeader({ children, ...restProps }) {
  const [FaqShow, setFaqShow] = useContext(FaqContext);

  function handleClick() {
    setFaqShow(!FaqShow);
  }

  return (
    <div className="Faq-header" onClick={handleClick} {...restProps}>
      {children}
      {FaqShow ? (
        <img
          className="Faq-image"
          src={close}
          alt="Close"
        />
      ) : (
        <img
          className="Faq-image"
          src={plus}
          alt="Open"
        />
      )}
    </div>
  );
}

export default FaqHeader;