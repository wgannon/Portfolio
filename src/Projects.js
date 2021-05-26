import React from 'react';
import Thumbnail from './Thumbnail.js'; 
import './App.css';

class Projects extends React.Component {
  render(){
  return (
    
    <div className="Projects">
        <Thumbnail
        link="./CommuteForecast"
        image= './CommuteForecast.GIF'
        title="Commute Forecast"
        category="Web App"
        />
 
        <Thumbnail
        link="/DentalDeserts"
        image="./DentalDeserts.gif"
        title="Dental Deserts in US"
        category="Web App"
        />
 
        <Thumbnail
        link="/NHLAttendance"
        image="./NHLAttendance.gif"
        title="NHL Season Attendance"s
        category="Web App"
        />
    </div>
  )
}
}
 
export default Projects;