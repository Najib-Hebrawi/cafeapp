import React, {useState} from "react";
import BasketOption from "../component/orders/sections/BasketOption";
import '../App.css';
import './OrderCheckout.css'
import OrderOverviewOption from "../component/orders/sections/OrderOverviewOption";


function OrderCheckout() {

    console.log(localStorage.getItem("message"));
    const products = JSON.parse(localStorage.getItem("message"));
    return(
        <>

                <div className="body">
                    {/*write user info*/}
                    <div className={"input_section"}>
                        <input className={"input"} type={"text"} placeholder={"Indtast dit navn"}/>
                        <input className={"input"} type={"text"} placeholder={"Indtast dit telefonnummer"}/>
                    </div>

                    {/*show item */}
                    <div className="shopping_sections">
                        <OrderOverviewOption  cartItems={products}>
                        </OrderOverviewOption>
                    </div>
                </div>

        </>

    )
}

export default OrderCheckout;