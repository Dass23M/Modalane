import React from 'react'
import { FacebookIcon, InstagramIcon } from 'lucide-react'
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">Chrome & Co.</div>
          <div className="footer-nav">
            <ul>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-content">
          <div className="footer-column">
            <h4>Shop</h4>
            <ul>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
              <li>
                <a href="#">Sale</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Sustainability</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Social</h4>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="social-icon">
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Chrome & Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
