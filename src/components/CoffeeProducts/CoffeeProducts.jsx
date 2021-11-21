import React from 'react';
import { Link } from 'react-router-dom';
function CoffeeProducts({products, onClick, selectedProduct}) {
    console.log(selectedProduct);
    return(
        <div>
        <div>Coffee Products</div>
            <ol>
                {products.map((product) => (
                     <Link to={`/detail/${product.id}`}><li>{product.flavor}</li></Link>

                ))};  
            </ol>
            <div>
                <div>{selectedProduct.flavor}</div>
                <div>{selectedProduct.description}</div>
                <div>{selectedProduct.origin}</div>
                <div>{selectedProduct.price}</div>
            </div>
            </div>    
    )

}
export default CoffeeProducts