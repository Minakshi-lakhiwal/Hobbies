import "../App.css";
import React from "react";
import { FaFacebook, FaGooglePlus } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { AiFillGooglePlusSquare } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareYoutube } from "react-icons/fa6";
function Footer() {
  return (
    <div>
      <div className="footer pt-4">
        <div className="footer-start d-flex w-100 justify-content-around">
          <div>
            <ul>
              <h6>Hobbycue</h6>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Work with Us</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <ul>
              <h6>How Do I</h6>
              <li>Sign Up</li>
              <li>Add a Using</li>
              <li>Claim Listing</li>
              <li>Post a Query</li>
              <li>Add a Bag Post</li>
              <li>Other Queries</li>
            </ul>
          </div>
          <div>
            <ul>
              <h6>Quick Links</h6>
              <li>Listing</li>
              <li>Blog Posts</li>
              <li>Shop/Store</li>
              <li>Community</li>
            </ul>
          </div>
          <div>
            <h6>Social Media</h6>
            <div className="social-group d-flex gap-2 my-3">
              <FaFacebook className="social-icons" />
              <AiFillTwitterCircle className="social-icons" />
              <FaInstagramSquare className="rounded-circle social-icons" />
              <FaPinterest className="social-icons" />
              <FaGooglePlus className="social-icons" />
              <FaSquareYoutube className="social-icons rounded-circle" />
              <FaTelegram className="social-icons" />
              <MdEmail className="social-icons" />
            </div>
            <h6 className="my-3">Invite Friends</h6>
            <div className=" w-75 ">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control search-border custon-input"
                  placeholder="Email ID"
                  style={{ border: "1px solid #8064A2" }}
                />
                <button
                  className="btn buttonStyle"
                  type="button"
                  style={{ backgroundColor: "#8064A2", color: "#fff" }}
                >
                  Invite
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <p className="">© Purple Cues Private Limited</p>
      </div>
    </div>
  );
}
export default Footer;
