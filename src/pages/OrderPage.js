import React, {useState} from "react";
import '../App.css';
import './OrderPage.css'
import data from "../component/orders/model/data";
import ProductOption from "../component/orders/sections/ProductOption";
import BasketOption from "../component/orders/sections/BasketOption";



function OrderPage(){
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };


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
                        <div className="container">
                            <button
                                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(1)}
                            >
                                {category[0]}
                            </button>
                            <button
                                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(2)}
                            >
                                {category[1]}
                            </button>
                            <button
                                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(3)}
                            >
                                {category[2]}
                            </button>
                        </div>

                    </div>

                    {/*show items*/}
                    <div className="content-tabs">
                        <div
                            className={toggleState === 1 ? "content  active-content" : "content"}
                        >
                            {products.slice(0,5).map((product) => (
                                <ProductOption  key={product.id} product={product} onAdd={onAdd} ></ProductOption>
                            ))}
                        </div>

                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                            {products.slice(5,6).map((product) => (
                                <ProductOption  key={product.id} product={product} onAdd={onAdd} ></ProductOption>
                            ))}
                        </div>

                        <div
                            className={toggleState === 3 ? "content  active-content" : "content"}
                        >
                            {products.slice(6,8).map((product) => (
                                <ProductOption  key={product.id} product={product} onAdd={onAdd} ></ProductOption>
                            ))}
                        </div>
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




export default OrderPage;