import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import { ReactComponent as ExpIcon } from "../assets/Explore.svg";
import { ReactComponent as HobbIcon } from "../assets/Hobbies.svg";
import { ReactComponent as Bookmark } from "../assets/bookmark.svg";
import { ReactComponent as Bell } from "../assets/bell.svg";
import { ReactComponent as Cart } from "../assets/cart.svg";
import { FaSearch } from "react-icons/fa";
import ButtonCom from "./ButtonCom";
//import { Dropdown } from "react-bootstrap";
function Header() {
  return (
    <div className="">
      <div className="navbar d-flex justify-content-sm-around w-100">
        <div className="">
          <img src={logo} alt="logo" width={200} />
        </div>
        <div className="mx-5 w-25 ">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
            <button className="btn buttonStyle" type="button ">
              <FaSearch />
            </button>
          </div>
        </div>
        <div className="d-flex ">
          <div className="dropdown mx-2">
            <ExpIcon />
            <select className="custom-select">
              {" "}
              <option value="" disabled selected hidden>
                Explore
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="dropdown mx-2">
            <HobbIcon />
            <select className="custom-select">
              <option value="" disabled selected hidden>
                Hobbies
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <Bookmark className="mx-2" />
          <Bell className="mx-2" />
          <Cart className="mx-2" />
        </div>
        {/* <button>Sign in</button> */}
        <ButtonCom label="Sign in" />
      </div>
      <div className=""></div>
    </div>
  );
}

export default Header;
