import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import myslide1 from "../assets/images/slide1.jpg";
import myslide2 from "../assets/images/slide2.png";
import myslide3 from "../assets/images/slide3.png";
import myslide4 from "../assets/images/slide4.png";
import myslide5 from "../assets/images/slide5.png";

const Foodslider = () => {
    return (
        <div id='Portfolio' className='foodslider-sec py-5' style={{ backgroundColor: '#0E2625' }}>
            <Container fluid>
                <Row className="text-center mb-5">
                    <span className="heading-style">Mett Resturant</span>
                    <h2 className="text-white mt-2">Chef's Special</h2>
                    <p className="text-white mx-auto" style={{ maxWidth: '700px' }}>
                        Welcome to our restaurant, where culinary artistry meets exceptional dining experiences.
                        At Mett, we strive to create a gastronomic haven that tantalizes your taste buds.
                    </p>
                </Row>

                <div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        loop={true}
                        freeMode={true}
                        speed={2000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        grabCursor={true}
                        centeredSlides={false}
                        modules={[Navigation, Autoplay]}
                        breakpoints={{
                            576: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 5 }
                        }}
                        style={{ padding: "20px 0" }}
                    >
                        <SwiperSlide>
                            <img src={myslide1} alt="slide 1" className="slider-img" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={myslide2} alt="slide 2" className="slider-img" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={myslide3} alt="slide 3" className="slider-img" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={myslide4} alt="slide 4" className="slider-img" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={myslide5} alt="slide 5" className="slider-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={myslide1} alt="slide 1" className="slider-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={myslide2} alt="slide 2" className="slider-img" />
                        </SwiperSlide>

                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </Swiper>


                </div>
            </Container>
        </div>
    );
};

export default Foodslider;