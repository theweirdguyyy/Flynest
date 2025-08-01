import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

function ConfirmYourBooking() {
    const navigate = useNavigate();
    const { subtotal, tax, total, cartItems } = useContext(CartContext);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        altPhone: '',
        country: '',
        city: '',
        state: '',
        zip: '',
        notes: '',
        checkIn: new Date().toISOString().split('T')[0],
        checkOut: new Date(new Date().setDate(new Date().getDate() + 3)).toISOString().split('T')[0]
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleContinue = () => {
        // Simple validation
        if (!formData.fullName || !formData.email || !formData.phone) {
            alert('Please fill in all required fields: Full Name, Email, and Phone Number.');
            return;
        }

        const bookingInfo = {
            ...formData,
            subtotal: subtotal.toFixed(2),
            tax: tax.toFixed(2),
            total: total.toFixed(2),
            items: cartItems
        };
        
        // Pass all data to the payment page
        navigate('/payment', { state: { bookingDetails: bookingInfo } });
    };

    return (
        <div className="confirm-booking-wrapper ">
            <div className="container confirm-booking-container">
                <div className="cartpage-header my-4">
                    <h2 className="cartpage-title">Confirm Your Booking</h2>
                    <p className="cartpage-breadcrumb">Home → Cart → Checkout</p>
                    <div className="cartpage-steps d-flex justify-content-center gap-2">
                        <span className='step'>1</span>
                        <span className='step step-active'>2</span>
                        <span className='step'>3</span>
                        <span className='step'>✓</span>
                    </div>
                </div>

                <div className="row bg-dark text-white">
                    <div className="col-lg-7 ">
                        <div className="p-4 rounded shadow-sm bg-section-light h-100">
                            <h4 className="text-warning mb-4">Personal Details</h4>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="form-control bg-dark text-white border-secondary" placeholder="Full Name *" required />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-control bg-dark text-white border-secondary" placeholder="Email Address *" required />
                                </div>
                                <div className="col-md-6">
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="form-control bg-dark text-white border-secondary" placeholder="Phone Number *" required />
                                </div>
                                <div className="col-md-6">
                                    <input type="tel" name="altPhone" value={formData.altPhone} onChange={handleInputChange} className="form-control bg-dark text-white border-secondary" placeholder="Alternate Number" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" name="country" value={formData.country} onChange={handleInputChange} className="form-control bg-dark text-white border-secondary" placeholder="Country" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" name="city" value={formData.city} onChange={handleInputChange} className="form-control bg-dark text-white border-secondary" placeholder="City" />
                                </div>
                                <div className="col-12">
                                    <textarea name="notes" value={formData.notes} onChange={handleInputChange} className='form-control bg-dark text-white border-secondary' rows="3" placeholder='Additional Notes (Optional)'></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="p-4 rounded shadow-sm bg-section-light">
                            <h5 className='text-white d-flex justify-content-between mb-4'>Booking Summary</h5>
                            <div className="mb-3">
                                <label className='form-label text-white'>Check-In</label>
                                <input type="date" name="checkIn" value={formData.checkIn} onChange={handleInputChange} className='form-control dark-input' />
                            </div>
                            <div className="mb-3">
                                <label className='form-label text-white'>Check-Out</label>
                                <input type="date" name="checkOut" value={formData.checkOut} onChange={handleInputChange} className='form-control dark-input' />
                            </div>
                            <div className="p-3 bg-dark rounded mb-3 border border-secondary text-white">
                                <p>Sub Total <span className='float-end'>${subtotal.toFixed(2)}</span></p>
                                <p>VAT (5%) <span className='float-end'>${tax.toFixed(2)}</span></p>
                                <hr className='border-secondary ' />
                                <p className="fw-bold fs-5">Total <span className='float-end text-warning'>${total.toFixed(2)}</span></p>
                            </div>
                            <button type="button" className="btn next-btn w-100 fw-bold" onClick={handleContinue}>Continue to Payment</button>
                            <div className="text-white text-center small mt-3">
                                <i className="ri-checkbox-circle-line text-success me-1"></i>
                                Free Cancellation <br />
                                <small>Up to 24 hours in advance</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmYourBooking;