import './Navbar.css'
import { Link } from 'react-router-dom'
import resume from '../../static/resume.pdf';

function Navbar() {
    return(
        <>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about-me'>About Me</Link></li>
              <li><Link to='/projects'>Projects</Link></li>
              <li><Link to='/contact-me'>Contact Me</Link></li>
              <li><a href={resume} target="_blank" >Resume</a></li>
            </ul>
          </nav>
        </>
    )
}

export default Navbar