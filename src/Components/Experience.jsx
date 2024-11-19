import React from "react";

const experiences = [
  {
    title: "Data Analyst",
    responsibilities: [
      "Executed complex SQL queries in Snowflake to analyze large datasets and uncover actionable insights.",
      "Led weekly Scrum meetings and created JIRA stories, functioning as a de facto Scrum Master for team coordination.",
      "Enhanced project efficiency by delivering comprehensive analysis of data from multiple sources, enabling informed decision-making.",
      "Utilized Power BI and Excel to create visualizations, simplifying complex data for stakeholders.",
    ],
  },
  {
    title: "Software Engineer (TA)",
    responsibilities: [
      "Developed and maintained web applications using React and Node.js to enhance user experience and improve performance.",
      "Designed and implemented APIs to streamline data exchange between systems and applications.",
      "Led testing efforts, including JUnit tests, ensuring robust and reliable code for deployment.",
      "Collaborated with cross-functional teams to deliver projects on time and within scope.",
    ],
  },
];

const Experience = () => {
  return (
    <div id="experience" className="section">
      {experiences.map((experience, index) => (
        <div key={index} className="experience">
          <h2>{experience.title}</h2>
          <ul>
            {experience.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
