import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import transportData from '../../Data/Transport.json'
// import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Transports() {
    const { cartItems, addToCart } = useContext(CartContext);
    const [isFilterOpen, setIsFilterOpen] = useState(false); // Mobile filter toggle state

    const handleBookNow = (vehicle) => {
        const alreadyExists = cartItems.find(item => item.id === vehicle.id);

        if (alreadyExists) {
            toast.info("Item already in cart!");
        } else {
            addToCart({ ...vehicle, quantity: 1 });
            toast.success("Vehicle added to cart!");
        }
    };

    return (
        <>
            <div className="main-wrapper">
                <ToastContainer position="top-right" autoClose={2500} theme='dark' />

                <div className="container mt-4">
                    {/* Mobile Filter Toggle Button */}
                    <div className="d-lg-none mb-3">
                        <button 
                            className="btn btn-dark w-100 d-flex justify-content-between align-items-center py-2" 
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            style={{ backgroundColor: '#12151e', border: '1px solid rgba(248, 250, 252, 0.2)' }}
                        >
                            <span><i className="ri-filter-3-fill me-2 text-orange"></i> Filter Vehicles</span>
                            <i className={`ri-arrow-${isFilterOpen ? 'up' : 'down'}-s-line`}></i>
                        </button>
                    </div>

                    <div className="row">
                        {/* Filter Sidebar - Responsive Hide/Show */}
                        <div className={`col-lg-3 mb-4 ${isFilterOpen ? 'd-block' : 'd-none'} d-lg-block`}>
                            <div className="filter-sidebar shadow-sm">
                                <h5 className='fw-bold mb-4 d-flex align-items-center'>
                                    <i className="ri-filter-3-fill me-2 text-secondary"></i>
                                    Advanced Filter
                                </h5>

                                <fieldset className='filter-section'>
                                    <legend><i className="ri-map-pin-line me-2"></i>Pickup Location</legend>
                                    <select className='form-select'>
                                        <option value="">Select Location</option>
                                        <option>Airport</option>
                                        <option>City Center</option>
                                        <option>Hotel Transfer</option>
                                    </select>
                                </fieldset>

                                <fieldset className='filter-section'>
                                    <legend><i className="ri-car-line me-2"></i>Vehicle Type</legend>
                                    <select className='form-select'>
                                        <option value="">Select Type</option>
                                        <option>Sedan</option>
                                        <option>SUV</option>
                                        <option>Luxury</option>
                                        <option>Van</option>
                                    </select>
                                </fieldset>

                                <fieldset className='filter-section'>
                                    <legend><i className="ri-calendar-event-line me-2"></i>Pickup Date</legend>
                                    <input type="date" className='form-control' />
                                </fieldset>

                                <fieldset className='filter-section'>
                                    <legend><i className="ri-user-smile-line me-2"></i>Passengers</legend>
                                    <input type="number" className='form-control' placeholder='Number of Guests' min={1} />
                                </fieldset>

                                <fieldset className='filter-section'>
                                    <legend><i className="ri-settings-2-line me-2"></i>Transmission</legend>
                                    <div className="form-check">
                                        <input type="checkbox" id='auto' className='form-check-input' />
                                        <label htmlFor="auto" className='form-check-label text-white'>Automatic</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" id='manual' className='form-check-input' />
                                        <label htmlFor="manual" className='form-check-label text-white'>Manual</label>
                                    </div>
                                </fieldset>

                                <fieldset className='filter-section'>
                                    <legend><i className="ri-translate-2-line me-2"></i>Driver Languages</legend>
                                    {["English", "Spanish", "French", "Bangla"].map((lang, i) => (
                                        <div className="form-check" key={i}>
                                            <input type="checkbox" className='form-check-input' id={lang} />
                                            <label htmlFor={lang} className='form-check-label text-white'>{lang}</label>
                                        </div>
                                    ))}
                                </fieldset>

                                {/* Mobile Apply Button */}
                                <button 
                                    className="btn btn-primary w-100 d-lg-none mt-3" 
                                    onClick={() => setIsFilterOpen(false)}
                                >
                                    Apply Filters
                                </button>
                            </div>
                        </div>

                        {/* Transports Grid */}
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

 