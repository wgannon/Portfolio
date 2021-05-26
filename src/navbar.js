import React from 'react';
import { Link } from 'react-router-dom'; 
import './App.css';
import { FaGithubSquare,FaLinkedin } from 'react-icons/fa';
import { IconContext } from "react-icons";

/*https://www.freecodecamp.org/news/react-router-tutorial/*/
class Navbar extends React.Component {
    render(){
    return(
        <div className="Navbar">
                {/* Set up the Links*/}
                <div className="compass"></div>
                <div className="btn-group">
                        <Link to="/Projects" className="item"><button class="button">Home</button></Link>
                        <Link to="/resume" className="item"><button class="button">Resume</button></Link>
                        <Link to="/about" className="item"><button class="button">About</button></Link>
                </div>
                <div className="NavRight">
                        <IconContext.Provider value={{ className: 'react-icons' }}>
                        <a href="https://github.com/wgannon" className="item2"><button  class="social"><FaGithubSquare height="3em"/></button></a>
                        <a href="https://www.linkedin.com/in/william-gannon-62704189/" className="item2"><button class="social"><FaLinkedin /></button></a>
                        </IconContext.Provider>
               
                </div>
            </div>
            
    )
    }
}
export default Navbar;