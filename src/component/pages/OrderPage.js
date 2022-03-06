import React from "react";
import '../../App.css';
import './OrderPage.css';
import Sidebar from "../sidebars/Sidebar";
import {BrowserRouter as Router, Route, Switch}
    from 'react-router-dom';
import ProductList from "../sidebars/ProductList";


function OrderPage(){
    return(
        <Router>
        <div className="app">
           <div className="order__body">
               <Sidebar/>
               <Switch>
                   <Route path="/"> <ProductList/> </Route>
               </Switch>
           </div>
        </div>
        </Router>
        // <Router>
        //     <div className="body">
        //         <div className="order_body">
        //             <Sidebar/>
        //             <Switch>
        //                 <Route path="/pro"> <ProductList/> </Route>
        //             </Switch>
        //         </div>
        //     </div>
        // </Router>
    )
}


export default OrderPage