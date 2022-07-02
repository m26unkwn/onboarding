import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components";
import "./board.css";

export const Workspace = ({ setBoardingData, setBoardingProgress }) => {
  const [workspace, setWorkspace] = useState("");

  const navigate = useNavigate();

  // on input change
  const onChangeUserInput = (e) => {
    setWorkspace(e.target.value);
  };

  // navigating user to next route
  const clickHanlder = (e) => {
    e.preventDefault();
    setBoardingData((prev) => ({
      ...prev,
      workspace: workspace,
    }));
    setBoardingProgress((prev) => prev + 25);
    navigate("/profile");
  };

  return (
    <main className='board-container'>
      <div className='greeting-text'>
        <h1>Let's setup home for all your work</h1>
        <p>You can always create another workspace later.</p>
      </div>
      <form className='form-container' onSubmit={clickHanlder}>
        <Input
          title='Workspace Name'
          placeholder='Eden'
          required={true}
          value={workspace}
          onChange={onChangeUserInput}
        />
        <Input
          title='Workspace URL'
          placeholder='Example'
          optional='www.eden.com/'
        />
        <Button title='Create Workspace' />
      </form>
    </main>
  );
};
