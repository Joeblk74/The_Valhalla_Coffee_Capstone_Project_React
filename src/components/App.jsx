import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Login from './Login/Login';
import {RegisterUser} from './Register/Register'
import jwt_decode from 'jwt-decode';
import CoffeeProducts from './CoffeeProducts/CoffeeProducts'
import ProductDetail from './ProductDetail/ProductDetail';
import AboutValhalla from './About/About';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import Subscribe from './Subscribe/Subscribe';
import {Image} from 'react-bootstrap'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            coffee: [],
            user: {},
            selectedProduct: {}
        };
    }
componentDidMount(){
    this.getAllCoffee();
    const userFromStorage = localStorage.getItem("coffee user")
    if (userFromStorage){
        this.setState({user:JSON.parse(userFromStorage)})
    }
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


async getAllCoffee(){
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/coffee/all/');
        console.log(response);
        this.setState({
            coffee: response.data
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
    this.loginUser({'username' : userToBeRegisteredObject.username, 'password' : userToBeRegisteredObject.password});
    window.location ="/"
   
  } catch(error) {
    console.log(error, 'error with register user');  
  }
}

loginUser = async (loggedInUserObject) => {
//   console.log("Inside LogInUser Callback")
//   console.log("object", loggedInUserObject)
    try{
        const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', loggedInUserObject);
        console.log('login response', response.data)
        localStorage.setItem('token', response.data.access);
        loggedInUserObject.token = response.data.access
        this.setState({user : loggedInUserObject})
        localStorage.setItem("coffee user", JSON.stringify(loggedInUserObject) )
        window.location = '/'
    } catch (error){
        console.log(error)
    }

}

loggedOutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('coffee user');
    // window.location = '/';
    this.setState({user : null});
  }

    render() {
        return (
            <div className="App">

                
                <NavBar user ={this.state.user} loggedOutUser ={this.loggedOutUser} />
                    <div className="AppContainer">
                <Routes>

                    <Route path="/register" element={<RegisterUser registerUser ={this.registerUser}/>}/>
                    <Route path="/login" element={<Login login={this.loginUser} />} />
                    <Route path="/coffee" element={<CoffeeProducts
                        selectedProduct={this.state.selectedProduct} 
                        onClick={(product)=>this.setState({selectedProduct : product})}
                        products={this.state.coffee} />} />
                    <Route path="/subscribe" element={<Subscribe
                        products={this.state.coffee} />} />
                    <Route path="/detail/:id" element={<ProductDetail coffee={this.state.coffee}/> } />
                    <Route path="/about" element={<AboutValhalla/>}/>
                    <Route path="/shoppingcart" element={<ShoppingCart/>}/>
                    <Route path="/" exact element={<Image fluid style={{width : "60%", opacity : .95}} src= "/Images/valhallalogo8.png"/>}/>

                </Routes>
                    </div> 
            </div>  

            
            
        );
    }
}

export default App;