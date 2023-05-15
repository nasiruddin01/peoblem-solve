// Earth radius in kilometers
const earthRadius = 6371;

// Calculate the distance between two cities using their coordinates
function calculateDistance(city1, city2) {
  const toRadians = (degrees) => (degrees * Math.PI) / 180;
  const { latitude: lat1, longitude: lon1 } = city1;
  const { latitude: lat2, longitude: lon2 } = city2;

  const deltaLat = toRadians(lat2 - lat1);
  const deltaLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(deltaLon / 2) *
      Math.sin(deltaLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = earthRadius * c;
  return distance;
}

// Define the coordinates of two cities
const bogura = {
  name: "Bogura",
  latitude: 24.8484,
  longitude: 89.371,
};

const coxsBazar = {
  name: "Cox's Bazar",
  latitude: 21.4272,
  longitude: 92.0058,
};

// Calculate the distance between Bogura and Cox's Bazar
const distance = calculateDistance(bogura, coxsBazar);

// Output the distance
console.log(
  `The distance between ${bogura.name} and ${
    coxsBazar.name
  } is approximately ${distance.toFixed(2)} kilometers.`
);
