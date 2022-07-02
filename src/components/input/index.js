import React from "react";
import "./input.css";

export const Input = ({
  title,
  placeholder,
  optional,
  required,
  value,
  onChange,
}) => {
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
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      </div>
    </div>
  );
};
