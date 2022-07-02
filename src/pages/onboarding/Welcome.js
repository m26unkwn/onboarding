import React from "react";
import { Button, Input } from "../../components";
import "./board.css";

export const Welcome = () => {
  return (
    <main className='board-container'>
      <div className='greeting-text'>
        <h1>Welcome! First thing first...</h1>
        <p>You can always change them better.</p>
      </div>
      <div className='form-container'>
        <Input title='First Name' placeholder='steve Jobs' />
        <Input title='Display Name' placeholder='steve' />
        <Button title='Create Workspace' />
      </div>
    </main>
  );
};
