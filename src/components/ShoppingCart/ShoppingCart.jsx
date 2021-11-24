import {Button, Col, Row} from "react-bootstrap";
import React,{useState, useEffect} from "react";
import "./ShoppingCart.css"

function ShoppingCart({ coffee }) {
    const [cart,setCart]=useState([])

    useEffect(()=>{
        const cartFromStorage = localStorage.getItem("coffeeCart")
    const items=cartFromStorage ? JSON.parse(cartFromStorage) :[]  
    setCart(items)
    },[])

    const removeFromCart = (id)=>{
        const newCart=cart.filter(item => item.cart_id !== id)
        localStorage.setItem("coffeeCart", JSON.stringify(newCart))
      setCart(newCart)
    }
    return (
      <>
        <img style={{width : "25%"}} src= "/Images/valhallalogo8.png"/>
      <div className="CartContainer">
        <Row>
          {cart.length>0 && (
            <>
        <Col sm={12} md={6}>
              {cart.map((item,i) => (
              <div>
                  <h3>{item.flavor}</h3>
                  <p>${item.price}</p>
                   <Button onClick={() => removeFromCart(item.cart_id)}>Remove</Button>
              </div>

              ))}
          
          </Col>
          <Col sm={12} md={6}>
            <h2>Total : ${cart.reduce((total, item) => total + item.price, 0)}</h2>
            </Col>
            </>     
            )}
          </Row>
      </div>
      </>
    );
  }
  export default ShoppingCart;
  