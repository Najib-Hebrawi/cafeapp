import React from "react";
import "./ProductOption.css";

//Here we designed the part that contains the products in order page
/*
Each product or row contains
Item name
Item Description
Item price
A button to add the item to basket
*/

function ProductOption(props) {
  const { product, onAdd } = props; //
  return (
    //todo
    // <div className="itemRow" onClick={()=>history.push('/menu')}>
    <div className="itemRow">
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
