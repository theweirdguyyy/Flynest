import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import brand1 from '../../assets/brand-1.jpeg';
import brand2 from '../../assets/brand-2.jpeg';
import brand3 from '../../assets/brand-3.jpeg';
import brand4 from '../../assets/brand-4.png';
import brand5 from '../../assets/brand-5.png';

function BrandsSection() {
    return (
        <div className="brands-container section">
            <div className="container">
                <div className="row">
                    <Swiper
                        className="brand-swiper"
                        slidesPerView={4}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        centeredSlides={true}
                        breakpoints={{
                            992: { slidesPerView: 4 },
                            768: { slidesPerView: 3 },
                            576: { slidesPerView: 2 },
                            0: { slidesPerView: 1.5 },
                        }}
                    >
                        <SwiperSlide>
                            <div className="brand-image">
                                <img src={brand1} alt="brand-image" className="img-fluid" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-image">
                                <img src={brand2} alt="brand-image" className="img-fluid" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-image">
                                <img src={brand3} alt="brand-image" className="img-fluid" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-image">
                                <img src={brand4} alt="brand-image" className="img-fluid" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-image">
                                <img src={brand5} alt="brand-image" className="img-fluid" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default BrandsSection;