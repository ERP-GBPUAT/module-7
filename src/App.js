import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Profile from './Components/Student/Profile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aprofile from './Components/Admin/Aprofile';

function App() {
  return (
      <>
      <Router>
        <Navbar/>
        <Routes>
           <Route path='/student' element={<Profile/>} />
           <Route path='/admin' element={<Aprofile/>} />
        </Routes>
      </Router>
      </>
  );
}

export default App;
