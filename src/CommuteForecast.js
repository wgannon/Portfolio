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
          <strong>Link: </strong> <a href="https://gerirosenberg.github.io/careless-decay/">www.careless-decay.com</a> <br /><br />
          <strong>Created:</strong> 2019<br /><br />
          <strong>About:</strong> This was the final group project for Course GEOG575 Interactive Cartography & Geo-visualization. 
                My group consisted of myself, Geri Rosenberg, and Matt Rodenberger and it won the NACIS Student Dynamic Mapping Competition in 2019. 
                The application is meant to act as an informational tool to raise awareness of where and why some areas have what are known as Dental Deserts. 
                These Deserts signify a lack in ability to get enough or adequate dental care.<br /><br />
          <strong>Technicals:</strong> It is a Javascript web application using Leaflet to process GeoJSON’s showing the data over a Mapbox base map. The information's 
                  colors are assigned from the GeoJSON attributes via a JavaScript function. The primary interaction was a scroll monitor which would zoom to 
                  the place that was being discussed in the information panel. Some other functions used to improve User Experience is the ability to zoom and 
                  pan around the map with buttons. Tool-tips were also used so that the user can see more information of each county.<br /> <br />
          <strong>Data: </strong>Data taken from the Health Resource & Services Admin and US Census Bureau was processed in PostgreSQL to create a shortage score on a county level.
      
          </p>
        </div>
      )
}
}


export default CommuteForecast;