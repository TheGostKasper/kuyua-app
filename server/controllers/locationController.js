const { getLocations, getLocationsWithinRadius } = require('../services/locationService');
const { sendSuccessResponse, sendErrorResponse } = require('../utils/response');

const fetchLocations = (req, res) => {
  try {
    const locations = getLocations(req.query);
    sendSuccessResponse(res, locations);
  } catch (error) {
    sendErrorResponse(res, error.message);
  }
};

const fetchLocationsWithinRadius = (req, res) => {
  try {
    const { latitude, longitude } = req.query;
    if (!latitude || !longitude) {
      return sendErrorResponse(res, 'Latitude and longitude are required', 400);
    }
    const locations = getLocationsWithinRadius(latitude, longitude);
    sendSuccessResponse(res, locations);
  } catch (error) {
    sendErrorResponse(res, error.message);
  }
};

module.exports = {
  fetchLocations,
  fetchLocationsWithinRadius,
};
