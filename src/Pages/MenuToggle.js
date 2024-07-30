import React, { useState } from 'react';
import '././MenuToggle.css';

const MenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-toggle">
      <div onClick={toggleMenu} className="menu-icon">
        {isOpen ? (
          <div className="close-icon">✖</div>
        ) : (
          <>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </>
        )}
      </div>

      {isOpen && (
        <div className="menu">
          
          <ul>
          <li>Login / Signup</li>
          <li>For better & personalized experience</li>
          <li>Get Free trial</li>
            <li>For Creators</li>
            <li>About</li>
            <li>Legal</li>
            <li>Help & Support</li>
            <li>Blog</li>
            <li>Download Kuku FM app</li>
            <li>Careers</li>
          </ul>
          <footer>
            Made with ❤️ in India
          </footer>
        </div>
      )}
    </div>
  );
};

export default MenuToggle;
