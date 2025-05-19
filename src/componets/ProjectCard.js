import { Col } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

export const ProjectCard = ({ title, description, imgUrl, tech, githubUrl, liveUrl }) => {
  return (
    <Col className="project-card">
      <div className="project-imgbox">
        <img src={imgUrl} alt={title} />
        <div className="project-overlay">
          <div className="project-links">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                <BsGithub />
                <span>Code</span>
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                <FiExternalLink />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tech">
          {tech && tech.map((item, index) => (
            <span key={index} className="tech-tag">{item}</span>
          ))}
        </div>
      </div>
    </Col>
  )
}