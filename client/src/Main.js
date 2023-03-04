import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.js";
import Map from "./components/Map.js";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import StartPage from "./pages/StartPage.js/StartPage";
import Users from "./pages/Users/Users.js";

function Main() {
  
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<StartPage />} />
          <Route path="/map" element={<Map />} />
          <Route path="/users" element={<Users />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Main;
