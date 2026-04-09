import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import frame1 from "../assets/images/Frame26.png";
import frame2 from "../assets/images/Frame27.png";
import frame3 from "../assets/images/Frame28.png";
import frame4 from "../assets/images/Frame29.png";
import frame5 from "../assets/images/Frame30.png";
import frame6 from "../assets/images/Frame31.png";

const LogoSlider = () => {
    return (
        <div className='logoslider py-5' >
            <Container fluid>
                <Row className="text-center mb-5">
                    <span className="heading-style">Mett Resturant</span>
                    <h2 className="text-white mt-2">Our Brands</h2>

                </Row>

                <div>

                    {/* Left Blur Overlay */}
                    <div className="slider-overlay left-overlay"></div>

                    {/* Right Blur Overlay */}
                    <div className="slider-overlay right-overlay"></div>

                    
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={40}
                        loop={true}

                        freeMode={true}
                        speed={3000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        grabCursor={true}
                        centeredSlides={false}
                        modules={[Navigation, Autoplay]}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 5 },   // mobile
                            576: { slidesPerView: 2, spaceBetween: 10 },  // small tablet
                            768: { slidesPerView: 3, spaceBetween: 20 },  // desktop
                            1024: { slidesPerView: 5, spaceBetween: 40 }, // large desktop
                        }}
                        style={{ padding: "20px 0" }}
                    >
                        <SwiperSlide>
                            <img src={frame1} alt="slide 1" className="logo-slider-img" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={frame2} alt="slide 2" className="logo-slider-img" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={frame3} alt="slide 3" className="logo-slider-img" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={frame4} alt="slide 4" className="logo-slider-img" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={frame5} alt="slide 5" className="logo-slider-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={frame6} alt="slide 1" className="logo-slider-img" />
                        </SwiperSlide>

                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </Swiper>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={40}
                        loop={true}

                        freeMode={true}
                        speed={3000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            reverseDirection: true,
                        }}

                        grabCursor={true}
                        centeredSlides={false}
                        modules={[Navigation, Autoplay]}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 5 },   // mobile
                            576: { slidesPerView: 2, spaceBetween: 10 },  // small tablet
                            768: { slidesPerView: 3, spaceBetween: 20 },  // desktop
                            1024: { slidesPerView: 5, spaceBetween: 40 }, // large desktop
                        }}
                        style={{ padding: "20px 0" }}
                    >
                        <SwiperSlide>
                            <img src={frame1} alt="slide 1" className="logo-slider-img" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={frame2} alt="slide 2" className="logo-slider-img" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={frame3} alt="slide 3" className="logo-slider-img" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={frame4} alt="slide 4" className="logo-slider-img" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={frame5} alt="slide 5" className="logo-slider-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={frame6} alt="slide 1" className="logo-slider-img" />
                        </SwiperSlide>

                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </Swiper>

                </div>
            </Container>
        </div>
    )
}

export default LogoSlider