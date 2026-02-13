import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Index from './Components/Pages/Index';
import TourDetail from './Components/Pages/TourDetail';
import Cart from './Components/Pages/Cart';
import ConfirmYourBooking from './Components/Pages/ConfirmYourBooking';
import PaymentPage from './Components/Pages/PaymentPage';
import BookingConfirmation from './Components/Pages/Tour_Booking_Summery';
import Tours from './Components/Pages/Tours';
import Hotels from './Components/Pages/Hotels';
import Transports from './Components/Pages/Transports';
import Restaurants from './Components/Pages/Restaurants';
import About from './Components/Pages/About';
import BlogSection from './Components/Pages/Blog';
import ContactSection from './Components/Pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Tours" element={<Tours />} />
          <Route path="/TourDetail/:id" element={<TourDetail />} />
          <Route path="/Hotels" element={<Hotels />} />
          <Route path="/Transports" element={<Transports />} />
          <Route path="/Restaurants" element={<Restaurants />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<BlogSection />} />
          <Route path="/Contact" element={<ContactSection />} />
          
          {/* Updated Checkout Flow */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<ConfirmYourBooking />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />

        </Routes>
        <Footer />
      </Router>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;