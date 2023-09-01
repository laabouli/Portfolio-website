import "./qualification.css";
import React, { useState } from "react";

const Qualification = () => {
  const [toggleState, setToggleState] =
    useState(1); /*0 bach maraybanchi content 1 rayban  */

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Excperience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web developer</h3>
                <span className="qualification__subtitle">ENSA - tetouan </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2021 - present </i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* *************************************************** */}

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Art derector</h3>
                <span className="qualification__subtitle">ENSA - tetouan </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2021 - present </i>
                </div>
              </div>
            </div>
            {/* **************************** */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web developer</h3>
                <span className="qualification__subtitle">ENSA - tetouan </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2021 - present </i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* *************************************************** */}

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Art derector</h3>
                <span className="qualification__subtitle">ENSA - tetouan </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2021 - present </i>
                </div>
              </div>
            </div>
          </div>
          {/* *****************EXperience*************************** */}

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Emailing marketing</h3>
                <span className="qualification__subtitle">OPM - Tangier </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2023 - present </i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* ***************** */}
            <br />
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Developer</h3>
                <span className="qualification__subtitle">Freelance -</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2020-2023 - Remote </i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* *************************************************** */}
            <br />
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Technical network</h3>
                <span className="qualification__subtitle">
                  AK-technology - Tetouan
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2021 - present </i>
                </div>
              </div>
            </div>
            {/* **************************** */}
            <br />
            {/* *************************************************** */}

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Formateur Web</h3>
                <span className="qualification__subtitle">- Tetouan</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2021 - present </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
