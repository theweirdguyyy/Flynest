import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import restaurantData from '../../Data/Restaurant.json'
// import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Restaurants() {
    const { cartItems, addToCart } = useContext(CartContext);
    const [isFilterOpen, setIsFilterOpen] = useState(false); // Mobile filter toggle state

    const handleBookTable = (item) => {
        const alreadyExists = cartItems.find(cartItem => cartItem.id === item.id);

        if (alreadyExists) {
            toast.info("Item already in cart!");
        } else {
            addToCart({ ...item, quantity: 1 });
            toast.success("Table added to cart!");
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
                            <span><i className="ri-filter-3-fill me-2 text-orange"></i> Advanced Filter</span>
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
                                    <legend><i className="ri-restaurant-2-line me-2"></i>Cuisine Type</legend>
                                    <select className='form-select'>
                                        <option value="">Select Type</option>
                                        <option>Fine Dining</option>
                                        <option>Street Food</option>
                                        <option>Cafe</option>
                                        <option>Traditional</option>
                                    </select>
                                </fieldset>

                                <fieldset className='filter-section'>
                                    <legend><i className="ri-calendar-event-line me-2"></i>Reservation Date</legend>
                                    <input type="date" className='form-control' />
                                </fieldset>

                                <fieldset className='filter-section'>
                                    <legend><i className="ri-user-smile-line me-2"></i>Table Size</legend>
                                    <input type="number" className='form-control' placeholder='Number of Guests' min={1} />
                                </fieldset>

                                <fieldset className='filter-section'>
                                    <legend><i className="ri-star-smile-line me-2"></i>Rating</legend>
                                    <div className='d-flex flex-wrap gap-2'>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <span key={star} className='rating-badge' style={{cursor: 'pointer'}}>
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
                                        <label htmlFor="likely" className='form-check-label text-white'>Happy Hour</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" id='discount' className='form-check-input' />
                                        <label htmlFor="discount" className='form-check-label text-white'>Group Discount</label>
                                    </div>
                                </fieldset>

                                <fieldset className='filter-section'>
                                    <legend><i className="ri-translate-2-line me-2"></i>Staff Languages</legend>
                                    {["English", "Spanish", "French", "Bangla"].map((lang, i) => (
                                        <div className="form-check" key={i}>
                                            <input type="checkbox" className='form-check-input' id={lang} />
                                            <label htmlFor={lang} className='form-check-label text-white'>{lang}</label>
                                        </div>
                                    ))}
                                </fieldset>

                                {/* Mobile Close/Apply Button */}
                                <button 
                                    className="btn btn-primary w-100 d-lg-none mt-3" 
                                    onClick={() => setIsFilterOpen(false)}
                                >
                                    Apply Filters
                                </button>
                            </div>
                        </div>

                        {/* Restaurants Grid */}
                        <div className="col-lg-9">
                            <div className="row">
                                {restaurantData.map((item) => (
                                    <div key={item.id} className='col-md-6 col-xl-4 mb-4' >
                                        <div className="transport-card p-3 shadow-sm h-100 d-flex flex-column">
                                            <div className="position-relative mb-3">
                                                <img src={item.image} className='img-fluid w-100 rounded-3' alt={item.title} />
                                                <span className='badge position-absolute top-0 end-0 m-2 bg-primary text-white'>
                                                    <i className='ri-star-fill me-1'></i>
                                                    {item.rating} ({item.reviews})
                                                </span>
                                            </div>

                                            <h6 className='fw-bold mb-1'>{item.title}</h6>
                                            <div className="text-light mb-2">
                                                <i className="ri-map-pin-line me-1"></i>
                                                {item.location}
                                            </div>

                                            <div class="d-flex flex-wrap gap-2 text-white mb-3 small">
                                                <span class="badge bg-dark">{item.tag}</span>
                                                <span>
                                                    <s class="text-secondary">${item.oldPrice}</s> {" "}
                                                    <strong class="text-success">${item.price}</strong>
                                                </span>
                                            </div>

                                            <div class="d-flex justify-content-between align-items-center mt-auto">
                                                <span class="fw-semibold text-primary">
                                                    ${item.price}<small>/meal</small>
                                                </span>
                                                <button
                                                    class="btn btn-outline-primary btn-sm btn-dark-theme"
                                                    onClick={() => handleBookTable(item)}
                                                >
                                                    Book Table
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

export default Restaurants;

