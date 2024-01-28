import "../../App.css";
import React from "react";
import { FaLock } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
function SignIn() {
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
      </form>
    </div>
  );
}

export default SignIn;
