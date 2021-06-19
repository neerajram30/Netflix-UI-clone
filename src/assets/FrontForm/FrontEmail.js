import React from "react";
import "./FrontForm.css";

function FrontEmail({ ...resProps }) {
  return <input className="form-email" {...resProps} />;
}

export default FrontEmail;