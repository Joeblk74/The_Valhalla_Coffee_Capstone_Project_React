import React from 'react'
import {useParams} from 'react-router-dom'


function ProductDetail ({coffee}){
const params = useParams()
const product = coffee.find((item)=>item.id==params.id)
    console.log(product)
    return(
        <div>
            {coffee.length > 0 && (
                <>
                <h1>{product.flavor}</h1>
                <p>{product.origin}</p>
                <p>{product.description}</p>
                <p>{product.price}</p>
                </>
            )}
        </div>
    )
}
export default ProductDetail