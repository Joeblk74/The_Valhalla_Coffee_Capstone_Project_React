import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Col, Row, ListGroup, Button, Image } from "react-bootstrap";
import "./ProductDetail.css"


function ProductDetail({ coffee }) {
  const [cart,setCart]=useState([])
  const params = useParams();
  const product = coffee.find((item) => item.id == params.id);
  console.log(product);

  useEffect(()=>{
      const cartFromStorage = localStorage.getItem("coffeeCart")
  const items=cartFromStorage ? JSON.parse(cartFromStorage) :[]  
  setCart(items)
  },[params.id])
  const addToCart = ()=>{
      const newCart=([...cart, product])
      localStorage.setItem("coffeeCart", JSON.stringify(newCart))
    setCart([...cart, product])
  }
  return (
    <div className="ProductContainer">
          {coffee.length > 0 && (
      <Row>
        <Col sm={12} md={6}> 
        <Image src="/Images/valhallabag1.png" rounded fluid/>
        </Col>
        <Col className="DetailRight" sm={12} md={6}>
          <ListGroup>
            <ListGroup.Item className="DetailRight" as="h1">{product.flavor}</ListGroup.Item>
            <ListGroup.Item className="DetailRight" as="div">
                <h3>{product.origin}</h3>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <Button onClick={addToCart}>Add To Cart</Button>

            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
          )}
    </div>
  );
}
export default ProductDetail;
