import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { CartContext } from './../../Context/CartContext';

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const { cartItems } = useContext(CartContext);
    const cartCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const toggleSearch = () => setIsSearchOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <nav className='text-white p-0 navbar navbar-expand-lg' style={{ backgroundColor: '#12151e' }}>
                <div className="container container-responsive d-flex align-items-center justify-content-center">
                    <div className="row w-100 py-3" style={{ borderBottom: '1px solid rgba(248, 250, 252, 0.08)' }}>
                        <div className="col-lg-12">
                            <div className='w-100 top-header d-flex align-items-center justify-content-between'>
                                
                                <div className='Call d-none d-lg-flex align-items-center'>
                                    <span className="bi bi-telephone me-3 " style={{ backgroundColor: '#222839' }}></span>
                                    <div className="call-text">
                                        <p className="m-0">Call Anytime</p>
                                        <h4 className="fs-6 m-0 fw-semibold">00 (888) +123456</h4>
                                    </div>
                                </div>

                                <div className="logo">
                                    <h1 className="p-0 m-0 text-uppercase fw-semibold">
                                        <Link to="/" className="text-white text-decoration-none navbar-brand fs-2 m-0">
                                            Fly<span style={{ color: '#f26f55' }}>n</span>est
                                        </Link>
                                    </h1>
                                </div>

                                <div className="top-header-right d-flex align-items-center gap-3 gap-lg-4">
                                    <i className="bi bi-search text-white fs-4 d-lg-none" style={{ cursor: 'pointer' }} onClick={toggleSearch}></i>
                                    
                                    <div className="lang d-none d-lg-flex align-items-center gap-2 fs-6">
                                        <span className="ri-global-line"></span>
                                        <p className="m-0">English</p>
                                    </div>

                                    <div className="divider gradient-divider d-none d-lg-block"></div>

                                    <Link to="/cart" className="cartpage-cart-link position-relative d-flex align-items-center text-decoration-none">
                                        <i className="bi bi-cart text-white fs-4 fs-lg-5"></i>
                                        <span className="cart-count badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle" style={{ fontSize: '0.7rem' }}>
                                            {cartCount}
                                        </span>
                                    </Link>

                                    <button className="navbar-toggler nav-toggle d-block d-lg-none border-0 p-0" type="button" onClick={toggleMenu}>
                                        <span className="bi bi-list fs-1 text-white"></span>
                                    </button>
                                </div>
                            </div>

                            {isSearchOpen && (
                                <div className="d-lg-none mt-3">
                                    <div className="nav-input-box w-100 d-flex align-items-center px-3 py-2 rounded" style={{ backgroundColor: '#222839' }}>
                                        <input type="text" className='form-control form-control-sm border-0 bg-transparent text-white w-100 shadow-none' placeholder='Search destinations...' autoFocus />
                                        <i className="bi bi-x-lg text-white ms-2" onClick={toggleSearch}></i>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Overlay background when menu is open */}
            {isMenuOpen && <div className="menu-overlay d-lg-none" onClick={closeMenu}></div>}

            <div className="container container-responsive">
                <div className="row py-0 py-lg-4 w-100 align-items-center">
                    <div className="col-12 col-lg-9">
                        {/* Modified: Added side-menu class and removed default Bootstrap collapse behavior */}
                        <div className={`side-menu ${isMenuOpen ? 'open' : ''} d-lg-block`} id='primaryNav'>
                            <div className="d-lg-none d-flex justify-content-end p-3">
                                <i className="bi bi-x-lg text-white fs-2" onClick={closeMenu}></i>
                            </div>
                            <ul className="nav-menu list-unstyled m-0 d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-4 gap-xl-5 gap-lg-4 p-4 p-lg-0">
                                <li className="nav-items"><Link to="/" className='nav-link text-white' onClick={closeMenu}>Home</Link></li>
                                <li className="nav-items"><Link to="/Tours" className='nav-link text-white' onClick={closeMenu}>Tours</Link></li>
                                <li className="nav-items"><Link to="/Hotels" className='nav-link text-white' onClick={closeMenu}>Hotels</Link></li>
                                <li className="nav-items"><Link to="/Transports" className='nav-link text-white' onClick={closeMenu}>Transports</Link></li>
                                <li className="nav-items"><Link to="/Restaurants" className='nav-link text-white' onClick={closeMenu}>Restaurants</Link></li>
                                <li className="nav-items"><Link to="/About" className='nav-link text-white' onClick={closeMenu}>About</Link></li>
                                <li className="nav-items"><Link to="/Blog" className='nav-link text-white' onClick={closeMenu}>News</Link></li>
                                <li className="nav-items"><Link to="/Contact" className='nav-link text-white' onClick={closeMenu}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-lg-3 mt-3 mt-lg-0 d-none d-lg-block">
                        <div className="nav-input-box w-100 d-flex align-items-center justify-content-start gap-2">
                            <i className="bi bi-search text-white"></i>
                            <input type="text" className='form-control form-control-sm w-100' placeholder='Destinations, Attraction' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;