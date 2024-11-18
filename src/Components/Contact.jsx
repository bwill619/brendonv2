import React from "react";

const contact = [
  {
    title: "",
    contactInfo: [
        "bwill619@icloud.com",
        "https://www.linkedin.com/in/brendon-williams/"
    ],
  },
];

const Contact = () => {
  return (
    <div id="contact" className="section">
      {contact.map((contact, index) => (
        <div key={index} className="contact">
          <h2>{contact.title}</h2>
          <ul>
            {contact.contactInfo.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Contact;
