/*import React from "react";
import "././Navbar.css";
import MenuToggle from "./MenuToggle";

const Navbar = () => {
  return (
    
     
      <nav className="navbar">
      <div>
        <MenuToggle />
      </div>

        <div className="navbar-logo">
          KUKU<span>FM</span>
        </div>
        <div className="navbar-items">
          <input
            type="text"
            className="navbar-search"
            placeholder="Search Audiobook and Stories"
          />
          <div className="navbar-link">Buy Premium</div>
          <div className="navbar-link">Buy Coins</div>
          <button className="navbar-button">Log In</button>
        </div>
      </nav>
    
  );
};

export default Navbar;
*/
import React from "react";
import "./Navbar.css";
import MenuToggle from "./MenuToggle";

const Navbar = () => {
  

  return (
    <nav className="navbar">
      <div>
        <MenuToggle />
      </div>
    
      <div className="navbar-logo">
        KUKU<span>FM</span>
      </div>
      <div className="navbar-items">
        <input
          type="text"
          className="navbar-search"
          placeholder="Search Audiobook and Stories"
        />
        <div className="navbar-link">Buy Premium</div>
        <div className="navbar-link">Buy Coins</div>
        <div className="navbar-link">Login / Signup</div>
      </div>
     
     
    </nav>
  );
};

export default Navbar;
