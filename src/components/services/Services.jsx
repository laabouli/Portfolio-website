import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon icon-item"></i>
            <h3 className="services__title">Web Developement</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">
                <i class="uil uil-visual-studio"></i> Web Developement
              </h3>
              <p className="services__modal-description"></p>
              <ul className="services__modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Creation of Web & Desktop Applications.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Creation of databases.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Fix Bugs.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ************************************************************************************ */}

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon icon-item"></i>
            <h3 className="services__title">Ui/Ux Designer</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">
                {" "}
                <i class="uil uil-palette"></i> Ui/Ux Designer.
              </h3>
              <p className="services__modal-description"></p>
              <ul className="services__modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create UI-UX elemnent interactions.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Figma</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Business Logo</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web Design.</p>
                </li>

                {/* <li className="services_modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        {/* ************************************************************************************ */}
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon icon-item"></i>
            <h3 className="services__title">Computer Network</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">
                <i class="uil uil-desktop"></i> Computer Network
              </h3>
              <p className="services__modal-description"></p>
              <ul className="services__modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Installation of Windows client and Windows server with
                    services.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Installation and Maintenance of IT Equipment.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Configuration du matériel CISCO.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Ensure the security of computer data.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Diagnose and resolve technical problems.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
