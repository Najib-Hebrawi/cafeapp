import React from 'react';
import Navbar from "./component/navbars/Navbar";
import {BrowserRouter as Router, Route, Switch}
    from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import Footer from "./component/footer/Footer";
import MenuPage from "./pages/MenuPage";
import ContactUsPage from "./pages/ContactUsPage";
import OrderPage from "./pages/OrderPage";
import OrderCheckout from "./pages/OrderCheckout";
import Footers from "./component/footer/Footers";


function App() {
  return (
      <>
          {/*todo need to update switch: https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom */}

          <Router>
              <Navbar />
              <Switch>
                  <Route path='/' exact component={HomePage} />
                  <Route path='/menu' component={MenuPage} />
                  <Route path='/about_us' component={AboutUsPage} />
                  <Route path='/contact_us' component={ContactUsPage} />
                  <Route path='/order_side' component={OrderPage} />
                  <Route path='/order_view' component={OrderCheckout} />
              </Switch>
              <Footers/>
          </Router>



      </>
  );
}

export default App;
