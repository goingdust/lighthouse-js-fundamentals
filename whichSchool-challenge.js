const whichSchool = function (age) {
  if (age < 13) {
    return 'Elementary School';
  } else if (age >= 13 && age <= 18) {
    return 'Secondary School';
  } else if (age > 18) {
    return 'Lighthouse Labs';
  }
}

console.log(whichSchool(100));

// JuliaJames

var x = 1;

while (x <= 20) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log('JuliaJames');
  } else if (x % 3 === 0) {
    console.log('Julia');
  } else if (x % 5 === 0) {
    console.log('James');
  } else {
    console.log(x);
  }
  x++;
}

// 99 bottles of juice

var num = 99;

while (num >= 1) {
  if (num > 2) {
    console.log(`${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around... ${num - 1} bottles of juice on the wall!`);
  } else if (num === 2) {
    console.log(`${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around... ${num - 1} bottle of juice on the wall!`);
  } else if (num === 1) {
    console.log(`${num} bottle of juice on the wall! ${num} bottle of juice! Take one down, pass it around... ${num - 1} bottles of juice on the wall!`);
  }
  num--;
}

// Countdown, liftoff!

var secs = 60;

while (secs >= 0) {
  if (secs === 50) {
    console.log("Orbiter transfers from ground to internal power");
  } else if (secs === 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
  } else if (secs === 16) {
    console.log("Activate launch pad sound suppression system");
  } else if (secs === 10) {
    console.log("Activate main engine hydrogen burnoff system");
  } else if (secs === 6) {
    console.log("Main engine start");
  } else if (secs === 0) {
    console.log("Solid rocket booster ignition and liftoff!");
  } else {
    console.log(`T-${secs} seconds`);
  }
  secs--;
}

// Rewrite while loop as for loop

var x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}

for (var x = 9; x >= 1; x -= 1) {
  console.log('hello ' + x);
}

// Fix the error

for (x < 10; x++) {
  console.log(x);
}

for (var x = 5; x < 10; x++) {
  console.log(x);
}

// Fix the error 2

for (var k = 0; k < 200; k++) {
  console.log(k);
}

// Factorials!
var solution = 1;

for (var x = 1; x <= 12; x++) {
  solution *= x;
}

console.log(solution);

// Find my seat

for (let row = 0; row <= 25; row++) {
  for (let seat = 0; seat <= 99; seat++) {
    console.log(`${row}-${seat}`);
  }
}
