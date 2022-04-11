import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import StepOneComponent from './components/StepOneComponent';
import StepTwoComponent from './components/StepTwoComponent';
import StepThreeComponent from './components/StepThreeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                      <Route path = "/" exact component = {StepOneComponent}></Route>
                      <Route path = "/Two" exact component = {StepTwoComponent}></Route>
                      <Route path = "/Three" exact component = {StepThreeComponent}></Route>
                    </Switch>
                </div>
              {/* <FooterComponent /> */}
        </Router>
    </div>
    
  );
}

export default App;
