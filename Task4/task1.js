console.log('Question 1');
const inputDate = '03/20/2023';
const [month, day, year] = inputDate.split('/');

const currDate = new Date(`${year}-${month}-${day}`);
const dayIdx = currDate.getDay();
const monthIdx = parseInt(month) - 1;
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const dayName = (() => {
  switch (dayIdx) {
    case 0: return 'Sunday';
    case 1: return 'Monday';
    case 2: return 'Tuesday';
    case 3: return 'Wednesday';
    case 4: return 'Thursday';
    case 5: return 'Friday';
    case 6: return 'Saturday';
  }
})();

const outputDate = `${day} ${months[monthIdx]}`;

console.log(`Greetings, Today is ${dayName} and it's ${outputDate}`);
