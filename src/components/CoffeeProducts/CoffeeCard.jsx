import React from 'react';
import { Link } from 'react-router-dom';
import {Card} from 'react-bootstrap';

function CoffeeCard({product}) {
    
    return(
     
        <div>
        <Link to={`/detail/${product.id}`}>
        <Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src="/Images/valhallabag1.png" />
  <Card.Body>
    <Card.Title>{product.flavor}</Card.Title>
  </Card.Body>
</Card>
</Link>
</div>
  
   
    )


}
export default CoffeeCard