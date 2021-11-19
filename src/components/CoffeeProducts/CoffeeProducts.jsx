import React from 'react';

function CoffeeProducts({products, onClick, selectedProduct}) {
    console.log(selectedProduct);
    return(
        <div>
        <div>Coffee Products</div>
            <ol>
                {products.map((product) => (
                    <li onClick={()=>onClick(product)}>{product.flavor}</li>

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