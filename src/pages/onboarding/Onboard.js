import React from "react";
import { Button } from "../../components";
import Sign from "../../assets/Sign.png";

export const Onboard = () => {
  return (
    <main className='board-container'>
      <div className='greeting-text'>
        <img src={Sign} alt='onboarding-done' />
        <h1>Congratulations, Eren? </h1>
        <p>You have completed onboarding, you can start using Eden!.</p>
      </div>
      <div className='form-container'>
        <Button title='Launch Eden' />
      </div>
    </main>
  );
};
