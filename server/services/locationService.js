const { faker } = require('@faker-js/faker');
const { getDistanceFromLatLonInKm } = require('../utils/distance');

const generateRandomLocation = () => ({
  id: faker.string.uuid(),
  latitude: faker.location.latitude(),
  longitude: faker.location.longitude(),
  score: faker.number.int({ min: 0, max: 100 }),
  name: faker.company.name(),
  address: faker.location.streetAddress(),
});

const locations = Array.from({ length: 10000 }, generateRandomLocation);

const getLocations = ({ minScore, maxScore, search, sortBy, sortDirection, page = 1, limit = 10 }) => {
  let filteredLocations = locations;

  // Filtering by score
  if (minScore && maxScore) {
    filteredLocations = filteredLocations.filter(
      location => location.score >= minScore && location.score <= maxScore
    );
  }

  // Search
  if (search) {
    filteredLocations = filteredLocations.filter(location =>
      location.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Sorting
  if (sortBy) {
    filteredLocations.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return sortDirection === 'asc' ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  // Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedLocations = filteredLocations.slice(startIndex, endIndex);

  return {
    total: filteredLocations.length,
    locations: paginatedLocations,
  };
};

const getLocationsWithinRadius = (latitude, longitude, radius = 1000) => {
  const userLat = parseFloat(latitude);
  const userLon = parseFloat(longitude);

  const nearbyLocations = locations.filter(location => {
    const distance = getDistanceFromLatLonInKm(userLat, userLon, location.latitude, location.longitude);
    return distance <= radius;
  });

  return {
    locations: nearbyLocations,
    total: nearbyLocations.length,
  };
};

module.exports = {
  getLocations,
  getLocationsWithinRadius,
};
