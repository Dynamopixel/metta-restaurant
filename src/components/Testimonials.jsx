import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

const Testimonials = () => {
    return (
        <section
            className="testimonial-section py-4 py-md-5 py-lg-6 custom-space text-center"
            style={{ height: '60vh' }}
        >
            <div className="container">


                <Swiper
                    spaceBetween={20}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    {/* Testimonial 1 */}
                    <SwiperSlide>
                        <div className="text-center mx-auto px-3" style={{ maxWidth: '780px' }}>
                            <div style={{ fontSize: '60px', color: '#d4af37', opacity: '0.7', marginBottom: '20px' }}>
                                “
                            </div>
                            <p className='text-center' style={{
                                fontSize: '19px',
                                lineHeight: '1.7',
                                fontStyle: 'italic',
                                marginBottom: '30px',
                                color: "#fff"
                            }}>
                                Welcome to our restaurant, where culinary artistry meets exceptional dining experiences. At, we strive to create a gastronomic haven that tantalizes your taste buds.. Welcome to our restaurant, where culinary artistry meets exceptional dining experiences. At, we strive to create a gastronomic haven that tantalizes your taste buds.
                            </p>
                            <h6 className="mb-1">ALICIA AUGELLO</h6>
                            <p style={{ color: '#d4af37' }} className="mt-4 text-center">Cook</p>
                        </div>
                    </SwiperSlide>

                    {/* Testimonial 2 */}
                    <SwiperSlide>
                        <div className="text-center mx-auto px-3" style={{ maxWidth: '780px' }}>
                            <div style={{ fontSize: '60px', color: '#d4af37', opacity: '0.7', marginBottom: '20px' }}>
                                “
                            </div>
                            <p className='text-center' style={{
                                fontSize: '19px',
                                lineHeight: '1.7',
                                fontStyle: 'italic',
                                marginBottom: '30px',
                                color: "#fff"
                            }}>
                                Welcome to our restaurant, where culinary artistry meets exceptional dining experiences. At, we strive to create a gastronomic haven that tantalizes your taste buds.. Welcome to our restaurant, where culinary artistry meets exceptional dining experiences. At, we strive to create a gastronomic haven that tantalizes your taste buds.
                            </p>
                            <h6 className="mb-1">JAMES WILSON</h6>
                            <p style={{ color: '#d4af37' }} className="mt-4 text-center">Food Critic</p>
                        </div>
                    </SwiperSlide>

                    {/* Testimonial 3 */}
                    <SwiperSlide>
                        <div className="text-center mx-auto px-3" style={{ maxWidth: '780px' }}>
                            <div style={{ fontSize: '60px', color: '#d4af37', opacity: '0.7', marginBottom: '20px' }}>
                                “
                            </div>
                            <p className='text-center' style={{
                                fontSize: '19px',
                                lineHeight: '1.7',
                                fontStyle: 'italic',
                                marginBottom: '30px',
                                color: "#fff"
                            }}>
                                Welcome to our restaurant, where culinary artistry meets exceptional dining experiences. At, we strive to create a gastronomic haven that tantalizes your taste buds.. Welcome to our restaurant, where culinary artistry meets exceptional dining experiences. At, we strive to create a gastronomic haven that tantalizes your taste buds.
                            </p>
                            <h6  >SOPHIA MARTINEZ</h6>
                            <p style={{ color: '#d4af37' }} className="mt-4 text-center">Regular Customer</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;