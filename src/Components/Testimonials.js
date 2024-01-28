import "../App.css";
import React from "react";
import ButtonCom from "./ButtonCom";
import { IoIosAddCircle } from "react-icons/io";
import AddTestimonial from "./AddTestimonial";
import profilePicture from "../assets/profileImage.png";
import { RiDoubleQuotesL } from "react-icons/ri";
import group1 from "../assets/group1.png";
import group2 from "../assets/group2.png";
function Testimonials() {
  return (
    <div>
      <div className="div-test-1">
        <div className="add-testimonial ">
          <div className="card m-2 custom-border">
            <div className="card-body m-4 ">
              <div className="d-flex gap-2">
                <IoIosAddCircle
                  className="icon-style"
                  style={{ color: "#0096C8" }}
                />
                <h5 className="card-title">Add your own</h5>
              </div>
              <p className="card-text my-4">
                Are you a teacher or expert? Do you sell or rent out equipment,
                venue or event tickets? Or, you know someone who should be on
                hobbycue? Go ahead and Add your Own page
              </p>
              <ButtonCom label="Add new" />
            </div>
          </div>
        </div>
      </div>
      <div className="div-test-2 w-100">
        <div className="other-testimonial m-4  p-4">
          <div className="d-flex gap-2 ">
            <RiDoubleQuotesL
              className="icon-style rounded-circle"
              style={{
                color: "#fff",
                backgroundColor: "#8064A2",
              }}
            />
            <h5 className="card-title">Testimonials</h5>
          </div>
          <AddTestimonial
            paragraph="In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it."
            profilePicture={profilePicture}
            name="Shubha Nagarajan"
            profession="Clasical dancer"
          />
        </div>
      </div>
      <div className="w-100" style={{ background: " #F7FDFF" }}>
        <div className="get-started px-xl-5 " style={{ paddingTop: "100px" }}>
          <h2 className="pb-3">
            Your <span style={{ color: "#0096C8" }}>Hobby </span>,Your{" "}
            <span style={{ color: "#8064A2" }}>Community</span>
          </h2>
          <button
            className="btn rounded-3 "
            type="button"
            style={{ backgroundColor: "#8064A2", color: "#fff" }}
          >
            Get started
          </button>
          <div className="d-flex pt-5 gap-4">
            <img src={group1} style={{ width: "570px", height: "288px" }} />
            <img src={group1} style={{ width: "570px", height: "288px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
