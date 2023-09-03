import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">3 Years Freelance</span>
      </div>

      <div className="about__box">
        <i class="uil uil-check-circle about__icon"></i>
        <h3 className="about__title">Completed.</h3>
        <span className="about__subtitle">+20 Project.</span>
      </div>

      <div className="about__box">
        <i class="uil uil-parcel about__icon"></i>

        <h3 className="about__title">Diploma.</h3>
        <span className="about__subtitle">Advanced Cycle Diploma.</span>
      </div>
    </div>
  );
};

export default Info;
