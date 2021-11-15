import React, {useState} from 'react';
import styled from "styled-components";

const RegisterDiv = styled.div`

.Register-Container{
  width: 100%;
  // height: 100%;
  background-color: #eeeeee;
  color: red;
  display:flex; 
  justify-content:center;
  align-items:center;
  height:100vh;

}

.Register-Input{
  width: 100%;
  padding: 12px 20px;
  // margin: 8px;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box
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
        <button type="submit">Create Account</button>
      </form>
      </div>
      </RegisterDiv>
    </div>
  )
}
