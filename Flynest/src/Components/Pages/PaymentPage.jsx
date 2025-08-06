import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { pdf } from '@react-pdf/renderer';
import InvoiceDocument from './InvoiceDocument';

function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get booking details from the previous page
  const { bookingDetails } = location.state || {};

  if (!bookingDetails) {
    // Handle case where user lands here directly
    return (
        <div className="payment-page-wrapper container text-center">
            <h2 className="text-warning">Error</h2>
            <p>No booking details found. Please start from the cart.</p>
            <button onClick={() => navigate('/cart')} className="btn btn-warning">Go to Cart</button>
        </div>
    );
  }
  
  const [paymentData, setPaymentData] = useState({
      cardName: '',
      cardNumber: '',
      expiryDate: '',
      ccv: '',
      agreedToTerms: false
  });

  const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;
      setPaymentData(prev => ({
          ...prev,
          [name]: type === 'checkbox' ? checked : value
      }));
  };

  const handlePayment = async () => {
    if (!paymentData.cardName || !paymentData.cardNumber || !paymentData.expiryDate || !paymentData.ccv) {
        alert('Please fill in all card details.');
        return;
    }
    if (!paymentData.agreedToTerms) {
        alert('You must agree to the Terms and Privacy Policy.');
        return;
    }

    // Combine booking details with payment info and navigate to confirmation
    const finalConfirmationData = {
        ...bookingDetails,
        paymentMethod: 'Card' // or derive from form
    };

    // Derive invoice props from booking details
    const invoiceProps = {
      date: new Date().toLocaleDateString(),
      location: bookingDetails?.location || '',
      adults:
        Number(
          bookingDetails?.adults ??
          bookingDetails?.adult ??
          bookingDetails?.numberOfAdults ??
          bookingDetails?.guests?.adults ??
          (Array.isArray(bookingDetails?.items)
            ? bookingDetails.items.reduce((sum, it) => sum + Number(it?.adults ?? it?.adult ?? 0), 0)
            : undefined)
        ) || 0,
      children:
        Number(
          bookingDetails?.children ??
          bookingDetails?.child ??
          bookingDetails?.numberOfChildren ??
          bookingDetails?.guests?.children ??
          (Array.isArray(bookingDetails?.items)
            ? bookingDetails.items.reduce((sum, it) => sum + Number(it?.children ?? it?.child ?? 0), 0)
            : undefined)
        ) || 0,
      tourGuide: Number(bookingDetails?.tourGuide) || 0,
      dinner: Number(bookingDetails?.dinner) || 0,
      tax: Number(bookingDetails?.tax) || 0,
      subTotal: Number(bookingDetails?.subtotal) || 0,
      total: Number(bookingDetails?.total) || 0,
      transport: bookingDetails?.transport || null,
      restaurant: bookingDetails?.restaurant || null,
      hotel: bookingDetails?.hotel || null
    };

    try {
      // Generate PDF blob and trigger download
      const blob = await pdf(<InvoiceDocument {...invoiceProps} />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'invoice.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error('Failed to generate invoice PDF', e);
      // Continue navigation even if PDF generation fails
    }
    
    navigate('/booking-confirmation', { state: { confirmationDetails: finalConfirmationData }});
  };

  return (
    <div className="payment-page-wrapper ">
      <div className="container payment-pagepage-container">
        <div className="cartpage-header my-4 ">
          <h2 className="cartpage-title">Place Your Order</h2>
          <p className="cartpage-breadcrumb">Home → Cart → Checkout → Payment</p>
          <div className="cartpage-steps d-flex justify-content-center gap-2">
            <span className='step'>1</span>
            <span className='step'>2</span>
            <span className='step step-active'>3</span>
            <span className='step'>✓</span>
          </div>
        </div>

        <div className="payment-page bg-dark text-white ">
          <div className="container payment-page-container">
            <div className="row payment-page">
              <div className="col-lg-8 cartpage-cart">
                <div className="p-4 rounded shadow-sm bg-section-light">
                  <h4 className="text-warning mb-4">Payment Details</h4>
                  <div className="row">
                    <div className="col-md-7">
                      <div className="p-3 bg-dark rounded shadow">
                        <h5 className="text-white mb-3">Card Payment</h5>
                        <div className="mb-3">
                          <label className="form-label text-light">Name On Card</label>
                          <input type="text" name="cardName" value={paymentData.cardName} onChange={handleInputChange} className="form-control bg-dark text-white border-secondary" placeholder="Mr. Alex" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label text-light">Card Number</label>
                          <input type="text" name="cardNumber" value={paymentData.cardNumber} onChange={handleInputChange} className="form-control bg-dark text-white border-secondary" placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="row g-2 mb-3">
                          <div className="col-md-6">
                            <label className="form-label text-light">Expiration Date</label>
                            <input type="text" name="expiryDate" value={paymentData.expiryDate} onChange={handleInputChange} className="form-control bg-dark text-white border-secondary" placeholder="MM/YY" />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label text-light">CCV</label>
                            <input type="text" name="ccv" value={paymentData.ccv} onChange={handleInputChange} className="form-control bg-dark text-white border-secondary" placeholder="123" />
                          </div>
                        </div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" name="agreedToTerms" checked={paymentData.agreedToTerms} onChange={handleInputChange} type="checkbox" id="termsCheck" />
                          <label className="form-check-label text-light" htmlFor="termsCheck">
                            I agree to the Terms and Privacy Policy
                          </label>
                        </div>
                        <button className="btn btn-warning w-100 mb-3" onClick={handlePayment}>Pay Now</button>
                      </div>
                    </div>
                    <div className="col-md-5 bg-dark rounded mb-3 border border-secondary">
                      <div className="p-3 bg-dark rounded">
                        <h5 className="text-white mb-3">Order Review</h5>
                        <div className="d-flex justify-content-between py-2 border-bottom border-secondary">
                          <span>Sub Total</span>
                          <span>${bookingDetails.subtotal}</span>
                        </div>
                        <div className="d-flex justify-content-between py-2 border-bottom border-secondary">
                         <span>VAT Tax (5%)</span>
                          <span>${bookingDetails.tax}</span> 
                        </div>
                        {bookingDetails.items.map(item => (
                            <div key={item.id} className="d-flex justify-content-between py-2 small">
                                <span>{item.title} (x{item.quantity})</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                        <hr/>
                        <div className="d-flex justify-content-between py-3 fs-5">
                          <strong>Total</strong>
                          <strong className="text-warning">${bookingDetails.total}</strong>
                        </div>
                        <div className="text-white text-center small mt-0">
                          <i className="ri-checkbox-circle-line text-success me-1"></i>
                          Free Cancellation <br />
                          <small>Up to 24 hours in advance</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
