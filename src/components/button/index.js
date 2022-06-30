import React from "react";
import "./button.css";

export const Button = ({ title, onClick }) => {
  return (
    <button className='btn primary' onClick={onClick}>
      {title}
    </button>
  );
};
