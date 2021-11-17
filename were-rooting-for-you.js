const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];
const metric = 'redness';

function judgeVegetable(vegetables, metric) {
  let highestScore = 0;
  let submitter = '';
  
  for (let i = 0; i < vegetables.length; i++) {
    if (highestScore < vegetables[i][metric]) {
      highestScore = vegetables[i][metric];
      submitter = vegetables[i].submitter;
    }
  }
  return submitter;
}

console.log(judgeVegetable(vegetables, metric));


// other failed attempts to solve this!

/*
  const firstVeg = vegetables[0];
  const firstMetric = firstVeg[metric];
  
  for (let i = 0; i < vegetables.length; i++) {
    const comparisonVeg = vegetables[i];
    const comparisonMetric = comparisonVeg[metric];
    
    if (firstMetric > comparisonMetric) {
      return firstVeg.submitter;
    }
  }

  vegetables.sort(function (a, b) {
    return a[metric] - b[metric];
  });
*/