var balance = 325.00;
var checkBalance = true;
var isActive = false;

if (checkBalance) {
  if (isActive && balance > 0) {
    console.log('Your balance is $' + balance.toFixed(2) + '.');
  } else {
    if (!isActive) {
      console.log('Your account is no longer active.');
    } else {
      if (balance === 0) {
        console.log('Your account is empty.');
      } else {
        console.log('Your balance is negative. Please contact bank.');
      }
    }
  }
} else {
  console.log('Thank you. Have a nice day!');
}

// Ice Cream

var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";

if ((flavor === 'vanilla' || flavor === 'chocolate') && (vessel === 'cone' || vessel === 'bowl') && (toppings === 'sprinkles' || toppings === 'peanuts')) {
  console.log('I\'d like two scoops of ' + flavor + ' ice cream in a ' + vessel + ' with ' + toppings + '.');
}

// What do I wear?

var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

if (shirtWidth >= 18 && shirtWidth < 20 && shirtLength >= 28 && shirtLength < 29 && shirtSleeve >= 8.13 && shirtSleeve < 8.38) {
  console.log('S');
} else if (shirtWidth >= 20 && shirtWidth < 22 && shirtLength >= 29 && shirtLength < 30 && shirtSleeve >= 8.38 && shirtSleeve < 8.63) {
  console.log('M');
} else if (shirtWidth >= 22 && shirtWidth < 24 && shirtLength >= 30 && shirtLength < 31 && shirtSleeve >= 8.63 && shirtSleeve < 8.88) {
  console.log('L');
} else if (shirtWidth >= 24 && shirtWidth < 26 && shirtLength >= 31 && shirtLength < 33 && shirtSleeve >= 8.88 && shirtSleeve < 9.63) {
  console.log('XL');
} else if (shirtWidth >= 26 && shirtWidth < 28 && shirtLength >= 33 && shirtLength < 34 && shirtSleeve >= 9.63 && shirtSleeve < 10.13) {
  console.log('2XL');
} else if (shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13) {
  console.log('3XL');
} else {
  console.log('NA');
}

// Navigating the food chain

var eatsPlants = false;
var eatsAnimals = true;

var category = eatsPlants ? (eatsAnimals ? 'omnivore' : 'herbivore') : (eatsAnimals ? 'carnivore' : 'undefined');

console.log(category);

// Back to school

// change the value of `education` to test your code
var education = 'no high school diploma';

// set the value of this based on a person's education
var salary = 0;

switch (education) {
  case 'no high school diploma':
    salary = 25636;
    break;
  case 'a high school diploma':
    salary = 35256;
    break;
  case 'an Associate\'s degree':
    salary = 41496;
    break;
  case 'a Bachelor\'s degree':
    salary = 59124;
    break;
  case 'a Master\'s degree':
    salary = 69732;
    break;
  case 'a Professional degree':
    salary = 89960;
    break;
  case 'a Doctoral degree':
    salary = 84396;
}

console.log('In 2015, a person with ' + education + ' earned an average of $' + salary.toLocaleString('en-US') + '/year.');