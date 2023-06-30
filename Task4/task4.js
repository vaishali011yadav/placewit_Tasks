console.log('Question 4');

const inputArray = ["hellospcialperson ", "iam", " i am special ", "I am a web developer", " Bob is a really special boy", " Orange is the most Special fruit in this entire world "];


const ans1 = inputArray.map(str => str.trim().toUpperCase());
console.log(ans1);

const ans2 = inputArray.filter(str => str.includes("special"));
console.log(ans2);
