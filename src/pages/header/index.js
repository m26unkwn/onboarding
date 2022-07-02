import React from "react";
import "./header.css";
import Logo from "../../assets/Logo.jpg";
export const Header = ({ progress }) => {
  return (
    <header>
      <div className='header-logo-container'>
        <img src={Logo} alt='logo' />
        <h1>Eden</h1>
      </div>
      <div className='header-content-container'>
        <div className='background-border'></div>
        <div className='filled-border' style={{ width: `${progress}%` }}></div>
        <div className='boarding-progress-container'>
          <div className='boarding filled'>
            <p>1</p>
          </div>
          <div className={progress > 15 ? "boarding filled" : "boarding"}>
            <p>2</p>
          </div>
          <div className={progress > 40 ? "boarding filled" : "boarding"}>
            <p>3</p>
          </div>
          <div className={progress > 65 ? "boarding filled" : "boarding"}>
            <p>4</p>
          </div>
        </div>
      </div>
    </header>
  );
};
