import React, {Component} from "react";
import "./ProductList.css"
import SidebarOption from "../controller/SidebarOption";
import Controller from "../controller/Controller";
import data from "../model/data";

function ProductList() {

    const category = ["Crepe", "Frugtsalat","Cocktail", "Milkshake", "Kaffe"];
    const {products} = data;

    return(
            <>
                {/*show category*/}
                {/*show category*/}
                <div className="sidebar">
                    <h2 className="header">Kategorier</h2>

                    <SidebarOption
                        title = {category[0]}
                        selected={true}
                    />

                    <SidebarOption
                        title={category[1]} />

                    <SidebarOption
                        title={category[2]} />

                    <SidebarOption
                        title={category[3]}/>

                    <SidebarOption
                        title={category[4]}/>
                </div>

                {/*show items*/}
                <div className="item_list">
                    {/*<ProductOption title="Crepe" subject="Nutella, banana, and strawberry" price="69 kr."/>*/}
                    {/*<ProductOption title="Dansk pandekager" subject="Nutella, banana, and strawberry" price="69 kr."/>*/}
                    {/*<ProductOption title="Amerikanske pandekage" subject="Nutella, banana, and strawberry" price="69 kr."/>*/}
                    {/*<ProductOption title="Bubbel vaffel" subject="Nutella, banana, and strawberry" price="69 kr."/>*/}
                    {/*<ProductOption title="Belgisk vaffel" subject="Nutella, banana, and strawberry" price="69 kr."/>*/}
                    <Controller products={products}></Controller>
                </div>

                {/*show shopping card*/}
                <div className="shopping_section">
                    <h3>Indkøbskurv</h3>
                </div>
            </>
        );


}

export default ProductList;