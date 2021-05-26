import React from 'react';
// import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Articles from './Articles.js'; 
import About from './About.js'; 
import './App.css';
import DentalDeserts from './DentalDeserts';
import NHLAttendance from './NHLAttendance';
import CommuteForecast from './CommuteForecast';

class App2 extends React.Component {
  render() {
    return (
    <BrowserRouter>
    <div className="Apps">
  
        {/*Set up the router*/}

        {/*<Route exact path="/" component={Projects} />*/}
        <Route path="/CommuteForecast" component={CommuteForecast} />
        <Route path="/DentalDeserts" component={DentalDeserts} />
        <Route path="/NHLAttendance" component={NHLAttendance} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
        <Route path="/Projects" component={Projects} />
        
        <div className="app-grid">
            <div className="app-nav">
                <div className="app-nav-header">
                </div>
                <div className="app-nav-content">

                </div>
                <div className="app-nav-footer"></div>
            </div> {/*end of Navbar*/}
            <div className="app-main">
                <p>Welcome this is my Portfolio</p>
            </div>
        </div>
    </div>
    </BrowserRouter>
    );
  }

}
export default App2;