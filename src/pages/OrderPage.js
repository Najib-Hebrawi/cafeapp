import React, {useState} from "react";
import '../App.css';
import './OrderPage.css'
import data from "../component/orders/model/data";
import SidebarOption from "../component/orders/sections/SidebarOption";
import ProductOption from "../component/orders/sections/ProductOption";
import BasketOption from "../component/orders/sections/BasketOption";



function OrderPage(){

    const category = ["Crepe", "Frugtsalat","Cocktail", "Milkshake", "Kaffe"];
    const {products} = data;

    const [cartItems, setCartItems] = useState([]);
    //const da = localStorage.setItem('myData', cartItems.toString())


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
            <div className="app">
                <div className="order__body">
                    {/*show category*/}
                    <div className="sidebar">
                        <h2 className="header">Kategorier</h2>

                        <SidebarOption
                            title = {category[0]}
                            selected={true}/>

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
                        {products.map((product) => (
                            <ProductOption  key={product.id} product={product} onAdd={onAdd} ></ProductOption>
                        ))}
                    </div>

                    {/*show basket card*/}
                    <div className="shopping_section">
                        <BasketOption
                            cartItems={cartItems}
                            onAdd={onAdd}
                            onRemove={onRemove}>

                        </BasketOption>
                    </div>
                </div>
            </div>
        </>
    );
}



export default OrderPage