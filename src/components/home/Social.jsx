import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="mailto:mohammedlaabouli@gmail.com"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-envelope-alt"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/mohamed-laabouli-66b57b1bb/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://github.com/laabouli"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
