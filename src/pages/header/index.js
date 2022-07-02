import React from "react";
import "./header.css";
import Logo from "../../assets/Logo.jpg";
export const Header = () => {
  return (
    <header>
      <div className='header-logo-container'>
        <img src={Logo} alt='logo' />
        <h1>Eden</h1>
      </div>
      <div className='header-content-container'>
        <div className='background-border'></div>
        <div className='filled-border'></div>
        <div className='boarding-progress-container'>
          <div className='boarding filled'>
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
