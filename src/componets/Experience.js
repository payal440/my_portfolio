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
      type: "work",
      year: "2022 - Present",
      title: "Full Stack Developer",
      organization: "Tech Solutions Inc.",
      description: "Leading development of enterprise web applications using React, Node.js, and modern cloud technologies.",
      skills: ["React", "Node.js", "AWS", "MongoDB"],
      achievements: [
        "Improved application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipeline"
      ],
      icon: <BsCodeSlash />,
      color: "purple"
    },
    {
      type: "education",
      year: "2022 - 2024",
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
    {
      type: "work",
      year: "2021 - 2023",
      title: "Frontend Developer",
      organization: "Digital Innovations",
      description: "Developed responsive web applications using modern JavaScript frameworks",
      skills: ["JavaScript", "React", "Redux", "CSS3"],
      achievements: [
        "Developed 10+ client projects",
        "Reduced load time by 50%",
        "Mentored junior developers"
      ],
      icon: <BsBriefcaseFill />,
      color: "pink"
    }
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