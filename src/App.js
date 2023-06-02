import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Profile from './Components/Student/Profile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aprofile from './Components/Admin/Aprofile';
import { Login } from './Components/Login';

function App() {
  const [isstudent,setIsstudent] = useState(false);
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [userdetails,setUserdetails] = useState({});
  return (
      <>
      <Router>
        <Routes>
        <Route path='/login' element={
           <>
            <Login isLoggedIn={isLoggedIn}  setIsLoggedIn={setIsLoggedIn} userdetails={userdetails}  setUserdetails={setUserdetails}/>
           </>} />
           <Route path='/student' element={
           <>
           <Navbar isstudent={true}/>
           <Profile isstudent={true}/>
           </>} />
           <Route path='/admin' element={<>
            <Navbar isstudent={false}/>
            <Aprofile/>
           </>} />
        </Routes>
      </Router>
      </>
  );
}

export default App;
