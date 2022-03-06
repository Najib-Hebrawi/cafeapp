import React from 'react';
import Navbar from "./component/navbars/Navbar";
import {BrowserRouter as Router, Route, Switch}
    from 'react-router-dom';
import './App.css';
import HomePage from "./component/pages/HomePage";
import AboutUsPage from "./component/pages/AboutUsPage";
import Footer from "./component/footer/Footer";
import MenuPage from "./component/pages/MenuPage";
import ContactUsPage from "./component/pages/ContactUsPage";
import OrderPage from "./component/pages/OrderPage";


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
              </Switch>
              <Footer/>
          </Router>

      </>
  );
}

export default App;
