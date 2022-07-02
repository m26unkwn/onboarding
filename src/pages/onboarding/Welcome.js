import React, { useState } from "react";
import { Button, Input } from "../../components";
import { useNavigate } from "react-router-dom";
import "./board.css";

export const Welcome = ({ setBoardingData, setBoardingProgress }) => {
  const [user, setUser] = useState({
    firstName: "",
    displayName: "",
  });

  const navigate = useNavigate();

  // on input change
  const onChangeUserInput = (e, value) => {
    setUser((prev) => ({ ...prev, [value]: e.target.value }));
  };

  // navigating user to next route
  const clickHanlder = (e) => {
    e.preventDefault();
    setBoardingData((prev) => ({
      ...prev,
      userInfo: {
        name: user.firstName,
        displayName: user.displayName,
      },
    }));
    setBoardingProgress((prev) => prev + 25);
    navigate("/workspace");
  };
  return (
    <main className='board-container'>
      <div className='greeting-text'>
        <h1>Welcome! First thing first...</h1>
        <p>You can always change them better.</p>
      </div>
      <form className='form-container' onSubmit={clickHanlder}>
        <Input
          title='First Name'
          placeholder='steve Jobs'
          required={true}
          value={user.firstName}
          onChange={(e) => onChangeUserInput(e, "firstName")}
        />
        <Input
          title='Display Name'
          placeholder='steve'
          value={user.displayName}
          required={true}
          onChange={(e) => onChangeUserInput(e, "displayName")}
        />
        <Button title='Create Workspace' />
      </form>
    </main>
  );
};
