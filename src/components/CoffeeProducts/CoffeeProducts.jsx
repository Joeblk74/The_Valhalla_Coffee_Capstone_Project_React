import React from 'react';

function CoffeeProducts({products}) {
    console.log(products);
    return(
        <div>
        <div>Coffee Products</div>
            <ol>
                {products.map((product) => (
                    <li>{product.flavor}</li>

                ))}
            </ol>
            </div>    
    )

}
export default CoffeeProducts