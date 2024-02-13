import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <img
        src="assets/image-omelette.jpeg"
        alt="foodImage"
        className="headerImage"
      />
      <div className="headerText">
        <h1 className="headerTextTitle headingL regularText">
          Simple Omelette Recipe
        </h1>
        <p className="headerTextDesc bodyTextPrimary">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
      </div>
      <div className="preparation primaryCardBg">
        <h3 className="preparationTitle headingS">Preparation time</h3>
        <ul className="preparationItems">
          <li className="preparationItem">
            <div className="preparationItemContent">
              <p className="preparationItemTitle bodyTextSecondary">Total:</p>
              <p className="preparationItemDesc bodyTextPrimary">
                Approximately 10 minutes
              </p>
            </div>
          </li>
          <li className="preparationItem">
            <div className="preparationItemContent">
              <p className="preparationItemTitle bodyTextSecondary">
                Preparation:
              </p>
              <p className="preparationItemDesc bodyTextPrimary">5 minutes</p>
            </div>
          </li>
          <li className="preparationItem">
            <div className="preparationItemContent">
              <p className="preparationItemTitle bodyTextSecondary">Cooking:</p>
              <p className="preparationItemDesc bodyTextPrimary">5 minutes</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
