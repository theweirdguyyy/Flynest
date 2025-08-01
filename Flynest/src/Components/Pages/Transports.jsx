import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import transportData from '../../Data/Transport.json'
// import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Transports() {
    const { cartItems, addToCart } = useContext(CartContext); // Destructure cartItems from context

    const handleBookNow = (vehicle) => {
        const alreadyExists = cartItems.find(item => item.id === vehicle.id);

        if (alreadyExists) { // Correct: if alreadyExists is truthy (item IS in cart)
            toast.info("Item already in cart!");
        } else { // Correct: if alreadyExists is falsy (item is NOT in cart)
            addToCart({...vehicle, quantity: 1 });
            toast.success("Item added to cart!");
        }
    };

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
                                {transportData.map((vehicle) => (
                                    <div key={vehicle.id} className='col-md-6 col-xl-4 mb-4' >
                                        <div className="transport-card p-3 shadow-sm h-100 d-flex flex-column">
                                            <div className="position-relative mb-3">
                                                <img src={vehicle.image} className='img-fluid w-100 rounded-3' alt={vehicle.name} />
                                                <span className='badge position-absolute top-0 end-0 m-2 bg-primary text-white'>
                                                    <i className='ri-star-fill me-1'></i>
                                                    {vehicle.rating} ({vehicle.reviews})
                                                </span>
                                            </div>

                                            <h6 className='fw-bold mb-1'>{vehicle.name}</h6>
                                            <div className="text-light mb-2">
                                                <i className="ri-map-pin-line me-1"></i>
                                                {vehicle.location}
                                            </div>

                                            <div class="d-flex flex-wrap gap-3 text-white mb-3 small">
                                                <span>
                                                    <i class="ri-roadster-line me-1 text-primary"></i>
                                                    {vehicle.mileage}
                                                </span>
                                                <span>
                                                    <i class="ri-settings-2-line me-1 text-primary"></i>
                                                    {vehicle.transmission}
                                                </span>
                                                <span>
                                                    <i class="ri-steering-line me-1 text-primary"></i>
                                                    Seats: {vehicle.seats}
                                                </span>
                                                <span>
                                                    <i class="ri-steering-line me-1 text-primary"></i>
                                                    Trips: {vehicle.trips}
                                                </span>
                                            </div>

                                            <div class="d-flex justify-content-between align-items-center mt-auto">
                                                <span class="fw-semibold text-primary">
                                                    ${vehicle.price}<small>/Day</small>
                                                </span>

                                                <button
                                                    className="btn btn-outline-primary btn-sm btn-dark-theme"
                                                    onClick={() => handleBookNow(vehicle)}
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

export default Transports;