import React from "react";
import { useState } from "react";
//import "./home.css";
import "../../App.css";
import home1 from "../../assets/home1.png";
import home2 from "../../assets/Home2.png";

import SignIn from "./SignIn";
import JoinIn from "./JoinIn";
const Home = () => {
  const [activeButton, setActiveButton] = useState("signIn");

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };
  return (
    <div className="home-page w-100 vh-100">
      <div className="d-flex justify-content-between">
        <div className="left pt-5  col-6">
          <h2>
            Explore your <span style={{ color: "#0096C8" }}>hobby </span>or{" "}
            <span style={{ color: "#8064A2" }}>passion</span>
          </h2>
          <p>
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
            <br />
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>
          <div className="images d-flex">
            <img src={home1} />
            <img src={home2} />
          </div>
        </div>
        <div className="right pt-5 mx-5 col-4">
          <div className="mb-4">
            <button
              className={`border-bottom-button no-style-button ${
                activeButton === "signIn" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("signIn")}
            >
              Sign In
            </button>
            <button
              className={`border-bottom-button no-style-button ${
                activeButton === "joinIn" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("joinIn")}
            >
              Join In
            </button>
          </div>
          <div></div>
          <div></div>
          <p></p>
          {activeButton === "signIn" ? <SignIn /> : <JoinIn />}
          {/* <form>
            <div className="btn-input-container">
              <FcGoogle className="social-icon" />

              <button className="form-control inputStyle text-black">
                Continue with Google
              </button>
            </div>
            <div className="btn-input-container">
              <FaFacebook className="social-icon facebook" />
              <button className="form-control inputStyle text-black ">
                Login With Other Accounts
              </button>
            </div>
            <p className="text-center">Connect With Separator</p>
            <input
              type="email "
              placeholder="Email"
              className=" form-control input-border input-group"
            />
            <div className="password-input-container">
              <input
                type="password"
                placeholder="Password"
                className="form-control inputStyle input-border input-group"
              />
              <FaEyeSlash className="eye-icon" />
            </div>

            <div className="d-flex justify-content-between my-4">
              <div className="form-group ">
                <input type="checkbox" value="Remember me" />
                <span className="mx-2">Remember me</span>
              </div>
              <div className="form-group ">
                <FaLock />
                <a href="" className="style-none">
                  Forgot password ?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="form-control inputStyle border-black text-black"
            >
              Continue
            </button>
          </form> */}
        </div>
      </div>
    </div>
  );
};
export default Home;
