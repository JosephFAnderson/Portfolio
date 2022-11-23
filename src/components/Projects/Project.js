import projects from '../../static/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import './Project.css';

function Project() {
  console.log(projects);
    return (
        <div id="projects-container">
          {projects.map(project => (
            <>
              <div className="project-card" key={project.name}>
                <img className="project-image" src={project.image} draggable="false"></img>
                <div className="project-text">
                  <p>{project.name}</p>
                  <p>{project.description}</p>
                  <p>Technologies: {project.technologies}</p>
                  <div>
                    <a className="project-links" href={project.github}><FontAwesomeIcon icon={faGithub} /></a>
                    <a className="project-links" href={project.url}><FontAwesomeIcon icon={faGlobe} /></a>
                  </div>
                </div>
              </div>              
            </>
          ))}
        </div>
    )
}

export default Project;