import React from "react";
import "./Footer.css";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  /* SOCIALS STATIC DATA */
  let socialDetails = [
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/emmanuel-koech-a223a2171",
    },
    //   { icon: faGithub, link: '' },
    {
      icon: faTwitter,
      link: "https://twitter.com/MutaiE1?t=ma8Q0Z81fkTMZpnbXEZEfw&s=09",
    },
  ];

  /* GET CURRENT YEAR */
  let currentYear = new Date().getFullYear();

  /* RENDER SOCIAL ICONS */
  const getSocials = () => {
    return socialDetails.map((social, index) => (
      <a
        rel="noopener noreferrer"
        key={index}
        href={social.link}
        target="_blank"
      >
        <FontAwesomeIcon className="social-icon" icon={social.icon} />
      </a>
    ));
  };

  return (
    <div className="main-footer-container">
      <div className="main-footer-content">
        <div className="main-footer-message">
          <span> All rights reserved © Nicholas Kipkoech {currentYear} </span>
          <span>Email:nickey968@gmail.com</span> <p>Phone:+254713839182</p>
        </div>
        <div className="main-footer-socials">{getSocials()}</div>
      </div>
    </div>
  );
};

export default Footer;
