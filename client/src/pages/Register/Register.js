import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Login/Login.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ButtonSend from "../../components/ButtonSend.js";

function Register() {
  const inputValues = ["username", "password", "email"];
  const [contactInputInfo, setContactInputInfo] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [valideInfo, setValideInfo] = useState({
    username: {message: "", isValide: false},
    password: {message: "", isValide: false},
    email: {message: "", isValide: false},
  })
  const navigate = useNavigate();

  useEffect(() => {
    console.log(contactInputInfo);
    console.log(valideInfo);
  }, [contactInputInfo, valideInfo]);

  const handleSubmitSend = async (event) => {
    event.preventDefault();

    try {
      const register = await axios.post(
        "http://localhost:8000/api/users/register",
        { ...contactInputInfo }
      );
      console.log("register", register);
      validation(register.data)

        // clear paramters
        setContactInputInfo({ Username: "", Password: "", Email: ""})
      
    } catch (err) {
      console.log("err", err);
    }
  };

  const validation = (data) => {
    if(data === "registred") {
        navigate("/");
    }
    else if(data === "username exist") {
        setValideInfo({
            ...valideInfo,
            "username": {message: "* username is exist", isValide: true},
        })
    }
  }

  const handleChangeInput = (event) => {
    setContactInputInfo({
      ...contactInputInfo,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="cards">
      <div className="ground-img"></div>
      <div className="crad-login">
        <div>
          <h1>Register</h1>
        </div>

        <BasicTextFields
          inputValues={inputValues}
          handleSubmitSend={() => handleSubmitSend}
          handleChangeInput={() => handleChangeInput}
          valideInfo={valideInfo}
        />
        <div className="register-link">
          <div>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function BasicTextFields({ inputValues, handleSubmitSend, handleChangeInput, valideInfo }) {
  
    const isValideValue = (filed) => {
    if(valideInfo[filed].message !== "") {
        //return valideInfo
        console.log('yupi');
        return valideInfo[filed].message
    }
  };


  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmitSend()}
    >
      <div className="field">
        {inputValues.map((inputValue, index) => {
          return (
            <div key={index}>
              <TextField
                onChange={handleChangeInput()}
                id={inputValue}
                name={inputValue}
                label={inputValue}
                variant="outlined"
                className="field-input"
                helperText={isValideValue(inputValue)}
                // error={isValideValue(usernameValide)}
              />
            </div>
          );
        })}
      </div>
      <ButtonSend />
    </Box>
  );
}

export default Register;
