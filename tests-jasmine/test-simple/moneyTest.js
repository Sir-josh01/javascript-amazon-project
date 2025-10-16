import { formatCurrency } from '../../script/utils/money.js';

console.log('Test suite: formatCurrency');
console.log('Converts cents to dollars');
if (formatCurrency(2090) === '20.90') {
  console.log('Passed');
} else {
  console.log('Failed');
}

console.log('Works with Zero(0)');
if(formatCurrency(0) === "0.00") {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('Rounds up to nearest cents');
if (formatCurrency(2000.5) === "20.01") {
  console.log('passed');
} else {
  console.log('failed')
}