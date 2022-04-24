let a = Math.PI;

console.log(a);
console.log(Math.floor(a));
console.log(Math.ceil(a));
console.log(Math.round(a));
let b = 12.49;
console.log(Math.round(b));
 
b = 12.51;
console.log(Math.round(b));

c = Math.random()*100;

console.log(Math.floor(c));

let d = Math.max(a, b, c);
console.log("En Büyük Değer=  "+d);
let e = Math.min(a, b, c);
console.log("En Küçük Değer = "+e);


let f = prompt("lütfen sayı giriniz");
console.log("Girdiğiniz Sayı = "+f);