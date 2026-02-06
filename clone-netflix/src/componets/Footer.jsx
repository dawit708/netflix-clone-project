import React from 'react'
import './Footer.css'
import Facebook from '../Images/facebook.png';
import Instagram from '../Images/instagram.png';
import Youtube from '../Images/youtube.png';

export default function Footer() {
  return (
    <footer className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="social_icons">
          <img src={Facebook} alt="Facebook" />
          <img src={Instagram} alt="Instagram" />
          <img src={Youtube} alt="Youtube" />
        </div>
        <div className="footer_data">
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
            <li className="service_code">Service Code</li>
          </ul>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer_copyright">
          © 1997-2026 Netflix, Inc.
        </div>
      </div>
    </footer>
  )
}