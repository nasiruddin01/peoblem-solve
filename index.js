const earthRadius = 6371;

// Calculate the distance between two coordinates using the Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const toRadians = (degrees) => (degrees * Math.PI) / 180;
  const deltaLat = toRadians(lat2 - lat1);
  const deltaLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(deltaLon / 2) *
      Math.sin(deltaLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadius * c;
}

// Define two sets of coordinates
const location1 = {
  latitude: 0, // Equator
  longitude: 0, // Prime meridian
};

const location2 = {
  latitude: 0, // Equator
  longitude: 1, // One degree east
};

// Calculate the distance between the two locations
const distance = calculateDistance(
  location1.latitude,
  location1.longitude,
  location2.latitude,
  location2.longitude
);

// Output the distance
console.log(
  `The distance between the two points is approximately ${distance} kilometers.`
);
