import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import background from './coffeebackground.jpg';
// import { RegisterUser } from './Register/Register';
import NavBar from './NavBar/NavBar';
import Login from './Login/Login';
import {RegisterUser} from './Register/Register'
import jwt_decode from 'jwt-decode';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            coffee: [],
            user: [],
        };
    }
componentDidMount(){
    this.get_All_Coffee();
    // let userId = this.token();
    // this.getUserDetails(userId)
}

token = () => {
    const jwt = localStorage.getItem('token');
    try {
        const user = jwt_decode(jwt);
        this.setState({
            userLoggedIn: user
        });
        return user.id;
    }catch(error){
        console.log(error, "error with token function");
    }
}


async get_All_Coffee(){
    try {
        const response = await axios.get('http://127.0.0.1:3000/api/coffee/all/');
        this.setState({
            allCoffee: response.data
        }, ()=>console.log(this.state.allCoffee))
    }   catch (error) {
        console.log(error, 'error with get all coffee');
        return error

    }

};

registerUser = async (userToBeRegisteredObject) => {
    let thing = {
        "username": userToBeRegisteredObject.username,
        "password": userToBeRegisteredObject.password,
        "email": userToBeRegisteredObject.email,
        "first_name":userToBeRegisteredObject.first_name,
        "last_name": userToBeRegisteredObject.last_name,
        "middle_name": userToBeRegisteredObject.middle_name,
        "prefix":userToBeRegisteredObject.prefix,
    }
    console.log(userToBeRegisteredObject)
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/auth/register/' , thing);
   
  } catch(error) {
    console.log(error, 'error with register user');  
  }
  this.loginUser({'username' : userToBeRegisteredObject.username, 'password' : userToBeRegisteredObject.password});
  window.location ="/"
}

loginUser = async (loggedInUserObject) => {
  console.log("Inside LogInUser Callback")
  console.log("object", loggedInUserObject)
    const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', loggedInUserObject);
    console.log(response.data)
    localStorage.setItem('token', response.data.access);

}

loggedOutUser = () => {
    localStorage.removeItem('token');
    window.location = '/';
    this.setState({userLoggedIn : null});
  }

    render() {
        return (
            <><div className="App">
                <NavBar />
                <h1>Valhalla Coffee Company</h1>
                <Routes>
                    <Route path="/register" element={<RegisterUser registerUser ={this.registerUser}/>}/>
                    <Route path="/login" element={<Login login={this.loginUser} />} />
                </Routes>
            </div></>  

            
            
        );
    }
}

export default App;