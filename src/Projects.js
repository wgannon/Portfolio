import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import CommuteThumbnail from './Thumbnails/CommuteForecast.GIF'
import DentalThumbnail from './Thumbnails/DentalDeserts.gif'
import NHLThumbnail from './Thumbnails/NHLAttendance.GIF'

class Projects extends React.Component {
  render(){
  return (
    
    <div className="Projects">
        <div className="project">
          <Link to="/CommuteForecast"> 
          <div className="project-image">
            <img src={CommuteThumbnail} className= "TImage" alt="Project"/>
          </div>
          <div className="project-title">CommuteForecast</div>
          <div className="project-category">Web App</div>
          </Link>
        </div>

        <div className="project">
          <Link to="/DentalDeserts"> 
          <div className="project-image">
            <img src={DentalThumbnail} className= "TImage" alt="Project"/>
          </div>
          <div className="project-title">Dental Desert</div>
          <div className="project-category">Web App</div>
          </Link>
        </div>
         
        <div className="project">
          <Link to="/NHLAttendance"> 
          <div className="project-image">
            <img src={NHLThumbnail} className= "TImage" alt="Project"/>
          </div>
          <div className="project-title">NHL Season Attendance</div>
          <div className="project-category">Web App</div>
          </Link>
        </div> 
    </div>
  )
}
}
 
export default Projects;