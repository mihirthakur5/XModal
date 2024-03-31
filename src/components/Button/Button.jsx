import React from "react";
import "./Button.css";

const Button = ({ toShow, text }) => {
  return (
    <button onClick={toShow} type="submit" className="submit-button">
      {text}
    </button>
  );
};

export default Button;
