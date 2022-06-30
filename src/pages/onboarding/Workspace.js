import React from "react";
import { Button, Input } from "../../components";
import "./board.css";

export const Workspace = () => {
  return (
    <main className='board-container'>
      <div className='greeting-text'>
        <h1>Let's setup home for all your work</h1>
        <p>You can always create another workspace later.</p>
        <div className='form-container'>
          <Input title='Workspace Name' placeholder='Eden' />
          <Input title='Workspace URL' placeholder='Example' />
          <Button title='Create Workspace' />
        </div>
      </div>
    </main>
  );
};
