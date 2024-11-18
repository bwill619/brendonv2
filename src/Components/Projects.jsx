import React from "react";

const projects = [
  {
    title: "Personal Wesbite",
    projectInfo: [
      "Developed a personal website that acts as a visual resume.",
      "Architected the website framework offline, subsequently building and refining it in Visual Studio Code.",
      "Designed the user interface and optimized the site for mobile and desktop views.",
    ],
  },
];

const Projects = () => {
  return (
    <div id="Projects" className="section">
      {projects.map((Projects, index) => (
        <div key={index} className="Projects">
          <h2>{Projects.title}</h2>
          <ul>
            {Projects.projectInfo.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Projects;
