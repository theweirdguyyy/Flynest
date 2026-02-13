const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// 1. Load Environment Variables
require('dotenv').config(); 

const app = express();

// 2. Middleware
app.use(cors());
app.use(express.json());

// 3. Database Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ MongoDB Connected Successfully!');
    } catch (err) {
        console.error('❌ MongoDB Connection Failed:', err.message);
        process.exit(1);
    }
};

connectDB();

//ggg

// --- THE MISSING PART: LINK YOUR ROUTES ---
// This imports the file you created in Phase 5
const tourRoutes = require('./routes/tourRoutes'); 

// This tells the server: "Any request starting with /api/tours should use tourRoutes"
app.use('/api/tours', tourRoutes); 
// ------------------------------------------

// Base Route for testing the server itself
app.get('/', (req, res) => {
    res.send('Flynest Server is Running and Connected to MongoDB!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));