import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { BsBriefcaseFill, BsCodeSlash } from 'react-icons/bs';
import { FaGraduationCap, FaTrophy } from 'react-icons/fa';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

export const Experience = () => {
  const experiences = [
    {
      type: "Internship",
      month: "December 2024 - may 2025",
      year: "2024 - 2025",
      title: "Full Stack web Developer",
      organization: "codeBrain infotech",
      description: "Leading development of enterprise web applications using React, Node.js, and modern cloud technologies.",
      skills: ["React", "Node.js", "Express.js", "MongoDB"],
      achievements: [
        "Improved application performance by 80%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipeline"
      ],
      icon: <BsCodeSlash />,
      color: "purple"
    },
    {
      type: "work",
      month: "june 2025 - peresent",
      year: "2024 - peresent",
      title: "Full Stack web Developer",
      organization: "codeBrain infotech",
      description: "Working as a Full Stack Developer, building and maintaining scalable web applications",
      skills: ["React", "Node.js", "Express.js", "MongoDB"],
      achievements: [
        "Implemented new features and optimized existing modules",
    "Enhanced application performance and user experience",
    "Collaborated with cross-functional teams to deliver projects"
      ],
      icon: <BsCodeSlash />,
      color: "purple"
    },
    {
      type: "education",
      year: "2023 - 2025",
      title: "Master of Computer Applications",
      organization: "UKA TARASADIA UNIVERCITY",
      description: "Specializing in Advanced Web Technologies and Cloud Computing",
      achievements: [
        "CGPA: 8.5/10",
        "Published research paper on Web Technologies",
        "Led technical club activities"
      ],
      icon: <FaGraduationCap />,
      color: "blue"
    },
  ];

  return (
    <section className="experience" id="experience">
      <Container>
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <Row>
                <Col>
                  <div className="experience-bx">
                    <h2 className="gradient-text">Experience & Education</h2>
                    <div className="experience-container">
                      {experiences.map((exp, index) => (
                        <div 
                          className={`experience-item ${exp.type} ${exp.color}`}
                          key={index}
                          data-aos="fade-up"
                          data-aos-delay={index * 200}
                        >
                          <div className={`experience-icon ${exp.color}`}>
                            {exp.icon}
                          </div>
                          <div className="experience-content">
                            <div className="experience-year">
                              <span>{exp.year}</span>
                            </div>
                            <div className="experience-details">
                              <h3>{exp.title}</h3>
                              <h4>{exp.organization}</h4>
                              <p>{exp.description}</p>
                              {exp.skills && (
                                <div className="skills-tags">
                                  {exp.skills.map((skill, idx) => (
                                    <span key={idx} className={`skill-tag ${exp.color}`}>
                                      <IoMdCheckmarkCircleOutline className="skill-icon" />
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              )}
                              <ul className="achievements-list">
                                {exp.achievements.map((achievement, idx) => (
                                  <li key={idx}>
                                    <FaTrophy className="achievement-icon" />
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          }
        </TrackVisibility>
      </Container>
    </section>
  );
};