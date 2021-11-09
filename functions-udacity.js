// declares the sayHello function
function sayHello() {
  var message = "Hello!"
  return message; // returns value instead of printing it
}

// function returns "Hello!" and console.log prints the return value
console.log(sayHello());

// x and y are parameters
function findAverage(x, y) {
  var answer = (x + y) / 2;
  return answer;
}
// 5 and 9 are arguments
var avg = findAverage(5, 9);

// Laugh It Off

function laugh() {
  return 'hahahahahahahahahaha!';
}
console.log(laugh());

// Laugh It Off 2

function laugh(num) {
  let sound = '';
  for (let i = 0; i < num; i++) {
    sound = sound + 'ha';
  }
  return sound = sound + '!';
}

console.log(laugh(3));

// Build a triangle

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

function buildTriangle(length) {
  var tower = '';

  for (var lineNumber = 1; lineNumber <= length; lineNumber++) {
    tower = tower + makeLine(lineNumber);
  }
  return tower;
}

console.log(buildTriangle(10));

// Laugh

var laugh = function(num) {
  sound = '';
  for (let i = 0; i < num; i++) {
    sound += 'ha';
  }
  return sound += '!';
}

// Cry

var cry = function weep() {
  return 'boohoo!';
}

console.log(cry());

// Inline

function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function laugh(num) {
  let sound = '';
  for (let i = 0; i < num; i++) {
    sound += 'ha';
  }
  return sound += '!';
});