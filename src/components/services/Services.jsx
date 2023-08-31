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
            <h3 className="services__title">
              Product Designer
            </h3>
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
              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                iusto ducimus culpa veniam cumque non accusamus illo! Nam,
                molestiae iure unde doloremque quasi voluptatibus mollitia
                aliquid tenetur veritatis, qui rem!
              </p>
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
                    I create UI-UX elemnent interactions.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ************************************************************************************ */}

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon icon-item"></i>
            <h3 className="services__title">
              Ui/Ux Designer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Ui/Ux Designer</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                iusto ducimus culpa veniam cumque non accusamus illo! Nam,
                molestiae iure unde doloremque quasi voluptatibus mollitia
                aliquid tenetur veritatis, qui rem!
              </p>
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
                    I create UI-UX elemnent interactions.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ************************************************************************************ */}
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon icon-item"></i>
            <h3 className="services__title">
              Visual Designer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                iusto ducimus culpa veniam cumque non accusamus illo! Nam,
                molestiae iure unde doloremque quasi voluptatibus mollitia
                aliquid tenetur veritatis, qui rem!
              </p>
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
                    I create UI-UX elemnent interactions.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
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
