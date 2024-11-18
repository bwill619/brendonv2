import React from "react";

const about = [
  {
    title: "",
    aboutInfo: ["I am a software engineer currently located in Charlotte, NC"],
  },
];

const About = () => {
  return (
    <div id="about" className="section">
      {about.map((about, index) => (
        <div key={index} className="about">
          <h2>{about.title}</h2>
          <ul>
            {about.aboutInfo.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default About;
