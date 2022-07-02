import React from "react";
import "./input.css";

export const Input = ({ title, placeholder, optional }) => {
  return (
    <div className='input-container'>
      <label>
        {title} {optional && <span className='label-optional'>(optional)</span>}
      </label>
      <div className='input-optional-container'>
        {optional && <div className='optional-side'>{optional}</div>}
        <input
          type='text'
          id={optional && "border-left-radius"}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
