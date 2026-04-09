import React, { useState } from "react";
import { Container, Ratio, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import myslide1 from "../assets/images/slide1.jpg";
import myslide2 from "../assets/images/slide2.png";
import myslide3 from "../assets/images/slide3.png";
import myslide4 from "../assets/images/slide4.png";
import myslide5 from "../assets/images/slide5.png";
import myslide6 from "../assets/images/slide1.jpg";
import myslide7 from "../assets/images/slide2.png";
import myslide8 from "../assets/images/slide3.png";
import myslide9 from "../assets/images/slide5.png";




const Foodslider = () => {
  const slides = [myslide1, myslide2, myslide3, myslide4, myslide5,myslide6,myslide7,myslide8,myslide9];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      id="Portfolio"
      className="foodslider-sec py-5"
      style={{ backgroundColor: "#0E2625" }}
    >
      <Container fluid>
        <Row className="text-center mb-5">
          <span className="heading-style">Mett Resturant</span>
          <h2 className="text-white mt-2">Chef's Special</h2>
          <p className="text-white mx-auto" style={{ maxWidth: "700px" }}>
            Welcome to our restaurant, where culinary artistry meets exceptional
            dining experiences. At Mett, we strive to create a gastronomic haven
            that tantalizes your taste buds.
          </p>
        </Row>

        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          centeredSlides={true}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 5 },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          style={{ padding: "20px 0" }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  position: "relative",
                  textAlign: "center",
                  transform:
                    index === activeIndex ? "scale(1.1)" : "scale(0.9)",
                  transition: "transform 0.3s",
                }}
              >
                <img src={slide} alt={`slide ${index + 1}`} className="slider-img" />
                {index === activeIndex && (
                  <button
                    style={{
                      position: "absolute",
                      bottom: "50px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "#d4af37",
                      border: "none",
                      color: "#0e2625",
                      padding: "8px 16px",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    View More
                  </button>
                )}
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </Container>
    </div>
  );
};

export default Foodslider;