import axios from 'axios';
import React, { Component } from 'react';
import './App.css';

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
    let userId = this.token();
    this.getUserDetails(userId)
}

token = () => {
    const jwt = localStorage.getItem('token');
    try {
        const user = jwtDecode(jwt);
        this.setState({
            userLoggedIn: user
        });
        return user.id;
    }catch(error){
        console.log(error, "error with token function");
    }
}


async get_All_Coffee(){
    
        // const jwt = localStorage.getItem('token');
        // const response = await axios.get('http://127.0.0.1:8000/api/coffee/all/');
        // console.log(response.data);

    try {
        const response = await axios.get('http://127.0.0.1:8000/api/coffee/all/');
        this.setState({
            allCoffee: response.data
        }, ()=>console.log(this.state.allCoffee))
    }   catch (error) {
        console.log(error, 'error with get all coffee');
        return error

    }

};

registerUser = async (userToBeregisteredObject) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/authentication' , userToBeRegisteredObject);
    this.loginUser({'userName' : userToBeRegisteredObject.userName, 'password' : userToBeRegisteredObject.password});
    window.location = '/register';
  } catch(error) {
    console.log(error, 'error with register user');  
  }
}

loginUser = async (loggedInUserObject) => {
  console.log("Inside LogInUser Callback")
  console.log("object", loggedInUserObject)
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/authentication/login/', loggedInUserObject);
    localStorage.setItem('token', response.data.token);
    this.token();
    this.getUserDetails(this.state.userLoggedIn.id);
    console.log("Login State user:" , this.state.userLoggedIn)
  } catch(error) {
      console.log(error, 'error with logged in user');
      return error
  }
}

loggedOutUser = () => {
    localStorage.removeItem('token');
    window.location = '/';
    this.setState({userLoggedIn : null});
  }

    render() {
        return (
            <h1>Valhalla Coffee Company</h1>
            
        )
    }
}

export default App;