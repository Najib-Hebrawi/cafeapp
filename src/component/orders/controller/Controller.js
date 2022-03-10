import React from "react";
import ProductOption from "./ProductOption";

function Controller(props){
    const {products, onAdd} = props;
    return(
        <controller>
            <div >
                {products.map((product) => (
                    <ProductOption  key={product.id} product={product} onAdd={onAdd}></ProductOption>
                ))}
            </div>
        </controller>

    );

}


export default Controller;