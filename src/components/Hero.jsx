import React from "react";

import "../assets/css/Hero.css";

export default function Hero() {
  const HOME_MENU = ["Home", "About Us", "Community", "Contacts"];
  return (
    <div className="hero">
      <nav>
        <ul>
          {HOME_MENU.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </nav>

      <header>
        <h2>We help you</h2>
        <h1>Learn</h1>
        <button>View Dashboard</button>
      </header>

      <div className="hero-img"></div>
    </div>
  );
}