import React from "react";

function Product(props){
    const {product}  =props;

    return(
        <div>
            <h3>{product.name}</h3>
            <div>{product.price}</div>
            <div>
                <button > add to cart</button>
            </div>
        </div>
    );

}


export default Product;