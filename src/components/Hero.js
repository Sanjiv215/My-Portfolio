import React from "react";
import myPic from "../images/mypic.jpeg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Hello, I'm <span>Sanjiv</span>
        </h1>
        <h3>Web Developer Intern</h3>
        <p>
          BTech student with a growing interest in full-stack development. I
          enjoy learning new technologies and improving my coding skills by
          building practical projects. Most of my time goes into experimenting,
          breaking things, fixing them, and slowly getting better at
          development.
        </p>

  
        <Link to="/sep_about" className="btn">View Work</Link>

        
        <Link to="/sep_contact" className="btn">Contact Me</Link>

      </div>

      <img
        src={myPic}
        alt="profile"
        style={{ width: "300px", borderRadius: "15px", marginTop:"50px" }}
      />
    </section>
  );
}

export default Hero;
