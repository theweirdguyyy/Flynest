import React from 'react';

function PricingSection() {
    return (
        <div className="price-section section">
            <div className="container">
                <div className="section-title mb-5">
                    <div className="row text-center">
                        <p>Package Pricing Plan</p>
                        <h2>Simply Choose The Pricing Plan <br />That Fits You Best</h2>
                    </div>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4">
                        <div className="pricing-card">
                            <h5>Basic</h5>
                            <p className="mb-3">Best for personal and basic needs</p>
                            <div className="pricing-content d-flex align-items-center gap-3 border-top">
                                <h2>$10</h2>
                                <span>One-time payment</span>
                            </div>
                            <ul className="list-unstyled mt-4">
                                <li className="mb-4"><i className="ri-check-line"></i>20+ Partners</li>
                                <li className="mb-4"><i className="ri-check-line"></i>Mass Messaging</li>
                                <li className="mb-4"><i className="ri-check-line"></i>Lorem ipsum dolor sit, amet</li>
                                <li className="mb-4 disabled-li"><i className="ri-check-line"></i>Online Booking Engine</li>
                                <li className="mb-4 disabled-li"><i className="ri-check-line"></i>Business Card Scanner</li>
                            </ul>
                            <button className="btn text-white">Try Now <i className="ri-arrow-right-up-line"></i></button>
                            <p className="text-white mt-3">Per month +2% per online Booking</p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="pricing-card">
                            <h5>Pro <span className='popular-tag text-white'>Popular</span></h5>
                            <p className="mb-3">Best for personal and basic needs</p>
                            <div className="pricing-content d-flex align-items-center gap-3 border-top">
                                <h2>$77</h2>
                                <span>One-time payment</span>
                            </div>
                            <ul className="list-unstyled mt-4">
                                <li className="mb-4"><i className="ri-check-line"></i>20+ Partners</li>
                                <li className="mb-4"><i className="ri-check-line"></i>Mass Messaging</li>
                                <li className="mb-4"><i className="ri-check-line"></i>Lorem ipsum dolor sit, amet</li>
                                <li className="mb-4"><i className="ri-check-line"></i>Online Booking Engine</li>
                                <li className="mb-4 disabled-li"><i className="ri-check-line"></i>Business Card Scanner</li>
                            </ul>
                            <button className="btn text-white">Try Now <i className="ri-arrow-right-up-line"></i></button>
                            <p className="text-white mt-3">Per month +2% per online Booking</p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="pricing-card">
                            <h5>Custom</h5>
                            <p className="mb-3">Best for personal and basic needs</p>
                            <ul className="list-unstyled mt-4">
                                <li className="mb-4"><i className="ri-check-line"></i>Mass Messaging</li>
                                <li className="mb-4"><i className="ri-check-line"></i>Unlimited Everything</li>
                                <li className="mb-4"><i className="ri-check-line"></i>Lorem ipsum dolor</li>
                                <li className="mb-4"><i className="ri-check-line"></i>Online Booking Engine</li>
                                <li className="mb-4"><i className="ri-check-line"></i>Business Card Scanner</li>
                            </ul>
                            <button className="btn text-white">Contact <i className="ri-arrow-right-up-line"></i></button>
                            <p className="text-white mt-3">Please contact anytime</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PricingSection;