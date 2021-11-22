import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../NavBar/NavBar";


const LoginDiv = styled.div`

.LoginContainer{
  width: 100%;
  // height: 100%;
  background-color: #eeeeee00;
  color: #3412f3;
  font-weight: bolder;
  display:flex; 
  justify-content:center;
  align-items:center;
  height:100vh;

}

.loginInput{
  width: 100%;
  padding: 12px 20px;
  // margin: 8px;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  background-color: #ebf1f129;
}



`

const Login = (props) => {
  const [loginUser, setLoginUser] = useState();

  const handleChange = (event) => {
    setLoginUser(previousState => ({
      ...previousState,
      [event.target.name]: event.target.value
    }));
  }

  const handleSubmit = (event) => {  

    console.log("Inside Handle Submit")
    event.preventDefault()
    console.log("handlesubmit", loginUser);
    props.login(loginUser)
    // window.location = '/';
  }

  return (
    <div>
   
        <LoginDiv> 
        <div className = "LoginContainer">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">User Name</label>
          <input

            className = "loginInput"
            name="username"
        
            onChange={handleChange}
            type="text"
          />
          <br />
          <label htmlFor="">Password</label>
          <input

            className = "loginInput"
            name="password"
         
            onChange={handleChange}
            type="password"
          />
          <button type = "submit">Login</button>
        </form>
        </div>
        </LoginDiv>
      </div>
    
  );
};

export default Login;