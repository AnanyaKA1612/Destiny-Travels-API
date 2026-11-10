const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    country: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    rating: {
        type: Number,
        default: 0
    },

    description: {
        type: String
    }
});

const Destination = mongoose.model("Destination", destinationSchema);

module.exports = Destination;