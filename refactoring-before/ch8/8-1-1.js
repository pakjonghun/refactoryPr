//FIXME:네스팅 된 함수, 타임과 거리가 뒤섞여서 구분이 안됨

//NOTE:응집도가 다른 함수들이 네스팅 되어있다.
//순수함수는 바깥으로 뺄 수 있다.

function calculateDistance(points) {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;
}

function radians(degrees) {
  return (degrees * Math.PI) / 180;
}

function distance(p1, p2) {
  // 포뮬라: http://www.movable-type.co.uk/scripts/latlong.html
  const EARTH_RADIUS = 3959; // in miles
  const dLat = radians(p2.lat) - radians(p1.lat);
  const dLon = radians(p2.lon) - radians(p1.lon);
  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.cos(radians(p2.lat)) *
      Math.cos(radians(p1.lat)) *
      Math.pow(Math.sin(dLon / 2), 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS * c;
}

export function trackSummary(points) {
  const time = 10000;
  const distance = calculateDistance(points);
  const pace = time / 60 / distance;
  return {
    time,
    distance,
    pace,
  };
}

const newYork = {
  lat: 40.73061,
  lon: -73.935242,
};

const tokyo = {
  lat: 35.652832,
  lon: 139.839478,
};

const summary = trackSummary([newYork, tokyo]);
console.log(summary);
