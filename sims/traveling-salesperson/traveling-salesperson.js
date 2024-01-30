// https://editor.p5js.org/JeromePaddick/sketches/eTQKfIVzC
// Jerome Paddick

// Uses a simple lexicographic algorithm to create a list of all possible paths between nodes in order to brute force the solution to the shortest (and longest) path 
// The system is masively limited by the framerate of draw(), so i added a showOutputs variable which allows the calculations to be done silently
// improvements -> 
//  -> get rid of reverse paths (DONE)
//  -> filter out pairs of most distant nodes 
// convert lexicographioc ordering function to generator to reduce memory overhead

var noNodes = 6;
var showOutputs = true;
var framerate = 144
var onlyShortest = false;
var onlyLongest = false;

var lexicographicNodeList = []
var nodes = []
var current = 0;
var clrI = 0;
var bestPath;
var bestPathLength;
var worstPath;
var worstPathLength;
var finished = false;
var winHeight;

function setup() {
 
  if (noNodes > 10){
    noLoop();
    print("Number of nodes must be 10 or less")
    return false
  }
  
  frameRate(framerate)
  
  if (windowWidth > windowHeight){
    winHeight = windowHeight
  } else { winHeight = windowWidth }
  createCanvas(windowWidth, winHeight);
  
  lexicographicOrdering(noNodes)
  print("fact", factorial(noNodes))
  print("lexLen", lexicographicNodeList.length)
  
  for (let i = 0; i < noNodes; i++) {
    let v = createVector(
      random(50, width - 50),
      random(50, height - 50))
    nodes.push(v)
  }
  
  if (showOutputs == false) {
    lexicographicNodeList.forEach(path => {
      let pathLength = getPathLength(path);
    if (bestPathLength == undefined || pathLength < bestPathLength) {
        bestPath = path;
        bestPathLength = pathLength;
      }
      if (worstPath == undefined || pathLength > worstPathLength){
        worstPath = path;
        worstPathPathLength = pathLength;
      }
    })
  }
  
}

function draw() {
  if (noNodes > 10){
    noLoop();
    return false
  }
  
  background(0);
  fill(255)
  stroke(255)
  strokeWeight(1)
  
  nodes.forEach(node => {
    ellipse(node.x, node.y, 10)
  })

  currentPath = lexicographicNodeList[current];
  let max = lexicographicNodeList.length

  if (showOutputs == true && current < max) {
    text((current / max * 100).toFixed(2) + "%", 20, 20)
    let n = currentPath.length;
    let pathLength = getPathLength(currentPath);
    if (bestPathLength == undefined || pathLength < bestPathLength) {
      print("New Best: ", pathLength.toFixed(2), currentPath)
      bestPathLength = pathLength;
      bestPath = currentPath
    }
    if (worstPathLength == undefined || pathLength > worstPathLength) {
      print("New Worst: ", pathLength.toFixed(2), currentPath)
      worstPathLength = pathLength;
      worstPath = currentPath
    }
    drawPath(currentPath)
    current += 1
  } else {
    finished = true;
  }
  
  strokeWeight(3)
  
  if (finished == false) {
    stroke(255, 0, 255)
  } else {
    stroke(0, 255, 0)
  }
  
  if (onlyShortest == false) {
    drawPath(bestPath)
  } else {
    strokeWeight(2)
    stroke(255, 0, 0)
    drawPath(worstPath)
  }
    
  if (finished == true && onlyLongest == false) {
    strokeWeight(1)
    stroke(255, 0, 0)
    drawPath(worstPath)
  }
}

function drawPath(path) {
  let n = path.length;
  for (let i = 0; i < n - 1; i++) {
    let node1 = nodes[path[i]];
    let node2 = nodes[path[i + 1]];
    line(node1.x, node1.y, node2.x, node2.y)
  }
}

function getPathLength(path) {
  let n = path.length;
  let pathLength = 0;
  for (let i = 0; i < n - 1; i++) {
    let node1 = nodes[path[i]];
    let node2 = nodes[path[i + 1]];
    pathLength += node1.copy().sub(node2).mag()
  }
  return pathLength
}

function lexicographicOrdering(noNodes) {
  
  // create an array of increasing integers of length noNodes
  let arr = [...Array(noNodes).keys()]
  // theoretical length of output
  let max = factorial(noNodes)
  let itercount = 0;
  let last = arr.slice().pop();
  let arrTemp;
  let arrComp;
  let slice;
  let revSlice;
  let iHigh;
  let jHigh
  
  lexicographicNodeList.push(arr)
  
  while (itercount < max) {
    
    // paths are reversible, so once the last item of the array is in first position,
    // we have already covered all permutations previously
    if (arr[0]==last){
      break
    }
    
    // Implements lexicographic ordering algo
    // x/y => position
    // P(x) => value at position 
    // 1. find largest x such that P(x) < P(x+1), if none then you're finished
    iHigh = -1
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        iHigh = i;
      }
    }
    if (iHigh == -1) {
      return
    }

    // 2. find largest y such that  P(x)<P(y)
    let jHigh;
    for (let j = iHigh + 1; j < arr.length; j++) {
      if (arr[j] > arr[iHigh]) {
        jHigh = j;
      }
    }
    // 3. swap P(x) & P(y)
    // create shallow copy of array -> only copies first level of objects

    arrTemp = [...arr]
    swap(arrTemp, iHigh, jHigh)

    slice = arrTemp.slice(iHigh + 1)
    revSlice = rev(slice)

    arrTemp.splice(iHigh + 1, arrTemp.length - iHigh + 1, ...revSlice)

    arr = arrTemp
    
    // if first value is larger that last value, then we have already covered the 
    //reverse path, so we can exclude it from the array
    if (arr[0] > arr.slice().pop()) {
      continue
    }
      
    lexicographicNodeList.push(arr)
      
    itercount += 1
      
  }
}

function rev(arr) {
  let revArr = []
  while (arr.length > 0) {
    revArr.push(arr.pop())
  }
  return revArr
}

function swap(arr, swap1, swap2) {
  let temp1 = arr[swap1];
  arr[swap1] = arr[swap2];
  arr[swap2] = temp1;
}


function factorial(num) {
  var savedFactorialList = [1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800]
  return savedFactorialList[num - 1]

}