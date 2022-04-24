const person = {

name : "ozgur",
surname :"eker",
education: "license",
job: "EEE"
}
console.log(person);

for (const key in person) {
console.log(key);

}
let keyler = Object.keys(person);
console.log(keyler);

let valuelar = Object.values(person);
console.log(valuelar);

let keyVeValuelar = Object.entries(person);
console.log(keyVeValuelar);

let specificDate = new Date("2022-4-05 00:00");

let gün = specificDate.getDate();
console.log(gün);

let ay = specificDate.getMonth();
console.log(ay+1);

let yıl = specificDate.getFullYear();
console.log(yıl);
 console.log(gün+" "+(ay+1)+" "+yıl);


 const today = new Date();
 console.log(today);

