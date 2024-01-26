import React from "react";
import "./home.css";
import home1 from "../../assets/home1.png";
import home2 from "../../assets/Home2.png";
const Home = () => {
  return (
    <>
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
          <div className="images">
            <img src={home1} />
            <img src={home2} />
          </div>
        </div>
        <div className="right pt-5 mx-5">
          <div>
            <button>Sign In</button>
            <button>Join In</button>
            <div></div>
            <div></div>
            <p></p>

            <form>
              <input
                type="email "
                placeholder="Email"
                className="inputStyle form-control"
              />
              <input
                type="password"
                placeholder="Password"
                className=" form-control inputStyle"
              />
              <div className="d-flex justify-content-around">
                <input type="checkbox" />
                Remember me
                <a href="">Forgot password ?</a>
              </div>
              <button type="submit" className="w-25">
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
