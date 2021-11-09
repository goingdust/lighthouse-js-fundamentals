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

