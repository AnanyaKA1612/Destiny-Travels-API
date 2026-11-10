const express = require("express");
const router = express.Router();

const {
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
} = require("../controllers/destinationController");

// CHALLENGE 01: POST
router.post("/add", addDestination);
router.post("/add-many", addMultipleDestinations);

// CHALLENGE 02: GET
router.get("/", getAllDestinations);
router.get("/id/:id", getDestinationById);
router.get("/name/:name", getDestinationByName);

// CHALLENGE 03: PUT
router.put("/id/:id", updateDestinationById);
router.put("/name/:name", updateDestinationByName);

// CHALLENGE 04: ADVANCED QUERIES
router.get("/filter", filterDestinations);
router.get("/sort", sortDestinations);
router.get("/paginate", paginateDestinations);
router.get("/categories", getCategories);
router.get("/count", countDestinations);
// CHALLENGE 05: DELETE
router.delete("/id/:id", deleteDestinationById);
router.delete("/name/:name", deleteDestinationByName);
router.delete("/delete-many", deleteMultipleDestinations);
module.exports = router;