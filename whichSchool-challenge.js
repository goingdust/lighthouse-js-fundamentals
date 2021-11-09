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