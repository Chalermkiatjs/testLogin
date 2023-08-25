
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login";

import "./Login.css"
import Profile from "./Profile";


function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
    </>
    
  )
  
}

export default App;
