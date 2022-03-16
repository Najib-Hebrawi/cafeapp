import React, {useState} from "react";
import BasketOption from "../component/orders/sections/BasketOption";
import '../App.css';
import './OrderCheckout.css'
import OrderOverviewOption from "../component/orders/sections/OrderOverviewOption";


function OrderCheckout() {

    const [cartItems, setCartItems] = useState([]);
    const data = localStorage.getItem('myData')
    return(
        <>
            <div className="app">
                <div className="order__body">
                    {/*write user info*/}
                    <div className={"input_section"}>
                        <input className={"input"} type={"text"} placeholder={"Indtast dit navn"}/>
                        <input className={"input"} type={"text"} placeholder={"Indtast dit telefonnummer"}/>

                    </div>



                    {/*show item */}
                    <div className="shopping_sections">
                        <OrderOverviewOption cartItems={cartItems}>
                        </OrderOverviewOption>
                    </div>

                </div>
            </div>
        </>

    )
}

export default OrderCheckout;