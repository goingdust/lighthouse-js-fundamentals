const udaciFamily = ['Julia', 'James', 'Dusty'];

console.log(udaciFamily);

// Building the Crew

const crew = [captain, second, pilot, companion, mercenary, mechanic];

console.log(crew);

// The Price is Right

const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
prices[0] = 1.50;
prices[2] = 80.78;
prices[6] = 2.59;

console.log(prices);

// Colors of the rainbow

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

rainbow.splice(2, 1, 'Yellow', 'Green');
rainbow.splice(5, 0, 'Purple');

console.log(rainbow);

// Quidditch cup

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers(team) {
  if (team[6] !== undefined) {
    return true;
  } else {
    return false;
  }
}

console.log(hasEnoughPlayers(team));

// Joining the crew

const crew = [captain, second, pilot, companion, mercenary, mechanic];

crew.push(doctor, sister, shepherd);

console.log(crew);

// Another type of loop
// Use the array's forEach() method to loop over the following array and 
// add 100 to each of the values if the value is divisible by 3. 

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139];

test.forEach(function(num, index) {
  if (num % 3 === 0) {
    return test[index] += 100;
  }
});

console.log(test);

// I got bills

var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

const totals = bills.map(function(bill) {
  bill += (bill * 0.15);
  bill = Number(bill.toFixed(2));
  return bill;
});

console.log(totals);

// 2D donut arrays

var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];

for (var row = 0; row < donutBox.length; row++) {
  for (var column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}

// Nested numbers

var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (let row = 0; row < numbers.length; row++) {
  for (let column = 0; column < numbers[row].length; column++) {
    if (numbers[row][column] % 2 === 0) {
      numbers[row][column] = 'even';
    } else {
      numbers[row][column] = 'odd';
    }
  }
}

console.log(numbers);