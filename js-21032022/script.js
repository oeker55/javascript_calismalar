const massMark = 85;
const massJohn = 90;
const heightMark = 1.80;
const heightJohn = 1.76;
const markBMI = massMark/(heightMark**2);
const johnBMI = massJohn/heightJohn**2;

const markHigherthanBMI = markBMI > johnBMI;
console.log("Mark's BMI" + markBMI );
console.log("John's BMI" + johnBMI );

console.log("Mark's BMI higher than John's" + markHigherthanBMI);

