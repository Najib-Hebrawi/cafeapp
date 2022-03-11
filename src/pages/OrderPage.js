import React from "react";
import '../App.css';
import ProductList from "../component/orders/view/ProductList";


function OrderPage(){
    return(

        <div className="app">
           <div className="order__body">
               <ProductList/>
           </div>
        </div>



    )
}


export default OrderPage