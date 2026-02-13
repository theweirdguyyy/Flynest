import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CartContext } from '../../Context/CartContext';

// Keep your image imports
import img1 from '../../../public/Images/image14.png';
import img2 from '../../../public/Images/image10.jpeg';
import img3 from '../../../public/Images/image8.jpeg';
import img4 from '../../../public/Images/image3.png';

function TourDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
    
    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(true);

    // --- PHASE 6: FETCH SINGLE TOUR BY ID ---
    useEffect(() => {
        const fetchTourDetails = async () => {
            try {
                // Note: We are calling your new backend route
                const response = await fetch(`/api/tours/${id}`);
                const data = await response.json();
                setTour(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching tour details:", error);
                setLoading(false);
            }
        };

        fetchTourDetails();
    }, [id]);

    const handleAddToCart = (tour) => {
        addToCart({ ...tour, quantity: 1 });
        toast.success('Tour added to cart!');
    };

    if (loading) return <div className="text-center py-5 text-white">Loading details...</div>;
    
    if (!tour) {
        return (
            <div className="container text-center py-5 text-white">
                <h2>Tour Not Found</h2>
                <button onClick={() => navigate('/tours')} className="btn btn-primary">Back to Tours</button>
            </div>
        );
    }

    return (
        <>
            <ToastContainer position="top-right" autoClose={2500} theme='dark' />
            <div className="tour-detail page">
                <div className="tour-slider">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1.8}
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        className='tourSwiper'
                    >
                        <SwiperSlide><img src={img1} className='tour-slide-img' alt="slide 1" /></SwiperSlide>
                        <SwiperSlide><img src={img2} className='tour-slide-img' alt="slide 2" /></SwiperSlide>
                        <SwiperSlide><img src={img3} className='tour-slide-img' alt="slide 3" /></SwiperSlide>
                        <SwiperSlide><img src={img4} className='tour-slide-img' alt="slide 4" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className="about-detail-section pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h4 className="tour-title">{tour.title}</h4>
                            <div className="d-flex gap-3 align-items-center mb-3">
                                <span><i className="ri-map-pin-line"></i> {tour.location}</span>
                                <span><i className="ri-time-line"></i> {tour.duration}</span>
                                <span><i className="ri-user-3-line"></i> {tour.person}</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <div><strong>From <span className='fs-2 text-warning'>${tour.price}</span></strong></div>
                                <div className="text-warning"><i className="ri-star-fill"></i> {tour.rating} ({tour.reviews} reviews)</div>
                            </div>

                            <section className="mb-4">
                                <h5 className="mb-2">About This Tour</h5>
                                <p>{tour.description || "No description available for this tour."}</p>
                            </section>

                            <div className="row border rounded p-3">
                                <div className="col-md-6">
                                    <h5 className="mb-2">Included</h5>
                                    <ul className="list-unstyle-detail">
                                        {(tour.included || []).map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h5 className="mb-2">Excluded</h5>
                                    <ul className="list-unstyle-detail">
                                        {(tour.excluded || []).map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            
                            {/* DYNAMIC TOUR PLAN WITH HIGHLIGHTS */}
                            <section className="mt-4">
                                <h5 className="mb-3">Tour Plan</h5>
                                <div className="accordion" id='tourPlanAccordion'>
                                    {(tour.tourPlan || []).map((plan, index) => (
                                        <div className="accordion-item" key={index}>
                                            <h2 className='accordion-header' id={`heading${index}`}>
                                                <button
                                                    className={`accordion-button ${index > 0 ? 'collapsed' : ''}`}
                                                    type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`}
                                                    aria-expanded={index === 0} aria-controls={`collapse${index}`}
                                                >
                                                   {plan.day} - {plan.title}
                                                </button>
                                            </h2>
                                            <div id={`collapse${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                                aria-labelledby={`heading${index}`} data-bs-parent="#tourPlanAccordion">
                                                <div className="accordion-body bg-dark text-white">
                                                    <p>{plan.description}</p>
                                                    
                                                    {/* DYNAMIC TOUR PLAN HIGHLIGHTS */}
                                                    {plan.highlights && plan.highlights.length > 0 && (
                                                        <>
                                                            <h6 className="mt-3 mb-2 text-warning">Highlights:</h6>
                                                            <ul className="tour-plan-highlights">
                                                                {plan.highlights.map((highlight, idx) => (
                                                                    <li key={idx}>
                                                                        <i className="ri-check-line"></i>
                                                                        <span>{highlight}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="mt-4">
                                <h5 className='mb-2'>Cancellation Policy</h5>
                                <p>{tour.policy || "Cancellation policy details are not available for this tour."}</p>
                            </section>
                        </div>

                        {/* Booking Widget Column */}
                        <div className="col-md-4">
                            <div className="p-4 rounded-4 shadow-lg booking-widget bg-dark text-white">
                                <h6 className="text-muted mb-2">From</h6>
                                <h3 className="fw-bold text-light mb-4">
                                    <span className="text-warning">${tour.price}</span> <small>/ person</small>
                                </h3>
                                <form>
                                    <div className="mb-3">
                                        <label className='text-light p-2'>Select Date</label>
                                        <input type="date" className='form-select bg-dark border-secondary text-white' />
                                    </div>
                                    <div className="mb-3">
                                        <label className='text-light p-2'>Guests</label>
                                        <select className='form-select bg-dark border-secondary text-white'>
                                            <option>1 guest</option>
                                            <option>2 guests</option>
                                            <option>3 guests</option>
                                        </select>
                                    </div>
                                    <button
                                        type='button'
                                        className='btn btn-warning w-100 mt-3 d-flex align-items-center justify-content-center gap-2'
                                        onClick={() => handleAddToCart(tour)}
                                    >
                                        <i className="ri-shopping-cart-line fs-5"></i>
                                        <span>Book Now</span>
                                    </button>
                                </form>
                                <div className="small mt-4 text-muted border-top pt-3">
                                    <i className="ri-check-double-line text-success me-2"></i>
                                    Free Cancellation - Up To 24h Advance
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TourDetail;