const Destination = require("../models/Destination");

// CHALLENGE 01: Add one destination
const addDestination = async (req, res) => {
    try {
        const destination = await Destination.create(req.body);

        res.status(201).json({
            message: "Destination added successfully!",
            data: destination
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Add multiple destinations
const addMultipleDestinations = async (req, res) => {
    try {
        const destinations = await Destination.insertMany(req.body);

        res.status(201).json({
            message: "Multiple destinations added successfully!",
            data: destinations
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// CHALLENGE 02: Retrieve all destinations
const getAllDestinations = async (req, res) => {
    try {
        const destinations = await Destination.find();

        res.status(200).json(destinations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Retrieve destination by ID
const getDestinationById = async (req, res) => {
    try {
        const destination = await Destination.findById(req.params.id);

        if (!destination) {
            return res.status(404).json({
                message: "Destination not found"
            });
        }

        res.status(200).json(destination);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Retrieve destination by name
const getDestinationByName = async (req, res) => {
    try {
        const destination = await Destination.findOne({
            name: req.params.name
        });

        if (!destination) {
            return res.status(404).json({
                message: "Destination not found"
            });
        }

        res.status(200).json(destination);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// CHALLENGE 03: Update destination by ID
const updateDestinationById = async (req, res) => {
    try {
        const destination = await Destination.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!destination) {
            return res.status(404).json({ message: "Destination not found" });
        }

        res.status(200).json({
            message: "Destination updated successfully!",
            data: destination
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update destination by name
const updateDestinationByName = async (req, res) => {
    try {
        const destination = await Destination.findOneAndUpdate(
            { name: req.params.name },
            req.body,
            { new: true, runValidators: true }
        );

        if (!destination) {
            return res.status(404).json({ message: "Destination not found" });
        }

        res.status(200).json({
            message: "Destination updated successfully!",
            data: destination
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// CHALLENGE 04: Filter destinations
const filterDestinations = async (req, res) => {
    try {
        const { category, minPrice, maxPrice } = req.query;

        let filter = {};

        if (category) {
            filter.category = category;
        }

        if (minPrice || maxPrice) {
            filter.price = {};

            if (minPrice) filter.price.$gte = Number(minPrice);
            if (maxPrice) filter.price.$lte = Number(maxPrice);
        }

        const destinations = await Destination.find(filter);
        res.status(200).json(destinations);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Sort destinations
const sortDestinations = async (req, res) => {
    try {
        const sortBy = req.query.sortBy || "price";

        const destinations = await Destination.find().sort({
            [sortBy]: 1
        });

        res.status(200).json(destinations);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Pagination
const paginateDestinations = async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 2;

        const destinations = await Destination.find()
            .skip((page - 1) * limit)
            .limit(limit);

        res.status(200).json(destinations);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get unique categories
const getCategories = async (req, res) => {
    try {
        const categories = await Destination.distinct("category");
        res.status(200).json(categories);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Count destinations
const countDestinations = async (req, res) => {
    try {
        const count = await Destination.countDocuments();
        res.status(200).json({ totalDestinations: count });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// CHALLENGE 05: Delete destination by ID
const deleteDestinationById = async (req, res) => {
    try {
        const destination = await Destination.findByIdAndDelete(req.params.id);

        if (!destination) {
            return res.status(404).json({
                message: "Destination not found"
            });
        }

        res.status(200).json({
            message: "Destination deleted successfully!",
            data: destination
        });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// Delete destination by name
const deleteDestinationByName = async (req, res) => {
    try {
        const destination = await Destination.findOneAndDelete({
            name: req.params.name
        });

        if (!destination) {
            return res.status(404).json({
                message: "Destination not found"
            });
        }

        res.status(200).json({
            message: "Destination deleted successfully!",
            data: destination
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Delete multiple destinations by condition
const deleteMultipleDestinations = async (req, res) => {
    try {
        const result = await Destination.deleteMany(req.body);

        res.status(200).json({
            message: "Destinations deleted successfully!",
            deletedCount: result.deletedCount
        });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// Export all functions
module.exports = {
    addDestination,
    addMultipleDestinations,
    getAllDestinations,
    getDestinationById,
    getDestinationByName,
    updateDestinationById,
    updateDestinationByName,
    filterDestinations,
    sortDestinations,
    paginateDestinations,
    getCategories,
    countDestinations,
    deleteDestinationById,
    deleteDestinationByName,
    deleteMultipleDestinations
};