import "../App.css";
// TestimonialComponent.jsx
import React from "react";
import { FaPlayCircle } from "react-icons/fa";

const AddTestimonial = ({ paragraph, profilePicture, name, profession }) => {
  return (
    <div className="testimonial">
      <p className="card-text my-4 fw-light">{paragraph}</p>
      <div
        className="d-flex w-100 justify-content-between"
        style={{ height: "100px" }}
      >
        <div className=" audio-box w-50 p-4">
          <div className="media-player d-flex gap-4">
            <FaPlayCircle
              className="icon-style rounded-circle border-white player-icon"
              style={{ color: "#fff", backgroundColor: "#8064A2" }}
            />
            <div className="progress-container align-self-center">
              <div className="controller"></div>
              <div className="progress-bar"></div>
            </div>
            <p className="align-self-end" style={{ color: "#8064A2" }}>
              0:00
            </p>
            <div>
              <img
                src={profilePicture}
                className="rounded-circle"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
          </div>
        </div>
        <div className="d-flex gap-4">
          <img
            src={profilePicture}
            alt={`${name}'s profile`}
            className="rounded-circle "
            style={{ height: "100px", width: "100ppx" }}
          />
          <div className="profile-info">
            <h4>{name}</h4>
            <p>{profession}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTestimonial;
