import React, {Component, useState} from "react";
import "./ProductList.css"
import SidebarOption from "../controller/SidebarOption";
import Controller from "../controller/Controller";
import data from "../model/data";
import Basket from "../controller/Basket";

function ProductList() {

    const category = ["Crepe", "Frugtsalat","Cocktail", "Milkshake", "Kaffe"];
    const {products} = data;

    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };
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
                    <Controller products={products} onAdd={onAdd}></Controller>
                </div>

                {/*show shopping card*/}
                <div className="shopping_section">
                    <Basket
                        cartItems={cartItems}
                        onAdd={onAdd}
                        onRemove={onRemove}
                    ></Basket>
                </div>
            </>
        );


}

export default ProductList;