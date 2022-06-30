import React from "react";
import "./header.css";
export const Header = () => {
  return (
    <header>
      <div className='header-logo-container'>
        <h1>Cutshort</h1>
      </div>
      <div className='header-content-container'>
        <div className='background-border'></div>
        <div className='filled-border'></div>
        <div className='boarding-progress-container'>
          <div className='boarding first'>
            <p>1</p>
          </div>
          <div className='boarding second'>
            <p>2</p>
          </div>
          <div className='boarding third'>
            <p>3</p>
          </div>
          <div className='boarding fourth'>
            <p>4</p>
          </div>
        </div>
      </div>
    </header>
  );
};
