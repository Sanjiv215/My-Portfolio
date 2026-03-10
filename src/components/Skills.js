import React from "react";

function Skills() {

  const skills = ["HTML", "CSS", "JavaScript", "React", "DSA", "Python", "Git & Github", "Jquery", "Prompting", "PHP"];

  return (
    <section className="skills">
      
      <h2>My Skills</h2>

      <div className="skill-grid">
        {skills.map((skill, index) => {
          return (
            <div key={index} className="skill-card">
              {skill}
            </div>
          );
        })}
      </div>

      {/* <div className="skill-grid">
        {skills.map((skill, index) => {
          return (
            <div key={index} className="skill-card">
              {skill}
            </div>
          );
        })}
      </div> */}

    </section>
  );
}

export default Skills;