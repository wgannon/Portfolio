import React from 'react';
import CommuteImage from './CommuteForecast/CommuteForecastVid.gif';
import './App.css';


class CommuteForecast extends React.Component {
  render(){
    return(
        <div>
          <h1>CommuteForecast: Is it worth it?</h1>
          <p>This project was an attempt to create an online calculator for commutes. It utlizes the Google Maps JavaScript API by creating a call
            from user input. What is retreived is then an animation an map of the route and calulated information based on a what the user may want
            to see like a single day, 5 day work week, month, or year. 
          </p>
          <div className="CommuteProjectImage">
            <img src={CommuteImage} className="CommuteImageProject" alt="CommuteImageProject" />
          </div>
          <p>
          <strong>Link: </strong> <a href="https://www.commuteforecast.com/">https://www.commuteforecast.com/</a> <br /><br />
          <strong>Created:</strong> 2019<br /><br />
          <strong>About:</strong>Commute Forecast is a commute assistance application where the user can enter in information to have the cost of a commute
                                 broken down in a few ways. The cost of gas, tolls, maintenance, time, miles, and Estimated CO2. The user can also choose 
                                 if they want to view it in 4 different temporal options of day, week, month, and year. The fastest route is then decided
                                 and shown on the map in the window.
                                  <br /><br />
          <strong>Technicals:</strong> This application is built with JavaScript & CSS using Google Maps API. The API call built from the user given information
                                        then is retrieved, presented on the map and calculated for each of the categories.
            <br /> <br />
          <strong>Data: </strong>The Data is taken from the User which is then built into an API call to retrieve information that can be used to calculate all options.
      
          </p>
        </div>
      )
}
}


export default CommuteForecast;
