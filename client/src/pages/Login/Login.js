import React, { useState, useEffect } from "react";
import "./Login.css";
import axios from "axios"
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const ButtonSend = () => {
  return (
    <div>
      <button type="submit" className="btn-send">
        Send
      </button>
    </div>
  );
};

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameValide, setUsernameValide] = useState("");
  const [passwordValide, setPasswordValide] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("username", username);
    console.log("password", password);
  }, [username, password]);

  const handleSubmitSend = async (evt) => {
    evt.preventDefault();
    console.log("set parameter");
    setPassword(password);
    setUsername(username);

    try {
        const login = await axios.post("http://localhost:8000/api/users/login", {username, password})   
        console.log('login', login); 
        inputValidation(login.data);
        if(login.data === 'LOGININ')
            navigate("/")
    
    } catch(err) {
        console.log('err', err);
    }
  };

  const handleInput = (e) => {
    const typeField = e.target.id;
    if (typeField === "username") {
      setUsername(e.target.value);
    } else if (typeField === "password") {
      setPassword(e.target.value);
    }
  };

  const inputValidation = (data) => {
    console.log('data', data);
    if(data.message === "User Doesn't Exist") {
        setUsernameValide("* username is not exist")
        console.log('usernameValide', usernameValide);
    }
    
    if(data.message === "Wrong username and password combination") {
        setPasswordValide("* password incorrect");
        setUsernameValide("");
    }
  }



  return (
    <div className="cards">
      <div className="ground-img"></div>
      <div className="crad-login">
        <div>
          <h1>Login</h1>
        </div>
       
        <BasicTextFields handleSubmitSend={()=>handleSubmitSend} handleInput={()=>handleInput} usernameValide={usernameValide} passwordValide={passwordValide} />
        <div className="register-link">
            <div><Link to="/register">Register</Link></div>
        </div>
      </div>
    </div>
  );
}


  function BasicTextFields({handleSubmitSend, handleInput, usernameValide, passwordValide}) {
    const isValideValue = (value) => {
        if (value === "") {
            return false
        } else {
            return true
        }
    }
    console.log('passwordValide', passwordValide);
      return (
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmitSend()}
        >
          <div className="field">
            <div>
              <TextField
                onChange={handleInput()}
                id="username"
                label="Username"
                variant="outlined"
                className="field-input"
                helperText={usernameValide}
                error={isValideValue(usernameValide)}
              />
            </div>
            <div>
              <TextField
                onChange={handleInput()}
                id="password"
                label="Password"
                variant="outlined"
                className="field-input"
                helperText={passwordValide}
                error={isValideValue(passwordValide)}
              />
            </div>
          </div>
          <ButtonSend />
        </Box>
      );
    }

export default Login;
