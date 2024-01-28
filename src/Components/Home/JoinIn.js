import React from "react";
import "../../App.css";
import { FaLock } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
function JoinIn() {
  return (
    <div>
      <form>
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

        <div className=" d-flex justify-content-end my-2">
          <div className="form-group mr-0">
            <FaLock />
            <a href="" className="style-none">
              Forgot password ?
            </a>
          </div>
        </div>
        <p className="fw-light mt-2">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
        <button
          type="submit"
          className="form-control inputStyle  "
          style={{ backgroundColor: "#8064A2", color: "#fff" }}
        >
          Agree and Continue
        </button>
      </form>
    </div>
  );
}

export default JoinIn;
