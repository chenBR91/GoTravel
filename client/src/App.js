import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./Main";
import { BrowserRouter as Router } from "react-router-dom";

// Context
import UsersContext from "./UsersContext";

function App() {
  const [user, SetUser] = useState({});

  useEffect(() => {
    uploadUserApi();
  }, []);

  const uploadUserApi = async () => {
    console.log('start user', user);
  };

  const usersValue = {
    user,
    SetUser,
  };

  return (
    <Router>
      <UsersContext.Provider value={usersValue}>
        <Main />
      </UsersContext.Provider>
    </Router>
  );
}

export default App;
