import React from "react";
import "../App.css";
import ButtonCom from "./ButtonCom";
import { MdGroups } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { MdShoppingBasket } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
function About() {
  return (
    <div className="vh-100 container">
      <div className="d-flex flex-wrap gap-3">
        <div className="card custom-card-style ">
          <div className="card-body m-4">
            <div className="d-flex gap-2">
              <MdGroups className="icon-style" />
              <h5 className="card-title">People</h5>
            </div>
            <p className="card-text my-4">
              Find a teacher, coach, or expert for your hobby interest in your
              locality. Find a partner, teammate, accompanist or collaborator.
            </p>
            <ButtonCom label="Connect" />
          </div>
        </div>
        <div className="card custom-card-style ">
          <div className="card-body m-4">
            <div className="d-flex gap-2">
              <IoLocationSharp
                className="icon-style"
                style={{ color: "#77933C" }}
              />
              <h5 className="card-title">Place</h5>
            </div>
            <p className="card-text my-4">
              Find a class, school, playground, auditorium, studio, shop or an
              event venue. Book a slot at venues that allow booking through
              hobbycue.
            </p>
            <ButtonCom label="Meet up" />
          </div>
        </div>
        <div className="card custom-card-style">
          <div className="card-body m-4">
            <div className="d-flex gap-2">
              <MdShoppingBasket
                className="icon-style"
                style={{ color: "#C0504D" }}
              />
              <h5 className="card-title">Product</h5>
            </div>
            <p className="card-text my-4">
              Find equipment or supplies required for your hobby. Buy, rent or
              borrow from shops, online stores or from community members.
            </p>
            <ButtonCom label="Got it" />
          </div>
        </div>
        <div className="card custom-card-style">
          <div className="card-body m-4">
            <div className="d-flex gap-2">
              <MdEventAvailable
                className="icon-style"
                style={{ color: "#0096C8" }}
              />
              <h5 className="card-title">Program</h5>
            </div>
            <p className="card-text my-4">
              Find events, meetups and workshops related to your hobby. Register
              or buy tickets online.
            </p>
            <ButtonCom label="Attend" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
