import React from 'react'
import {Routes, Route} from "react-router-dom";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import StartPage from './pages/StartPage.js/StartPage';

function Main() {
  return (
    <div className="App">

    <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>


    </div>
  )
}

export default Main