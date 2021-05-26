import React from 'react';
import NHLImage from './NHLAttendance/NHLAttendance.GIF';
import './App.css';

class NHLAttendance extends React.Component {
  render(){
    return(
        <div>
          <h1>NHL Team Arena Attendance</h1>
          <img src={NHLImage} className="NHLImage" alt="NHLImage" />
        </div>
      )
}
}


export default NHLAttendance;