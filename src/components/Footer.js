import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
    return(
        <Container>
            <div className="footer">
                <p><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon> No. 17, H. K. Dharmadasa Mawatha, Colombo 02</p>
                <p><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> <a href="mailto:info@sltds.lk">info@sltds.lk</a></p>

            </div>
        <div className="contact">
            <p><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> 0112 - 399 - 399</p>
        </div>
        </Container>
    )
}

export default Footer;