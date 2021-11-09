for (let n = 100; n <= 200; n++) {
  if (n % 3 === 0 && n % 4 === 0) {
    console.log('LoopyLighthouse');
  } else if (n % 3 === 0) {
    console.log('Loopy');
  } else if (n % 4 === 0) {
    console.log('Lighthouse');
  } else {
    console.log(n);
  }
}

// Looping over arrays

const amounts = [61.00, 52.25, 112.99, 5.00]; 
const total = 0;

for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);
