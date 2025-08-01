import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import InvoiceDocument from './InvoiceDocument'; // Make sure this path is correct

function BookingConfirmation() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Get confirmation details from the previous page (payment)
  const { confirmationDetails } = state || {};

  if (!confirmationDetails) {
    // Handle case where user lands here directly
    return (
      <div className="bg-dark text-white py-5 text-center">
        <div className="container">
          <h3 className="text-danger">Invalid Access</h3>
          <p>Booking confirmation details are missing. Please complete your booking process first.</p>
          <button onClick={() => navigate('/')} className="btn btn-warning">Return to Home</button>
        </div>
      </div>
    );
  }

  // Destructure for easier access
  const {
    checkIn,
    items,
    subtotal,
    tax,
    total,
    fullName,
    email,
    phone
  } = confirmationDetails;
  
  const tourLocation = items.length > 0 ? items[0].location : 'Multiple Locations';

  const handleDownloadInvoice = async () => {
    // Data for the PDF document
    const invoiceData = {
      date: new Date().toLocaleDateString(),
      location: tourLocation,
      subTotal: parseFloat(subtotal),
      tax: parseFloat(tax),
      total: parseFloat(total),
      items: items, // Pass items to be rendered in the invoice
      customer: {
        name: fullName,
        email: email,
        phone: phone,
      }
      // You can add more data from confirmationDetails as needed
    };
    
    const blob = await pdf(<InvoiceDocument data={invoiceData} />).toBlob();
    saveAs(blob, `flynest-invoice-${new Date().getTime()}.pdf`);
  };

  return (
    <>
      <div className="bg-dark text-white py-5">
        <div className="container">
          <div className="cartpage-steps d-flex justify-content-center gap-2 mb-4">
              <span className='step'>1</span>
              <span className='step'>2</span>
              <span className='step'>3</span>
              <span className='step step-active'>✓</span>
          </div>
          <div className="row gx-5 align-items-start">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h3 className="text-warning mb-3">Booking Complete!</h3>
              <p className="text-light mb-4">
                Thank you, <strong>{fullName}</strong>, for booking with Flynest! Your trip is confirmed. A confirmation email has been sent to <strong>{email}</strong>.
              </p>
              <div className="bg-section-light p-4 rounded shadow-sm">
                <h5 className="text-white mb-3">Final Booking Summary</h5>
                 <div className="d-flex justify-content-between py-2 border-bottom border-secondary"><span>Booking for</span><span>{fullName}</span></div>
                 <div className="d-flex justify-content-between py-2 border-bottom border-secondary"><span>Check-in Date</span><span>{checkIn}</span></div>
                 <div className="d-flex justify-content-between py-2 border-bottom border-secondary"><span>Location</span><span>{tourLocation}</span></div>

                <h6 className='mt-4'>Items:</h6>
                {items.map(item => (
                  <div className="d-flex justify-content-between py-1" key={item.id}>
                    <span className='small'>{item.title} (x{item.quantity})</span>
                    <span className='small'>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <hr/>
                 <div className="d-flex justify-content-between py-2 border-bottom border-secondary"><span>Sub Total</span><span>${subtotal}</span></div>
                 <div className="d-flex justify-content-between py-2 border-bottom border-secondary"><span>VAT Tax</span><span>${tax}</span></div>

                <div className="d-flex justify-content-between py-3 mt-3 fs-5">
                  <strong>Total Paid</strong>
                  <strong className="text-warning">${total}</strong>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="bg-section-light p-4 rounded shadow-sm text-white border border-secondary">
                <h5 className="mb-3">Get Your Invoice</h5>
                <p className="small text-light">
                  Click the button below to generate a PDF invoice with all booking details.
                </p>
                <button
                  className="btn btn-warning w-100"
                  onClick={handleDownloadInvoice}
                >
                  Download Your Invoice
                </button>
                <hr/>
                <p className="small text-light">Need help? Contact us:</p>
                <ul className="list-unstyled small text-light mt-3 mb-0">
                  <li><i className="ri-phone-line me-2 text-primary"></i>+0945-1324-253524</li>
                  <li><i className="ri-mail-line me-2 text-primary"></i>example@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingConfirmation;