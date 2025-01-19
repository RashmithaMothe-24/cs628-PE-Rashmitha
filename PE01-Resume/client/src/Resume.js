import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Rashmitha</h1>
        <p>
          123 Main Street, Seattle, WA, 98101 | (123) 456-7890 | rashmitha@email.com
        </p>
      </header>
      <section className="section">
        <h2>Education</h2>
        <div className="education">
          <h3>Master of Science in Computer Science</h3>
          <p>CityU of Seattle, Washington, USA | May 2023</p>
          <p>GPA: 3.9/4.0</p>
          <h3>Bachelor of Science in Computer Science</h3>
          <p>University of ABC, Anytown USA | May 2021</p>
          <p>GPA: 3.7/4.0</p>
        </div>
      </section>
      <section className="section">
        <h2>Skills</h2>
        <ul className="skills">
          <li>Java, Python, JavaScript, C++</li>
          <li>React, Node.js, Express.js</li>
          <li>MySQL, MongoDB</li>
          <li>Git, Linux, Windows</li>
        </ul>
      </section>
      <section className="section">
        <h2>Work Experience</h2>
        <ul className="experience">
          <li>
            <strong>Software Development Intern</strong>
            <p>XYZ Corporation, Anytown USA | May 2022 - August 2022</p>
            <p>
              Worked on a team to develop a new web application using React and Node.js.
            </p>
          </li>
          <li>
            <strong>Teaching Assistant</strong>
            <p>Department of Computer Science, CityU of Seattle | August 2021 - Present</p>
            <p>Help students with assignments and answer questions about course material.</p>
          </li>
        </ul>
      </section>
      <section className="section">
        <h2>Projects</h2>
        <div className="projects">
          <h3>Personal Website</h3>
          <p>Built a personal website using React and deployed it on GitHub Pages.</p>
          <p>
            Source code:{" "}
            <a
              href="https://github.com/studentname/personal-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/studentname/personal-website
            </a>
          </p>
          <h3>Online Bookstore</h3>
          <p>Developed a web application for an online bookstore using Spring Boot and MySQL.</p>
          <p>
            Source code:{" "}
            <a
              href="https://github.com/studentname/online-bookstore"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/studentname/online-bookstore
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
