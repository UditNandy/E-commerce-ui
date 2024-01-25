import React from "react";
import "./newsLetter.css";

export const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email ID"></input>
        <button>Subscribe</button>
      </div>
    </div>
  );
};
