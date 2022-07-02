import React from "react";
import { ReactComponent as TeamIcon } from "../../assets/Team.svg";
import { ReactComponent as UserIcon } from "../../assets/User.svg";
import { Button } from "../../components";

export const Profile = () => {
  return (
    <main className='board-container'>
      <div className='greeting-text'>
        <h1>How are you Planning to use Eden?</h1>
        <p>W'll streamline your setup experience acc.</p>
      </div>
      <div className='form-container'>
        <div className='profile-card-container'>
          <div className='profile-card'>
            <UserIcon />
            <div className='card-content'>
              <h5>For myself</h5>
              <p>Write better. Think more clearly. Stay organised.</p>
            </div>
          </div>
          <div className='profile-card'>
            <TeamIcon />
            <div className='card-content'>
              <h5>With my team</h5>
              <p>Wikis, docs, taks & projects all in one place.</p>
            </div>
          </div>
        </div>
        <Button title='Create Workspace' />
      </div>
    </main>
  );
};
