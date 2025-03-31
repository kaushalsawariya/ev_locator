const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    address: String,
    availableChargers: Number,
    chargingTypes: [String],
    operatingHours: String,
    price: String
});

// Create a geospatial index for location-based queries
stationSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Station', stationSchema);
