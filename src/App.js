import "./App.css";
import { Header, Welcome, Workspace } from "./pages";
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
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
