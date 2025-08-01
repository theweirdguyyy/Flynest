import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import { CartContext } from './../../Context/CartContext';

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cartItems } = useContext(CartContext); // Changed to object destructuring
    // const [cartCount, setCartCount] = useState(0);
    const cartCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

    // useEffect(() => {
    //     const updateCount = () => {
    //         const cart = JSON.parse(localStorage.getItem('cart')) || [];
    //         const total = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
    //         setCartCount(total);
    //     };

    //     updateCount();
    //     window.addEventListener('cartUpdated', updateCount);
    //     window.addEventListener('storage', updateCount);

    //     return () => {
    //         window.removeEventListener('cartUpdated', updateCount);
    //         window.removeEventListener('storage', updateCount);
    //     };
    // }, []);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <nav className='text-white p-0 navbar navbar-expand-lg' style={{ backgroundColor: '#12151e' }}>
                <div className="container d-flex align-items-center justify-content-center">
                    {/* Change to single flex row */}
                    <div className="row w-100 py-3" style={{ borderBottom: '1px solid rgba(248, 250, 252, 0.08)' }}>
                        {/* Left section - Phone info */}
                        <div className="col-lg-12">
                            <div className='w-100 top-header d-flex align-items-center justify-content-between'>
                                <div className='Call d-none d-lg-flex align-items-center'>
                                    <span className="bi bi-telephone me-3 " style={{ backgroundColor: '#222839' }}></span>
                                    <div className="call-text">
                                        <p className="m-0">Call Anytime</p>
                                        <h4 className="fs-6 m-0 fw-semibold">00 (888) +123456</h4>
                                    </div>
                                </div>

                                {/* Center section - Logo */}
                                <div className="logo">
                                    <h1 className="p-0 m-0 text-uppercase fw-semibold">
                                        <Link to="/" className="text-white text-decoration-none navbar-brand fs-2 m-0">
                                            Fly<span style={{ color: '#f26f55' }}>n</span>est
                                        </Link>
                                    </h1>
                                </div>

                                {/* Right section - Language, Cart, Sign Up */}
                                <div className="top-header-right d-none d-lg-flex align-items-center gap-4">
                                    <div className="lang d-flex align-items-center gap-2 fs-6">
                                        <span className="ri-global-line"></span>
                                        <p className="m-0">English</p>
                                    </div>

                                    <div className="divider gradient-divider"></div>

                                    <Link to="/cart" className="cartpage-cart-link position-relative">
                                        <i className="bi bi-cart text-white fs-5"></i>
                                        <span className="cart-count">{cartCount}</span>
                                    </Link>
                                    <button className="btn sign-up btn-custome text-white rounded-5 px-4 py-2 fs-6 fw-semibold">Sign Up</button>
                                </div>

                                {/* Mobile menu button */}
                                <button className="navbar-toggler nav-toggle d-block d-lg-none box-shadow-none"
                                    type="button"
                                    onClick={toggleMenu}
                                    aria-label="Toggle navigation"
                                >
                                    <span className="bi bi-list fs-1 text-white"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>



            <div className="container">
                <div className="row py-0 py-lg-4 w-100  align-items-center">
                    <div className="col-lg-9">
                        <div className={`collapse navbar-collapse  show `} id='navtoggle'>
                            <ul className="nav-menu  list-unstyled m-0 d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-3 gap-xl-5 gap-lg-4">
                                <li className="nav-items position-relative text-white ">
                                    <Link to="/" className='nav-link' onClick={closeMenu}>Home</Link>
                                </li>
                                <li className="nav-items position-relative text-white ">
                                    <Link to="/Tours" className='nav-link' onClick={closeMenu}>Tours</Link>
                                </li>
                                <li className="nav-items position-relative text-white">
                                    <Link to="/Hotels" className='nav-link' onClick={closeMenu}>Hotels</Link>
                                </li>
                                <li className="nav-items position-relative text-white">
                                    <Link to="/Transports" className='nav-link' onClick={closeMenu}>Transports</Link>
                                </li>
                                <li className="nav-items position-relative text-white">
                                    <Link to="/Restaurants" className='nav-link' onClick={closeMenu}>Restaurants</Link>
                                </li>
                                <li className="nav-items position-relative text-white">
                                    <Link to="/About" className='nav-link' onClick={closeMenu}>About</Link>
                                </li>
                                <li className="nav-items position-relative text-white">
                                    <Link to="/Blog" className='nav-link' onClick={closeMenu}>News</Link>
                                </li>
                                <li className="nav-items position-relative text-white">
                                    <Link to="/Contact" className='nav-link' onClick={closeMenu}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="nav-input-box w-100 d-none d-lg-flex align-items-center justify-content-start gap-2">
                            <i class="bi bi-search text-white"></i>
                            <input type="text" className='form-control from-control-sm w-100' placeholder='Destinations, Attraction'></input>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Nav;