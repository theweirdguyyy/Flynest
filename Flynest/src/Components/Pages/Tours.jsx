import React, { useEffect, useState, useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import tourData from '../../Data/Tours.json'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function Tours() {

    const [tours, setTours] = useState([]);
    const [visibleCount, setVisibleCount] = useState(6);
    const [loading, setLoading] = useState(true);
    const [isFilterOpen, setIsFilterOpen] = useState(false); // State for mobile filter toggle
    const { cartItems, addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await fetch('/api/tours/all');
                const data = await response.json();
                setTours(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching tours:", error);
                // If API fails, fallback to local JSON data
                setTours(tourData);
                setLoading(false);
            }
        };

        fetchTours();
    }, []);


    const handleBookNow = (tour) => {
        const alreadyInCart = cartItems.find((item) => item.id === tour.id);

        if (alreadyInCart) {
            toast.success("Already in your cart");
        }
        else {
            addToCart({ ...tour, quantity: 1 });
            toast.success('Tour added to cart!')
        }
    };

    const loadMore = () => {
        setVisibleCount((prev) => prev + 6);
    }

    return (
        <>
            <div className="main-wrapper">
                <ToastContainer position="top-right" autoClose={2500} theme='dark' />

                <div className="container mt-4">
                    {/* Mobile Filter Toggle Button - Visible only on small devices */}
                    <div className="d-lg-none mb-3">
                        <button 
                            className="btn btn-dark w-100 d-flex justify-content-between align-items-center py-2" 
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            style={{ backgroundColor: '#12151e', border: '1px solid rgba(248, 250, 252, 0.2)' }}
                        >
                            <span><i className="ri-filter-3-fill me-2 text-orange"></i> Advanced Filter</span>
                            <i className={`ri-arrow-${isFilterOpen ? 'up' : 'down'}-s-line`}></i>
                        </button>
                    </div>

                    <div className="row">
                        {/* Filter Sidebar - Responsive Logic */}
                        <div className={`col-lg-3 mb-4 ${isFilterOpen ? 'd-block' : 'd-none'} d-lg-block`}>
                            <div className="filter-sidebar shadow-sm">
                                <h5 className='fw-bold mb-4 d-flex align-items-center'>
                                    <i className="ri-filter-3-fill me-2 text-secondary"></i>
                                    Advanced Filter
                                </h5>

                                <fieldset className='filter-section'>
                                    <legend><i className="ri-map-pin-line me-2"></i>Destination</legend>
                                    <select className='form-select'>
                                        <option value="">Select Destination</option>
                                        <option>USA</option>
                                        <option>Turkey</option>
                                        <option>Switzerland</option>
                                        <option>Bora Bora</option>
                                    </select>
                                </fieldset>

                                <fieldset className='filter-section'>
                                    <legend><i className="ri-flight-takeoff-line me-2"></i>Tour Type</legend>
                                    <select className='form-select'>
                                        <option value="">Select Type</option>
                                        <option>Adventure</option>
                                        <option>Relaxation</option>
                                        <option>Cultural</option>
                                    </select>
                                </fieldset>

                                <fieldset className='filter-section'>
                                    <legend><i className="ri-calendar-event-line me-2"></i>Date From</legend>
                                    <input type="date" className='form-control' />
                                </fieldset>

                                <fieldset className='filter-section'>
                                    <legend><i className="ri-user-smile-line me-2"></i>Guests</legend>
                                    <input type="number" className='form-control' placeholder='Number of Guests' min={1} />
                                </fieldset>

                                <fieldset className='filter-section'>
                                    <legend><i className="ri-star-smile-line me-2"></i>Traveler Rating</legend>
                                    <div className='d-flex flex-wrap gap-2'>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <span key={star} className='rating-badge' style={{ cursor: 'pointer' }}>
                                                <i className="ri-star-fill text-warning me-1"></i>
                                                {star}
                                            </span>
                                        ))}
                                    </div>
                                </fieldset>

                                <fieldset className='filter-section'>
                                    <legend><i className="ri-price-tag-3-line me-2"></i>Special Offers</legend>
                                    <div className="form-check">
                                        <input type="checkbox" id='likely' className='form-check-input' />
                                        <label htmlFor="likely" className='form-check-label text-white'>Likely to Sell Out</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" id='discount' className='form-check-input' />
                                        <label htmlFor="discount" className='form-check-label text-white'>Winter Discount</label>
                                    </div>
                                </fieldset>

                                <fieldset className='filter-section'>
                                    <legend><i className="ri-translate-2-line me-2"></i>Languages</legend>
                                    {["English", "Spanish", "French", "Bangla"].map((lang, i) => (
                                        <div className="form-check" key={i}>
                                            <input type="checkbox" className='form-check-input' id={lang} />
                                            <label htmlFor={lang} className='form-check-label text-white'>{lang}</label>
                                        </div>
                                    ))}
                                </fieldset>
                                
                                {/* Mobile Close Button */}
                                <button 
                                    className="btn btn-primary w-100 d-lg-none mt-3" 
                                    onClick={() => setIsFilterOpen(false)}
                                >
                                    Apply Filters
                                </button>
                            </div>
                        </div>

                        {/* Tours Grid */}
                        <div className="col-lg-9">
                            <div className="row">
                                {tours.slice(0, visibleCount).map((tour) => (
                                    <div className='col-md-6 col-lg-4 mb-4' key={tour.id}>
                                        <div className="card h-100 tour-card shadow-sm position-relative">
                                            <div className="position-relative">
                                                <Link to={`/TourDetail/${tour.id}`}>
                                                    <img src={tour.image} className='card-img-top rounded-3' alt={tour.title} />
                                                </Link>
                                                <i className='ri-shopping-cart-2-line fs-5 text-white position-absolute top-0 end-0 m-2 bg-dark p-2 rounded-circle'
                                                    role='button'
                                                    style={{ cursor: 'pointer', backgroundColor: 'rgba(0,0,0,0.5)' }}
                                                    onClick={() => handleBookNow(tour)}
                                                ></i>
                                            </div>
                                            <div className="card-body py-3">
                                                <h5 className="card-title fw-semibold mb-1 text-white">{tour.title}</h5>
                                                <p className="mb-3 text-secondary small"><i className="ri-map-pin-line me-1"></i>{tour.location}</p>
                                                <div className="d-flex flex-wrap justify-content-between small mb-3 p-2 rounded-2" style={{ backgroundColor: 'rgba(248, 250, 252, 0.08)' }}>
                                                    <div className="text-white"><i className="ri-time-line me-1 text-orange"></i>{tour.duration}</div>
                                                    <div className="text-white"><i className="ri-user-line me-1 text-orange"></i>{tour.person}</div>
                                                </div>
                                                <div className="d-flex mt-2 align-items-center justify-content-between small">
                                                    <div style={{ color: '#8f94a3' }}>
                                                        From <span className="text-white fw-bold"> ${tour.price}</span>
                                                    </div>
                                                    <div className="text-white">
                                                        <i className="ri-star-fill text-warning me-1"></i>
                                                        <span>{tour.rating} ({tour.reviews})</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {visibleCount < tours.length && (
                                <div className='text-center mb-4 mt-2'>
                                    <button className='btn btn-primary px-4 py-2' onClick={loadMore}>Load More</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tours;