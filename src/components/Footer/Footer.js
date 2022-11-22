import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'

function Footer(){
    return(
        <footer>
            <a href="https://github.com/JosephFAnderson"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/joseph-anderson-192827252/"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="mailto:josephanderson.dev@gmail.com?subject=Contact From Portfolio"><FontAwesomeIcon icon={faEnvelope} /></a>
        </footer>
    )
}

export default Footer;