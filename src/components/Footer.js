import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
    return(
        <Container>
            <div className="footer">
                <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                <p>No. 17, H. K. Dharmadasa Mawatha, Colombo 02</p>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                <p><a href="mailto:info@sltds.lk">info@sltds.lk</a></p>

            </div>
        <div className="contact">
            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
            <p>0112-399-399</p>
        </div>
        </Container>
    )
}

export default Footer;