import React from "react";
import { Link } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import "./Coffee.css";
import {Row,Col} from "react-bootstrap";

function CoffeeProducts({ products }) {
  return (
    <div className="CoffeeContainer"> 
    <img style={{width : "30%"}} src= "/Images/valhallalogo8.png"/>
      <h1>Coffee Products</h1>
      <Row className="CardContainer">
        {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} style={{margin:"10px"}}>
            <CoffeeCard product={product}/>
            </Col>


        ))}
    
      </Row>
    </div>
  );
}
export default CoffeeProducts;
