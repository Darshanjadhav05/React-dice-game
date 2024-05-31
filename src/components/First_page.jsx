import React from "react";
import './First_page.css';

const First_page = ({toggle}) => {
  return (
    <div className="container">
      <img src="./images/dices 1.png" alt="dice main page image" />
      <div className="main">
        <h1>Dice Game</h1>
        <button onClick={toggle}>Play Now</button>
      </div>
    </div>
  );
};

export default First_page;
