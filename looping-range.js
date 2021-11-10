function range(start, end, step) {
  const numArray = [];

  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return numArray;
  }
  
  numArray.push(start);

  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] < end) {
      numArray.push(start += step);
    } else if (numArray[i] > end) {
      numArray.pop();
    }
  }
  return numArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));