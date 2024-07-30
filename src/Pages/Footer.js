import React from 'react';
import '././Footer.css';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-media">
          <h1 className="logo">
            KUKU<span className="text-primary">FM</span>
          </h1>
          <div class="follow">
          <h4>Follow Us</h4>
          <div class="icon">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-pinterest-p"></i>
            <i class="fab fa-youtube"></i>
          </div>
        </div>
      


        </div>
        <div className="grid">
          <div>
            
            <ul className="list">
           <h2 className="section-title">COMPANY</h2>
              <li><button className="link-button">About Us</button></li>
              <li><button className="link-button">Careers</button></li>
              <li><button className="link-button">Our Team</button></li>
            </ul>
          </div>
          <div>
           
            <ul className="list">
               <h2 className="section-title">GENERAL</h2>
              <li><button className="link-button">Help & Support</button></li>
              <li><button className="link-button">Blog</button></li>
              <li><button className="link-button">Partner Program</button></li>
              <li><button className="link-button">For Business</button></li>
              <li><button className="link-button">Creator Login</button></li>
              <li><button className="link-button">Kuku FM Pustak</button></li>
            </ul>
          </div>
          <div>
            
            <ul className="list">
              <h2 className="section-title">LEGAL</h2>
              <li><button className="link-button">Contact Us</button></li>
              <li><button className="link-button">Payments Policy</button></li>
              <li><button className="link-button">Privacy Policy</button></li>
              <li><button className="link-button">Piracy Policy</button></li>
              <li><button className="link-button">T&C</button></li>
              <li><button className="link-button">Report abuse</button></li>
            </ul>
          </div>
          <div>
            
            <ul className="list">
              <h2 className="section-title">GENRES</h2>
              <li><button className="link-button">Personal Finance</button></li>
              <li><button className="link-button">Historical</button></li>
              <li><button className="link-button">Information</button></li>
              <li><button className="link-button">Career</button></li>
              <li><button className="link-button">Love</button></li>
              <li><button className="link-button">All Genres</button></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Kuku FM (Mebigo Labs Private limited)</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
