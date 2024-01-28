import React from "react";
//import "./Header.css";
import logo from "../assets/logo.png";
import "react-icons";
import { FaBellSlash, FaExpandArrowsAlt, FaSearch } from "react-icons/fa";
import { PiAddressBookBold, PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaBell } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { RiShieldStarFill } from "react-icons/ri";
import ButtonCom from "./ButtonCom";
import { MdExpandMore } from "react-icons/md";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
function Header() {
  return (
    <div className="">
      <div className="navbar d-flex justify-content-sm-around w-100">
        <div className="">
          <img src={logo} alt="logo" width={200} />
        </div>
        <div className="mx-5 w-25 ">
          <div className="input-group ">
            <input
              type="text"
              className="form-control search-border"
              placeholder="Search..."
              style={{ border: "1px solid #8064A2" }}
            />
            <button
              className="btn buttonStyle"
              type="button"
              style={{ backgroundColor: "#8064A2", color: "#fff" }}
            >
              <FaSearch />
            </button>
          </div>
        </div>
        <div className="d-flex ">
          {/* <div className="dropdown mx-2">
            <MdExplore className="icon-style" />

            <select className="custom-select">
              <option value="" disabled selected hidden>
                Explore
              </option>

              <option value="option1">People - Community</option>
              <option value="option2">Places - Venues</option>
              <option value="option3">Programs - Events</option>
              <option value="option3">Products - Store</option>
              <option value="option3">Blogs</option>
            </select>
            <MdExpandMore
              className="expand-arrow "
              
            />
          </div> */}
          <div>
            <Dropdown>
              <MdExplore className="icon-style mx-2" />
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className="custom-select custom-toggle"
              >
                Explore
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#" className="fw-light">
                  People - Community
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Places - Venues</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Programs - Events</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Products - Store</Dropdown.Item>
                <Dropdown.Item href="#">Blogs</Dropdown.Item>
              </Dropdown.Menu>
              <MdExpandMore className="expand-arrow icon-style" />
            </Dropdown>
          </div>
          {/* <div className="dropdown mx-2">
            <RiShieldStarFill className="icon-style" />
            <select className="custom-select">
              <option value="" disabled selected hidden>
                Hobbies
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <MdExpandMore className="expand-arrow" />
          </div>
          <FaBookmark className="mx-2 icon-style" />
          <FaBell className="mx-2 icon-style" />
          <PiShoppingCartSimpleFill className="mx-2 icon-style" /> */}
          <div className="mx-2">
            <Dropdown>
              <RiShieldStarFill className="icon-style mx-2" />
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className="custom-select custom-toggle"
              >
                Explore
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">People - Community</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Places - Venues</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Programs - Events</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Products - Store</Dropdown.Item>
                <Dropdown.Item href="#">Blogs</Dropdown.Item>
              </Dropdown.Menu>
              <MdExpandMore className="expand-arrow icon-style" />
            </Dropdown>
          </div>
        </div>
        {/* <button>Sign in</button> */}
        <ButtonCom label="Sign in" />
      </div>
      <div className=""></div>
    </div>
  );
}

export default Header;
