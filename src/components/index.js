import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Index() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1 className="head">Welcome to Car Becho!!!</h1>
      </div>
      <form>
        <div className="headingsContainer">
          <br />
          <br />
          <h3 className="head">Sign in!!!</h3>
        </div>

        <div className="mainContainer">
          <label htmlFor="user">Your email</label>
          <input
            type="text"
            placeholder="Please enter a valid email address"
            name="user"
            required
          />

          <br />

          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            placeholder="Enter a valid password"
            name="password"
            required
          />

          <br />
          <br />
          <br />
          <button onClick={() => navigate("/home")}>Login</button>

          <p className="head" >
            Not a member? <Link to="/registration"><h2 id="link">Register here!</h2></Link>
          </p>
        </div>
      </form>
    </>
  );
}
