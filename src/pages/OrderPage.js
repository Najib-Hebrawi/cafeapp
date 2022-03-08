import React from "react";
import '../App.css';
import './OrderPage.css';
import {BrowserRouter as Router, Route, Switch}
    from 'react-router-dom';
import ProductList from "../component/orders/show_item/ProductList";


function OrderPage(){
    return(

        <Router>
        <div className="app">
           <div className="order__body">
               <ProductList/>
           </div>
        </div>
        </Router>


    )
}


export default OrderPage