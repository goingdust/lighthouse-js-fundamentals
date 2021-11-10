const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 20,
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
  const firstVeg = vegetables[0];
  const firstMetric = firstVeg[metric];
  
  for (let i = 0; i < vegetables.length; i++) {
    const comparisonVeg = vegetables[i];
    const comparisonMetric = comparisonVeg[metric];
    
    if (firstMetric > comparisonMetric) {
      return;
    }
    if (comparisonMetric > firstMetric) {
      return;
    }
  }
}

console.log(judgeVegetable(vegetables, metric));

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
*/