import React from "react";
import "./ProductOption.css"

function ProductOption(props){
    const { product, onAdd } = props;
    return(
        //todo
        // <div className="itemRow" onClick={()=>history.push('/menu')}>
        <div className="itemRow" >
            <span>
                <h4 className="itemRow__title">{product.name}</h4>
            <div className="itemRow__subject">
                <h5>{product.subject}</h5>
            </div>
            </span>
            <p className="itemRow__price">{product.price} kr.</p>
            <div>
                <button onClick={() => onAdd(product)}>Tilføj til kurv</button>
            </div>
        </div>
    );
}

export default ProductOption;