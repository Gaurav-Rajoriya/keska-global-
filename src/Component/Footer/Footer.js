import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='foot'>
      <section className="footer-container">
        <footer>
          <div className="content">
            <div className="top">
              <div className="logo-details">
                <i className="fab fa-slack"></i>
                <span className="logo_name">KESKA GLOBAL TRADE</span>
              </div>
              <div className="media-icons">
                <Link><ion-icon name="logo-facebook"></ion-icon></Link>
                <Link><ion-icon name="logo-instagram"></ion-icon></Link>
                <Link><ion-icon name="logo-linkedin"></ion-icon></Link>
                <Link><ion-icon name="logo-youtube"></ion-icon></Link>
                
              </div>
            </div>
            <div className="link-boxes">
              <ul className="box">
                <li className="link_name">About Us</li>
                <li>
                  <Link to="#"
                    >As a team dedicated to excellence, we at Keska Global Trade
                    blend passion with precision to deliver the finest spices from
                    around the world. Our commitment is your culinary delight.</Link>
                </li>
              </ul>
              <ul className="box">
                <li className="link_name">Company</li>
                <li><Link to="#">Home</Link></li>
                <li><Link to="#">Contact us</Link></li>
                <li><Link to="#">About us</Link></li>
                <li><Link to="#">Our product</Link></li>
              </ul>
              <ul className="box">
                <li className="link_name">Account</li>
                <li><Link>Profile</Link></li>
                <li><Link>My account</Link></li>
                <li><Link>Prefrences</Link></li>
                <li><Link>Purchase</Link></li>
              </ul>
              <ul className="box">
                <li className="link_name">Terms</li>
                <li><Link>Terms & Condition</Link></li>
                <li><Link>Privacy policy</Link></li>
              </ul>
              <ul className="box input-box">
                <li className="link_name">Subscribe</li>
                <li><input type="text" placeholder="Enter your email" /></li>
                <li ><input type="button" value="Subscribe" /></li>
              </ul>
            </div>
          </div>
          <div className="bottom-details">
            <div className="bottom_text">
              <span className="copyright_text"
                >Copyright © 2021 <Link to="https://dgmt.in/">DGMT</Link></span>
              <span className="policy_terms">
                <Link>Privacy policy</Link>
                <Link>Terms & condition</Link>
              </span>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Footer;
