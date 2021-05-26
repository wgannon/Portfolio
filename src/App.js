import React from 'react';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Resume from './Resume.js'; 
import About from './About.js'; 
import './App.css';
import DentalDeserts from './DentalDeserts';
import NHLAttendance from './NHLAttendance';
import CommuteForecast from './CommuteForecast';
import Navbar from './navbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <BrowserRouter>
            <Navbar />
            <div className="app-content"> 
              {/*Set up the router*/}
              <Switch>
              <Route exact path="/"> <Redirect to="/Projects" component={Projects}/> </Route>
              <Route path="/CommuteForecast" component={CommuteForecast} />
              <Route path="/DentalDeserts" component={DentalDeserts} />
              <Route path="/NHLAttendance" component={NHLAttendance} />
              <Route path="/resume" component={Resume} />
              <Route path="/about" component={About} />
              <Route path="/Projects" component={Projects} />
              </Switch>
              
            </div>
          </BrowserRouter>
          </div>      
            {/*div className="footer"><h2>Footer</h2></div>*/}
      </div>

    );
  }

}
export default App;