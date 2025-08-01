import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
  const { 
    cartItems, 
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity,
    subtotal,
    tax,
    total
  } = useContext(CartContext);
  
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/checkout');
    } else {
      toast.error("Your cart is empty.");
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="container ">
          <ToastContainer />
          <div className="cartpage-header my-4">
            <h2 className="cartpage-title">Tour Cart Summary</h2>
            <p className="cartpage-breadcrumb">Home → Your Cart </p>
            <div className="cartpage-steps d-flex justify-content-center gap-2">
              <span className='step step-active'>1</span>
              <span className='step'>2</span>
              <span className='step'>3</span>
              <span className='step'>✓</span>
            </div>
          </div>

          <div className="row cartpage-content">
            <div className="col-lg-8 cartpage-cart text-white">
              <h4>Your Cart Details</h4>

              {cartItems.length === 0 ? (
                <div className="cart-empty text-center p-4 bg-dark text-light rounded">
                  <i className="ri-shopping-cart-2-line fs-1"></i>
                  <h5>Your Cart is currently empty</h5>
                  <p>Looks like you haven't added any bookings yet.</p>
                </div>
              ) : (
                <div className="table-responsive">
                  <table className='table table-dark table-hover cart-table'>
                    <thead className='table-light'>
                      <tr>
                        <th>Package</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.id}>
                          <td className='d-flex align-items-center gap-3'>
                            <img
                              src={item.image}
                              alt={item.title}
                              width="80"
                              className='rounded'
                            />
                            <div>
                              <strong>{item.title}</strong>
                              <br />
                              <small className='text-capitalize'>{item.type}</small>
                            </div>
                          </td>
                          <td>
                            <div className='d-flex align-items-center gap-2'>
                              <button
                                className='btn btn-sm btn-light'
                                onClick={() => decreaseQuantity(item.id)}
                              >
                                -
                              </button>
                              <span>{item.quantity}</span>
                              <button
                                className='btn btn-sm btn-light'
                                onClick={() => increaseQuantity(item.id)}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td>
                            ${(item.price * item.quantity).toFixed(2)}
                          </td>
                          <td>
                            <i
                              className='ri-delete-bin-line text-danger fs-5'
                              role='button'
                              title='Remove item'
                              onClick={() => {
                                removeFromCart(item.id);
                                toast.error(`${item.title} removed from cart.`);
                              }}
                            ></i>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="p-3 bg-dark text-light rounded">
                <h5>
                  Order Summary
                </h5>
                <div className="border-top pt-2 mt-2">
                  <p>
                    Sub Total
                    <span className='float-end'>${subtotal.toFixed(2)}</span>
                  </p>
                  <p>
                    VAT (5%)
                    <span className='float-end'>${tax.toFixed(2)}</span>
                  </p>
                  <hr />
                  <h6>
                    Grand Total
                    <span className='float-end text-warning'>${total.toFixed(2)}</span>
                  </h6>
                </div>
                <button
                  className="btn next-btn w-100 fw-bold mt-3"
                  disabled={cartItems.length === 0}
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </button>
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
    </>
  );
}

export default Cart;