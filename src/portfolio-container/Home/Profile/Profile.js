import React from "react";
import ScrollService from ".././../../utilities/ScrollService";
import "./Profile.css";
import Typical from "react-typical";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/nicholas-kipkoech-7a3850282">
                <i className="fa fa-linkedin-square" />
              </a>
              <a href="https://x.com/NickeyKipkoech">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Nicholas</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    " Specialized in Backend Development😎",
                    1000,
                    "Specialized in Frontend development💻",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Software Engineer located in Nairobi Kenya
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>

            <a className="btn primary-btn" href="/Resume.pdf" download>
              {" "}
              Get Resume
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
