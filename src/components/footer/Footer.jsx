import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Mohamed</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="mailto:mohammedlaabouli@gmail.com"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-envelope-alt"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/mohamed-laabouli-66b57b1bb/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-linkedin-alt"></i>
          </a>

          <a
            href="https://github.com/laabouli"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-github-alt"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Mohamedlaabouli. All right reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
