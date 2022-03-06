import React from "react";
import ItemRow from "./ItemRow";
import "./ProductList.css"


function ProductList(){

    return(
        <div className="item_list">
            <ItemRow title="Crepe" subject="Nutella, banana, and strawberry" price="69 kr."/>
            <ItemRow title="Dansk pandekager" subject="Nutella, banana, and strawberry" price="69 kr."/>
            <ItemRow title="Amerikanske pandekage" subject="Nutella, banana, and strawberry" price="69 kr."/>
            <ItemRow title="Bubbel vaffel" subject="Nutella, banana, and strawberry" price="69 kr."/>
            <ItemRow title="Belgisk vaffel" subject="Nutella, banana, and strawberry" price="69 kr."/>
        </div>

    );
}

export default ProductList;