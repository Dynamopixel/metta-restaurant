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
                <Row className="text-center mb-0 mb-lg-4">
                    <span className="heading-style">Mett Resturant</span>
                    <h2 className="text-white mt-2">Our Brands</h2>

                </Row>

                <div>

                    {/* Left Blur Overlay */}
                    <div className="slider-overlay left-overlay"></div>

                    {/* Right Blur Overlay */}
                    <div className="slider-overlay right-overlay"></div>


                    {/* First Row - Left to Right */}
                    <Swiper
                        slidesPerView={2}           // Mobile pe directly 2
                        spaceBetween={15}           // Kam space mobile ke liye
                        loop={true}
                        freeMode={true}
                        speed={2500}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        grabCursor={true}
                        modules={[Autoplay]}
                        breakpoints={{
                            320: { slidesPerView: 2, spaceBetween: 12 },   // Small mobile
                            480: { slidesPerView: 2, spaceBetween: 15 },
                            768: { slidesPerView: 3, spaceBetween: 25 },
                            1024: { slidesPerView: 5, spaceBetween: 40 },
                        }}
                        style={{ padding: "15px 0" }}
                    >
                        <SwiperSlide>
                            <img src={frame1} alt="brand" className="logo-slider-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={frame2} alt="brand" className="logo-slider-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={frame3} alt="brand" className="logo-slider-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={frame4} alt="brand" className="logo-slider-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={frame5} alt="brand" className="logo-slider-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={frame6} alt="brand" className="logo-slider-img" />
                        </SwiperSlide>
                    </Swiper>

                    {/* Second Row - Right to Left (Reverse) */}
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={15}
                        loop={true}
                        freeMode={true}
                        speed={2500}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            reverseDirection: true,
                        }}
                        grabCursor={true}
                        modules={[Autoplay]}
                        breakpoints={{
                            320: { slidesPerView: 2, spaceBetween: 12 },
                            480: { slidesPerView: 2, spaceBetween: 15 },
                            768: { slidesPerView: 3, spaceBetween: 25 },
                            1024: { slidesPerView: 5, spaceBetween: 40 },
                        }}
                        style={{ padding: "15px 0" }}
                    >
                        {/* Same images */}
                        <SwiperSlide>
                            <img src={frame1} alt="brand" className="logo-slider-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={frame2} alt="brand" className="logo-slider-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={frame3} alt="brand" className="logo-slider-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={frame4} alt="brand" className="logo-slider-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={frame5} alt="brand" className="logo-slider-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={frame6} alt="brand" className="logo-slider-img" />
                        </SwiperSlide>
                    </Swiper>

                </div>
            </Container>
        </div>
    )
}

export default LogoSlider