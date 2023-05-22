import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Profile from './Components/Student/Profile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aprofile from './Components/Admin/Aprofile';

function App() {
  const [isstudent,setIsstudent] = useState(false);
  return (
      <>
      <Router>
        <Routes>
           <Route path='/student' element={
           <>
           <Navbar isstudent={true}/>
           <Profile />
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
