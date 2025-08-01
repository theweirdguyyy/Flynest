import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import hotelData from '../../Data/Hotel.json'
// import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Hotels() {


    
        const { cartItems, addToCart } = useContext(CartContext);

        const handleBookNow = (hotel) => {
            const item = {
                id: hotel.id,
                title: hotel.name,
                image: hotel.image,
                price: hotel.price,
                persons: 1,
            };
            const alreadyExists = cartItems.find(h => h.id === hotel.id);
            if (!alreadyExists) {
                addToCart(item);
                toast.success(`${hotel.name} Added to your cart`);
            } else {
                toast.info("Already in your cart");
            }
        }
   
    return (
        <>
            <div className="main-wrapper">
                <ToastContainer />

                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 mb-4">
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
                                    <legend><i className="ri-calendar-event-line me-2"></i>Date Form</legend>
                                    <input type="date" className='form-control' />
                                </fieldset>

                                <fieldset className='filter-section'>
                                    <legend><i className="ri-user-smile-line me-2"></i>Guests</legend>
                                    <input type="number" className='form-control' placeholder='number of Guest' min={1} />
                                </fieldset>

                                <fieldset className='filter-section'>
                                    <legend><i className="ri-star-smile-line me-2"></i>Traveler Rating</legend>
                                    <div className='d-flex flex-wrap gap-2'>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <span key={star} className='rating-badge'>
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
                                        <label htmlFor="likely" className='form-check-label'>Likely to Sell Out</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" id='discount' className='form-check-input' />
                                        <label htmlFor="discount" className='form-check-label'>Winter Discount</label>
                                    </div>
                                </fieldset>

                                <fieldset className='filter-section'>
                                    <legend><i className="ri-translate-2-line me-2"></i>Languages</legend>
                                    {["English", "Spanish", "French", "Bangla"].map((lang, i) => (
                                        <div className="form-check" key={i}>
                                            <input type="checkbox" className='form-check-input' id={lang} />
                                            <label htmlFor={lang} className='form-check-label'>{lang}</label>
                                        </div>
                                    ))}
                                </fieldset>
                            </div>
                        </div>

                        <div className="col-lg-9">
                            <div className="row">
                                {hotelData.map((hotel) => (
                                    <div className='col-md-6 col-xl-4 mb-4' key={hotel.id}>
                                        <div className="hotel-card p-3 shadow-sm h-100">
                                            <div className="position-relative mb-3">
                                                <img src={hotel.image} className='img-fluid w-100 rounded-3' alt={hotel.name} />
                                                <span className='badge position-absolute top-0 end-0 m-2'>
                                                    <i className='ri-star-fill me-1'></i>
                                                    {hotel.rating} ({hotel.reviews})
                                                </span>
                                            </div>

                                            <h6 className='fw-bold mb-1'>{hotel.name}</h6>
                                            <div className="text-muted mb-2">
                                                <i className="ri-map-pin-line me-1"></i>
                                                {hotel.location}
                                            </div>

                                            <div className="d-flex flex-wrap gap-2 text-muted mb-3 small">
                                                {hotel.facilities.map((item, idx) => (
                                                    <span key={idx} className='d-flex align-items-center'>
                                                        <i className={`ri-${item.icon}-line me-1`}></i>
                                                        {item.name}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center mt-auto">
                                                <span className='fw-semibold text-primary'>
                                                    ${hotel.price} <small>/Person</small>
                                                </span>
                                                <button
                                                    className='btn btn-outline-primary btn-sm text-white'
                                                    onClick={() => handleBookNow(hotel)}
                                                >
                                                    Book Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hotels
