import "./App.css";
import { useState } from "react";
import { Header, Onboard, Welcome, Workspace, WorkspaceType } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  const [boardingData, setBoardingData] = useState({
    userInfo: {
      name: "",
      displayName: "",
    },
    workspace: "",
    workspaceType: "",
  });

  const [boardingProgress, setBoardingProgress] = useState(25);

  return (
    <div className='app-container'>
      <div className='main-container'>
        <Header progress={boardingProgress} />
        <Routes>
          <Route path='/'>
            <Route
              path='/'
              element={
                <Welcome
                  setBoardingData={setBoardingData}
                  setBoardingProgress={setBoardingProgress}
                />
              }
            />
            <Route
              path='/workspace'
              element={
                <Workspace
                  setBoardingData={setBoardingData}
                  setBoardingProgress={setBoardingProgress}
                />
              }
            />
            <Route
              path='/profile'
              element={
                <WorkspaceType
                  boardingData={boardingData}
                  setBoardingData={setBoardingData}
                  setBoardingProgress={setBoardingProgress}
                />
              }
            />
            <Route path='/onboard' element={<Onboard />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
