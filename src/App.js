import "./App.css";
import { Header, Onboard, Profile, Welcome, Workspace } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='app-container'>
      <div className='main-container'>
        <Header />
        <Routes>
          <Route path='/'>
            <Route path='/' element={<Welcome />} />
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
