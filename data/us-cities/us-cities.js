// read a list of cities from a JSON file
// Create a map with labeled circles
let cityData;
let numCities;
let hm = 30; // header margin
let canvasWidth = 600;
let canvasHeight = 400;
let minLat;
let maxLat;
let minLong;
let maxLong;

function preload() {
  // Must be in the same directory as the sketch
  cities = loadJSON('us-cities.json');
}

function setup() {
  const canvas = createCanvas(canvasWidth, canvasHeight);
  var mainElement = document.querySelector('main');
  canvas.parent(mainElement);
  // we have to get the keys from the object to find the length
  numCities = Object.keys(cities).length;
  
  // we need these to calculate the range maps
  minLat = findMinMaxValue(cities, "Latitude", "min");
  maxLat = findMinMaxValue(cities, "Latitude", "max");
  minLong = findMinMaxValue(cities, "Longitude", "min");
  maxLong = findMinMaxValue(cities, "Longitude", "max");
  
  print('Number Cities:' + numCities);
  print(minLat, maxLat, minLong, maxLong);
  noLoop(); // No need to loop since we're just logging data
}

function draw() {
  background(220);

  for (let i=0; i<numCities; i++) {
      // Map latitude and longitude to canvas coordinates
      // left margin is 4, right margin is 3
      let x = map(cities[i].Longitude, minLong-4, maxLong+3, 0, canvasWidth);
      // top at bottom margins are both 2
      let y = map(cities[i].Latitude, maxLat+2, minLat-2, 0, canvasHeight);

      let size = sqrt(cities[i].Population) / 100; // Adjust this scaling factor

      // Draw the circle for the city
      // red, green blue and transparency
      fill(100, 100, 250, 100);
      circle(x, y, size);
      // fill('white');
      // noStroke();
      // rect(x,y,10,10);

      // Draw the city name
      fill(0);
      textAlign(CENTER,CENTER);
      text(cities[i]["Name"], x, y); // Offset text for visibility
  }

}

// We have an Object, not an Array
function findMinMaxValue(data, property, metric) {
    let values = [];

    if (Array.isArray(data)) {
        // If data is an array, use it directly
        values = data.map(item => item[property]);
    } else if (typeof data === 'object') {
        // If data is an object, iterate through its properties
        for (let key in data) {
            if (data[key][property] !== undefined) {
                values.push(data[key][property]);
            }
        }
    }

    if (values.length === 0) {
        return null;
    }

    return metric === "min" ? Math.min(...values) : Math.max(...values);
}