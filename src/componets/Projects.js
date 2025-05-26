import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import projImg1 from "../assets/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/project-img3.png";

export const Projects = () => {
  const projects = [
    {
      title: "Project Name 1",
      description: "This is a brief description of your first project. You can modify this text to describe your actual project.",
      imgUrl: projImg1,
      tech: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/yourusername/project1",
      liveUrl: "https://project1.com",
      category: "web"
    },
    {
      title: "Event Management System",
      description: "A comprehensive event management platform that helps organizers plan, schedule, and manage events efficiently. Features include registration, ticketing, and attendee management.",
      imgUrl: projImg2,
      tech: ["JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/payal440/mern_stack_event_management",
      liveUrl: "https://eventmangament.netlify.app/",
      category: "mobile"
    },
    {
      title: "Project Name 3",
      description: "Your third project description. Highlight the key features and your role in development.",
      imgUrl: projImg3,
      tech: ["Python", "Django", "PostgreSQL"],
      githubUrl: "https://github.com/yourusername/project3",
      liveUrl: "https://project3.com",
      category: "web"
    }
  ];

  const categories = [
    {
      key: "all",
      name: "All Projects"
    },
    {
      key: "web",
      name: "Web Development"
    },
    {
      key: "mobile",
      name: "Mobile Apps"
    },
    {
      key: "other",
      name: "Other Projects"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="gradient-text">My Projects</h2>
                  <p>Here are some of my recent projects. Each represents a unique challenge and innovative solution.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="all">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      {categories.map((category, index) => (
                        <Nav.Item key={index}>
                          <Nav.Link eventKey={category.key}>{category.name}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content>
                      {categories.map((category, index) => (
                        <Tab.Pane eventKey={category.key} key={index}>
                          <Row>
                            {projects
                              .filter(project => category.key === 'all' || project.category === category.key)
                              .map((project, index) => (
                                <Col key={index} sm={6} md={4} className="mb-4">
                                  <ProjectCard {...project} />
                                </Col>
                              ))}
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}