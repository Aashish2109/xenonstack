import React from "react";
import car1 from "../components/car1.png";
import car2 from "../components/car2.png";
import car3 from "../components/car3.png";
import car4 from "../components/car4.png";
import car5 from "../components/car5.png";
import car6 from "../components/car6.png";

import "./Home.css"; // Import the CSS file

export default function Home() {
  return (
    <div>
    <h2 className="head">Welcome to Home Page</h2>
      <div className="carimages">
      <img src={car1} alt="Car Image" width="100%" />
      <img src={car2} alt="Car Image" width="100%" />
      <img src={car3} alt="Car Image" width="100%" />
      <img src={car4} alt="Car Image" width="100%" />
      <img src={car5} alt="Car Image" width="100%" />
      <img src={car6} alt="Car Image" width="100%" />
      </div>
    </div>
  );
}
