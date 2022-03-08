import React, {Component} from "react";
import ItemRow from "../item/ProductOption";
import "./ProductList.css"
import SidebarOption from "../item/SidebarOption";
import {Button} from "../../Buttons/Button";
import sidebarOption from "../item/SidebarOption";



function ProductList() {

    return(
            <>
                {/*show category*/}
                <div className="sidebar">
                    <h2 className="header">Kategorier</h2>

                    <SidebarOption
                        title="Crepe"
                        selected={true}/>

                    <SidebarOption
                        title="Frugtsalat" />

                    <SidebarOption
                        title="Cocktail" />

                    <SidebarOption
                        title="Milkshake"/>

                    <SidebarOption
                        title="Kaffe"/>
                </div>

                {/*show items*/}
                <div className="item_list">
                    <ItemRow title="Crepe" subject="Nutella, banana, and strawberry" price="69 kr."/>
                    <ItemRow title="Dansk pandekager" subject="Nutella, banana, and strawberry" price="69 kr."/>
                    <ItemRow title="Amerikanske pandekage" subject="Nutella, banana, and strawberry" price="69 kr."/>
                    <ItemRow title="Bubbel vaffel" subject="Nutella, banana, and strawberry" price="69 kr."/>
                    <ItemRow title="Belgisk vaffel" subject="Nutella, banana, and strawberry" price="69 kr."/>
                </div>

                {/*show shopping card*/}
                <div className="shopping_section">
                    <h3>Indkøbskurv</h3>
                </div>


            </>


        );


}

export default ProductList;