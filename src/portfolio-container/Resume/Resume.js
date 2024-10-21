import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA */
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    {
      skill: "NodeJs",
    },
    {
      skill: "SQL",
      icon: "https://cdn-icons-png.flaticon.com/512/4299/4299956.png",
    },
    {
      skill: "Microsoft Azure",
      icon: "https://arunpotti.files.wordpress.com/2021/12/microsoft_azure.svg_.png",
    },
    {
      skill: "React JS",
      icon: "https://cdn-icons-png.flaticon.com/512/2103/2103694.png",
    },
    {
      skill: "AWS",
      icon: "https://1000logos.net/wp-content/uploads/2022/08/Microsoft-Power-BI-Logo.png",
    },
  ];

  const projectsDetails = [
    {
      title: "React Movie App",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "A movie app designed using ReactJs by consuming IMDB movie API",
      subHeading: "Technologies used: React Js",
    },

    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies used: React Js, Bootstrap",
    },
    {
      title: "PayStack Payment Gateway",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "Rewriting the paystack gateway to allow users easily intergrate paystack with their products.",
      subHeading: "Technologies used: NodeJs,Express",
    },
  ];

  const resumeDetails = [
    /* EDUCATION */
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Zetech University, Kenya"}
        subHeading={"Diploma in Software Engineering"}
        description={
          "Majors: Probability & Statistics, Calculus, System Design, Coding"
        }
        fromDate={"2018"}
        toDate={"present"}
      />
    </div>,
    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"ZinZen"}
          subHeading={"React Open Source Developer"}
          fromDate={"July 2024"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Built the frontend of the life planner app in React. Enables users
            to enter goals with fuzzy time constraints like “read 1hr daily
            after 7 and before 10” and calculates a schedule with specific start
            and end times based on the provided constraints. Reduced frequency
            of bugs by including React integration tests in CI. Improved
            functionality of frontend by fixing bugs and adding a helper module
            (TypeScript) that filters tasks received from the back end by start
            date.
          </span>
        </div>
      </div>
    </div>,
    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
        </div>
      ))}
    </div>,
    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,
    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Mentoring"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Listening to Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
      <ResumeHeading
        heading="Sight seeing"
        description="I have an eye for landscapes, vast lands and sunsets. Each time I'm out, away from concrete blocks things get clearer and bleak becomes lucid."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
