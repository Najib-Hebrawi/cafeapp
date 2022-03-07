import React from "react";
import '../App.css';
import './OrderPage.css';
import Sidebar from "../component/orders/Sidebar";
import {BrowserRouter as Router, Route, Switch}
    from 'react-router-dom';
import ProductList from "../component/orders/ProductList";
import CardItem from "../component/home/cards/CardItem";
import ShoppingSection from "../component/orders/ShoppingSection";


function OrderPage(){
    return(

        <Router>
        <div className="app">
           <div className="order__body">
               <Sidebar/>

               <Switch>
                   <Route path="/"> <ProductList/> </Route>
               </Switch>

               <ShoppingSection/>
           </div>
        </div>
        </Router>


    )
}


export default OrderPage