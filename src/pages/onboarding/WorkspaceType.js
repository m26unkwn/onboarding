import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as TeamIcon } from "../../assets/Team.svg";
import { ReactComponent as UserIcon } from "../../assets/User.svg";
import { Button } from "../../components";

export const WorkspaceType = ({
  setBoardingData,
  setBoardingProgress,
  boardingData,
}) => {
  const navigate = useNavigate();
  const { workspaceType } = boardingData;
  console.log(workspaceType);

  const userProfileHandler = (value) => {
    setBoardingData((prev) => ({ ...prev, workspaceType: value }));
  };

  const clickHanlder = () => {
    if (workspaceType.length > 0) {
      setBoardingProgress((prev) => prev + 25);
      navigate("/onboard");
    } else {
      alert("Please Choose workspace type");
    }
  };

  return (
    <main className='board-container'>
      <div className='greeting-text'>
        <h1>How are you Planning to use Eden?</h1>
        <p>W'll streamline your setup experience acc.</p>
      </div>
      <div className='form-container'>
        <div className='profile-card-container'>
          <div
            className={
              workspaceType === "myself"
                ? " card-border profile-card "
                : "profile-card"
            }
            onClick={() => userProfileHandler("myself")}>
            <UserIcon />
            <div className='card-content'>
              <h5>For myself</h5>
              <p>Write better. Think more clearly. Stay organised.</p>
            </div>
          </div>
          <div
            className={
              workspaceType === "team"
                ? "profile-card card-border"
                : "profile-card"
            }
            onClick={() => userProfileHandler("team")}>
            <TeamIcon />
            <div className='card-content'>
              <h5>With my team</h5>
              <p>Wikis, docs, taks & projects all in one place.</p>
            </div>
          </div>
        </div>
        <Button title='Create Workspace' onClick={clickHanlder} />
      </div>
    </main>
  );
};
