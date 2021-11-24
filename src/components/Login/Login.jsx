import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../NavBar/NavBar";
import { Button } from "react-bootstrap";
import "./Login.css"


const LoginDiv = styled.div`

{
  width: 50%;
  background-color: #090909bd;
  color: #4860c2;
  font-weight: bolder;
  padding:50px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
} `

const LoginInput=styled.input `{
  width: 90%;
  padding: 10px;
  margin: 10px;
  display: inline-block;
  // border: px solid #ccc;
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
    
   
    <LoginDiv> 

          <img style={{width : "50%"}} src= "/Images/valhallalogo8.png"/>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">User Name</label>
          <LoginInput

            className = "loginInput"
            name="username"
        
            onChange={handleChange}
            type="text"
          />
          <br />
          <label htmlFor="">Password</label>
          <LoginInput

            className = "loginInput"
            name="password"
         
            onChange={handleChange}
            type="password"
          />
          <Button type = "submit" style={{textAlign:"center"}}>Login</Button>
        </form>

        </LoginDiv>
    
  );
};

export default Login;