import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import restaurantData from '../../Data/Restaurant.json'
// import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Restaurants() {
    const { cartItems, addToCart } = useContext(CartContext); // Destructure cartItems from context

    const handleBookTable = (item) => {
        const alreadyExists = cartItems.find(cartItems => cartItems.id === item.id);

        if (alreadyExists) { // Correct: if alreadyExists is truthy (item IS in cart)
            toast.info("Item already in cart!");
        } else { // Correct: if alreadyExists is falsy (item is NOT in cart)
            addToCart({...item, quantity: 1 });
            toast.success("Table added to cart!");
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