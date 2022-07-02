import "./App.css";
import { useState } from "react";
import { Header, Onboard, Profile, Welcome, Workspace } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  const [boardingData, setBoardingData] = useState({
    userInfo: {
      name: "",
      displayName: "",
    },
    workspace: "",
    profile: "",
  });

  const [boardingProgress, setBoardingProgress] = useState(15);

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
            <Route path='/workspace' element={<Workspace />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/onboard' element={<Onboard />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
