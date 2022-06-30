import React from "react";
import "./input.css";

export const Input = ({ title, placeholder }) => {
  return (
    <div className='input-container'>
      <label>{title}</label>
      <input type='text' placeholder={placeholder} />
    </div>
  );
};
