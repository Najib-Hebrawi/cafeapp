import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./client/component/navbars/Navbar";
import HomePage from "./client/pages/HomePage";
import MenuPage from "./client/pages/MenuPage";
import AboutUsPage from "./client/pages/AboutUsPage";
import ContactUsPage from "./client/pages/ContactUsPage";
import OrderPage from "./client/pages/OrderPage";
import OrderCheckout from "./client/pages/OrderCheckout";
import DonePage from "./client/pages/DonePage";
import Footer from "./client/component/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/about_us" component={AboutUsPage} />
          <Route path="/contact_us" component={ContactUsPage} />
          <Route path="/order_side" component={OrderPage} />
          <Route path="/order_view" component={OrderCheckout} />
          <Route path="/done_page" component={DonePage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
/*
The Document Object Model (DOM) for dynamic display of and interaction with data.
*/
ReactDOM.render(<App />, document.getElementById("root"));
