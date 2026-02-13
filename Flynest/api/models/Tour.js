const mongoose = require('mongoose');

const TourSchema = new mongoose.Schema({
    id: Number,
  title: String,
  location: String,
  duration: String, // e.g., "3 Days 2 Nights"
  persons: String,  // e.g., "2 Persons"
  price: Number,
  rating: Number,
  reviews: Number,
  tag: String,
  image: String,
  description: String,
  included: [String],
  excluded: [String],
  tourPlan: [
    {
      day: String,
      title: String,
      description: String,
      highlights: [String]
    }
  ],
  policy: String,
  createdAt: Date
});

module.exports = mongoose.model('Tour', TourSchema);