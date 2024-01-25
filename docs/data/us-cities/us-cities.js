// read a list of cities from a JSON file
let cityData;
let numCities;
let hm = 30; // header margin

function preload() {
  // Must be in the same directory as the sketch
  cities = loadJSON('us-cities.json');
}

function setup() {
  const canvas = createCanvas(320, 440);
  var mainElement = document.querySelector('main');
  canvas.parent(mainElement);
  // we have to get the keys from the object to find the length
  numCities = Object.keys(cities).length;
  print('Number Cities:' + numCities)
  noLoop(); // No need to loop since we're just logging data
}

function draw() {
  background(220);

    for (let city of cities) {
        // Map latitude and longitude to canvas coordinates
        let x = map(city.Latitude, -180, 180, 0, width);
        let y = map(city.Longitude, -90, 90, height, 0);
        let size = sqrt(city.Population) / 1000; // Adjust this scaling factor

        // Draw the circle for the city
        fill(100, 100, 250, 100);
        circle(x, y, size);

        // Draw the city name
        fill(0);
        text(city["Metropolitan Area"], x + 5, y + 5); // Offset text for visibility
    }

}