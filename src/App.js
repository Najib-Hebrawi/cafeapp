import React from 'react';
import Navbar from "./component/navbars/Navbar";
import {BrowserRouter as Router, Route, Switch}
    from 'react-router-dom';
import './App.css';
import HomePage from "./component/home/HomePage";

function App() {
  return (
      <>
          {/*todo need to update switch: https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom */}
          <Router>
              <Navbar />
              <Switch>
                  <Route path='/' exact component={HomePage} />
              </Switch>
          </Router>

      </>
  );
}

export default App;
