import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
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
    const slides = [
        { img: myslide1, name: "Herbed Avocado" },
        { img: myslide2, name: "Tuna Tataki" },
        { img: myslide3, name: "Beef Stroganoff " },
        { img: myslide4, name: "Spaghetti" },
        { img: myslide5, name: "Spaghetti Bolognese " },
        { img: myslide6, name: "Herbed Avocado" },
        { img: myslide7, name: "Tuna Tataki" },
        { img: myslide8, name: "Beef Stroganoff " },
        { img: myslide9, name: "Spaghetti" },
    ];

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
                                <img
                                    src={slide.img}
                                    alt={`slide ${index + 1}`}
                                    className="slider-img"
                                />
                                {index === activeIndex && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            bottom: "50px",
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            background: "linear-gradient(135deg, rgba(212,175,55,0.3), rgba(14,38,37,0.3))",   
                                            backdropFilter: "blur(12px)",              
                                            WebkitBackdropFilter: "blur(12px)",  
                                            padding: "12px 28px",
                                            borderRadius: "5px",
                                            color: "#ffffff",
                                            fontWeight: "600",
                                            fontSize: "16px",
                                            textAlign: "center",
                                            minWidth: "180px",
                                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", 
                                            border: "1px solid rgba(255, 255, 255, 0.2)", 
                                        }}
                                    >
                                          {slide.name}
                                    </div>
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