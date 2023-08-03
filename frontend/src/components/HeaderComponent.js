//import { useEffect } from "react";
//import { Container } from "react-bootstrap";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const HeaderComponent = () => {

   return (
        <div className="navbar">
            <img src={logo} alt="logo" />
            <h1>SLT Digital Services</h1>
            <h3>INTRANET</h3>

            <div className="icon-container">
                <div className="circle-icon">
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </div>
                <div className="circle-icon">
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </div>
                <div className="circle-icon">
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </div> 
            </div>
        </div>
   )
}