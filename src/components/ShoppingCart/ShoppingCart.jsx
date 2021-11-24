import {Button} from "react-bootstrap";
import React,{useState, useEffect} from "react";
import "./ShoppingCart.css"

function ShoppingCart({ coffee }) {
    const [cart,setCart]=useState([])

    useEffect(()=>{
        const cartFromStorage = localStorage.getItem("coffeeCart")
    const items=cartFromStorage ? JSON.parse(cartFromStorage) :[]  
    setCart(items)
    },[])

    const addToCart = (item)=>{
        const newCart=([...cart, item])
        localStorage.setItem("coffeeCart", JSON.stringify(newCart))
      setCart([...cart, item])
    }
    return (
      <>
        <img style={{width : "25%"}} src= "/Images/valhallalogo8.png"/>
      <div className="CartContainer">
        <div>
          {cart.length && (
              cart.map(item => (
              <div>
                  <h3>{item.flavor}</h3>
                  <p>${item.price}</p>
                   <Button>Remove</Button>
              </div>

              ))
          )}
          </div>
      </div>
      </>
    );
  }
  export default ShoppingCart;
  