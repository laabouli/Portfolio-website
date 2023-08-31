import React from "react";
import "./projects.css";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="testimonial" id="portfolio">
      <div className="container section">

      <h2 className="section__title">Project</h2>
      <span className="section__subtitle">My personel Project</span>
      <Swiper
        className="testimonial__container"
        slidesPerView={1}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description, URL }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__img" />

              <a href={URL} target="__blank">
                <h3 className="testimonial__name">{title}</h3>
              </a>

              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
