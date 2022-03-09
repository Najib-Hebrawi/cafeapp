import React from "react";
import ProductOption from "./ProductOption";

function Controller(props){
    const {products} = props;
    return(
        <controller>
            <div >
                {products.map((product) => (
                    <ProductOption key={product.id} product={product}></ProductOption>
                ))}
            </div>
        </controller>

    );

}


export default Controller;