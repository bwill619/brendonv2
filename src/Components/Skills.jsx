import React from "react";

const skills = [
  {
    title: "Programming Languages",
    skillList: [
      "Java, Python, JavaScript, C# , SQL",
    ]
  },
  {
    title: "Web Development",
    skillList: [
        "HTML, CSS, React, Node.js, Git"
    ]
  },

  {
    title: "Data Analytics Tools",
    skillList: [
        "Snowflake, Oracle SQL Developer, Tableau, Excel"
    ]
  },

  {
    title: "Software Engineering Tools",
    skillList: [
        "API Integration, JUnit Testing, Agile, Jenkins, SonarQube, AWS"
    ]
  }
];

const Skills = () => {
  return (
    <div id="skills" className="section">
      {skills.map((skills, index) => (
        <div key={index} className="skills">
          <h2>{skills.title}</h2>
          <ul>
            {skills.skillList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
