const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./models/tour'); // Path to your Tour model
const tours = require('./data/Tours.json'); // Path to the JSON copy

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const importData = async () => {
    try {
        await Tour.deleteMany(); // Clears existing data so you don't get duplicates
        await Tour.insertMany(tours);
        console.log('✅ Data Imported to MongoDB!');
        process.exit();
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
};

importData();