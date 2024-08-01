const express = require('express');
const router = express.Router();
const { fetchLocations, fetchLocationsWithinRadius } = require('../controllers/locationController');
const cacheMiddleware = require('../middlewares/cacheMiddleware');

router.get('/locations', cacheMiddleware, fetchLocations);
router.get('/locations-radius', fetchLocationsWithinRadius);

module.exports = router;
