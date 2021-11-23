import React, {useState} from 'react';
import styled from "styled-components";
import { Button } from "react-bootstrap";
const RegisterDiv = styled.div`

.Register-Container{
  width: 100%;
  // height: 100%;
  color:  #4860c2;
  display:flex; 
  justify-content:center;
  align-items:center;
  height:100vh;
  font-weight: bold;
  background-color: #090909bd;
}

.Register-Input{
  width: 100%;
  padding: 10px 10px;
  margin: 5px 10px;
  display: inline-block;
  box-sizing: border-box;
  background-color: #ebf1f129;
  font-size: 10px;
}



`

export const RegisterUser = (props) => {
  const [registerUsers, setRegisterUsers] = useState()

    // "username": "bob",
    // "password": "somePass@12",
    // "email": "bob@email.com",
    // "first_name": "Angela",
    // "last_name": "Smith",
    // "middle_name": "M.",
    // "prefix": "Mrs."

  const handleChange = (event) => {
    setRegisterUsers(previousState => (
      {...previousState,
      [event.target.name] : event.target.value}
    ));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerUser(registerUsers);

  }

  return(
    <div>
      <RegisterDiv>
  
      <div className = "Register-Container">
        
      <form action="" onSubmit={handleSubmit} >
        <label for="">First Name</label>
        <input className = "Register-Input" name="first_name" onChange={handleChange} type="text"/>
        <br/>
        <label htmlFor="">Last Name</label>
        <input className = "Register-Input"  name="last_name"  onChange={handleChange} type="text"/>
        <br/>
        <label htmlFor="">User Name</label>
        <input className = "Register-Input" name="username" onChange={handleChange} type="text"/>
        <br/>
        <label htmlFor="">Password</label>
        <input className = "Register-Input" name="password"  onChange={handleChange} type="text"/>
        <br/>
        <label htmlFor="">Email</label>
        <input className = "Register-Input" name="email"  onChange={handleChange} type="text"/>
        <br/>
        <label htmlFor="">MiddleName</label>
        <input className = "Register-Input" name="middle_name"  onChange={handleChange} type="text"/>
        <label htmlFor="">Prefix</label>
        <input className = "Register-Input" name="prefix"  onChange={handleChange} type="text"/>
        <Button type="submit">Create Account</Button>
      </form>
      </div>
      </RegisterDiv>
    </div>
  )
}
