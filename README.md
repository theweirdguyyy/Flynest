Project Description


This is a comprehensive travel booking application built with React.js. The project currently focuses on the frontend design and functionality, showcasing a user-friendly interface for booking tours, hotels, restaurants, and transport. The data is managed using local JSON files, simulating a full-stack experience for demonstration purposes.

# FLYNEST - My Travel Booking App

A modern, responsive travel booking application built with React.js. This project showcases a user-friendly frontend for booking tours, hotels, restaurants, and transport. The application features a clean design, a functional shopping cart, and a detailed booking flow.

**Note:** This is a frontend-only project. All data is currently managed using local JSON files, simulating API calls for a full-stack experience.

## Features

- **Tours, Hotels, Restaurants & Transport Listings:** Browse and view details for various booking options.
- **Detailed Pages:** Each booking option (e.g., a specific tour) has a dedicated page with detailed information.
- **Interactive Shopping Cart:** Add and remove items to a persistent cart managed with React Context and Local Storage.
- **Booking Flow:** A multi-step booking process including a confirmation page, payment page, and a booking summary.
- **Invoice Generation:** An `InvoiceDocument` component is available to display booking details in an invoice format.
- **Responsive Design:** The application is built to be accessible and usable on various devices.
- **Context API for State Management:** Uses React's Context API for global state management, making data easily accessible across components without prop drilling.

## Technologies Used

- **React.js:** A JavaScript library for building user interfaces.
- **JavaScript (ES6+):** For all application logic.
- **CSS:** For styling and layout.
- **react-router-dom:** For handling navigation and routing between different pages.
- **react-toastify:** A library for adding toast notifications to provide user feedback.

## Project Structure

The project is organized into a modular component-based structure:
```
src/
├── components/
│   ├── About.jsx
│   ├── Blog.jsx
│   ├── Cart.jsx
│   ├── CartContext.jsx
│   ├── ConfirmYourBooking.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Hotels.jsx
│   ├── Index.jsx
│   ├── InvoiceDocument.jsx
│   ├── Nav.jsx
│   ├── PaymentPage.jsx
│   ├── Restaurents.jsx
│   ├── Tour_Booking_Summery.jsx
│   ├── TourDetail.jsx
│   ├── Tours.jsx
│   └── Transports.jsx
├── data/
│   ├── Hotel.json
│   ├── Restaurant.json
│   ├── Tours.json
│   └── Transport.json
├── App.jsx
├── index.css
└── main.jsx

````
## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need to have Node.js and npm installed on your system.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/theweirdguyyy/Flynest
    cd Flynest
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Application

1.  **Start the development server:**
    ```bash
    npm run dev
    ```
2.  Open your browser and navigate to `http://localhost:5173` (or the port specified by your development server).

## Screenshots

*(Here, are the key screenshots from the project. For example:)*

![Homepage](https://github.com/theweirdguyyy/Flynest/blob/main/Homepage.png)
![Features Tour](https://github.com/theweirdguyyy/Flynest/blob/5b2530f9faa6aa838e10147bc1c80ab925f6cc01/Tours1.png)
![Explore](https://github.com/theweirdguyyy/Flynest/blob/5b2530f9faa6aa838e10147bc1c80ab925f6cc01/Explore.png)
