import React from "react";
import codek from "../images/codek.png";
import intellinotes from "../images/intellinotes.png";
import frontend from "../images/certificates/frontend.jpeg"
import chatgpt from "../images/certificates/chatgpt.jpeg"
import clouds from "../images/certificates/clouds.jpeg"
import genai from "../images/certificates/genai.jpeg"
import prompt from "../images/certificates/prompt.jpeg"
import copilot from "../images/certificates/prompting.jpeg"
import python from "../images/certificates/python.jpeg"

function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "DSA",
    "Python",
    "Git & Github",
    "Jquery",
    "Prompting",
    "PHP",
  ];

  const projects = [
    {
      name: "Codek",
      image: codek,
      link: "https://codekdeployed.vercel.app",
    },
    {
      name: "Intelli-Notes",
      image: intellinotes,
      link: "https://intelli-notes-psi.vercel.app/",
    },
  ];

  const certificates = [
  {
    name: "Frontend Intern",
    image: frontend
  },
  {
    name: "ChatGPT & AI Tools",
    image: chatgpt
  },
  {
    name: "Cloud Computing",
    image: clouds
  },
  {
    name: "Generative AI",
    image: genai
  },
  {
    name: "Prompt Engineering",
    image: prompt
  },
  {
    name: "Prompting with Copilot",
    image: copilot
  },
  {
    name: "Python Intern",
    image: python
  }
];

  return (
    <section className="about">
      <h2 className="about-title">About Me</h2>

      <p className="about-text">
        I'm Sanjiv, a BTech student passionate about web development and problem
        solving. I enjoy building responsive web applications using modern
        technologies like React, JavaScript and Node.js.
      </p>

      {/* SKILLS */}

      <div className="about-section">
        <h3>Skills</h3>

        <div className="skill-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* EDUCATION */}

      <div className="about-section">
        <h3>Education</h3>

        <div className="edu-cont">
          <div className="edu-card">
            <h4>BTech Computer Science</h4>
            <p>S-VYASA University</p>

            <span>2025 – 2029</span>
            <pre>@Current</pre>
          </div>

          <div className="edu-card">
            <h4>HSC Maharashtra</h4>
            <p>GS Vidya Mandir</p>

            <span>2023 – 2025</span>
          </div>


        </div>
      </div>

      {/* PROJECTS */}

      <section className="about-section">
        <h3>Projects</h3>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.name} />

              <h3>{project.name}</h3>

              <a href={project.link} target="_blank" rel="noreferrer">
                <button>Live Demo</button>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATES */}

      <div className="about-section">

  <h3>Certificates</h3>

  <div className="certificate-gallery">

    {certificates.map((cert, index) => (
      <div key={index} className="certificate-card">

        <img src={cert.image} alt={cert.name} />

        <p>{cert.name}</p>

      </div>
    ))}

  </div>

</div>
    </section>
  );
}

export default About;
