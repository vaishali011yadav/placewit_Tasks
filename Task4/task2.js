console.log('Question 2');

const a = [1, 4, 2, 0, 1, 3];
const uniqueA = Array.from(new Set(a));
const sortedArr = uniqueA.sort((a, b) => b - a);
const ans = sortedArr[2];

console.log(ans);
