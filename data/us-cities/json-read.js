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
  text('Rank Name Population Longitude Latitude', 10, 20);
  for (let i=0; i < numCities; i++) {
    text(cities[i].Rank, 10, (i+1)*20+hm);
    text(cities[i].Name, 30, (i+1)*20+hm);
    text(cities[i].Population, 130, (i+1)*20+hm);
    text(cities[i].Longitude, 200, (i+1)*20+hm);
    text(cities[i].Latitude, 260, (i+1)*20+hm);
  }
  
}