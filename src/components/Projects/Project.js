import projects from '../../static/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
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
                  <p>Technologies {project.technologies}</p>
                  <a className="project-github" href={project.github}><FontAwesomeIcon icon={faGithub} /></a>
                </div>
              </div>              
            </>
          ))}
        </div>
    )
}

export default Project;