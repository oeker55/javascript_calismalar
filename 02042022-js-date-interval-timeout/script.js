let numbers = [3,9,2,8,"8",25,12];


let orderedNumbers  = numbers.sort((a,b) => a-b);
console.log(orderedNumbers);
let filteredNumbers = orderedNumbers.filter(item => typeof item ==="number")
console.log(filteredNumbers);
let mappedNumbers = filteredNumbers.map(item => item*2)
console.log(mappedNumbers);

//yukarıda yapılan şu şekilde de olabilir



setInterval(() => {
    let yeni = numbers.sort((a,b) => a-b).filter(item => typeof item ==="number").map(item => item*2);
console.log(yeni);
    
},1500000);//1500sn'de bir içerdeki işlemi yapar.
date = +new Date;
dateStart = +new Date("2022-04-02 15:20");
console.log(dateStart);

console.log(dateStart - date);

setTimeout(() => {
    console.log("Hello World !")
}, dateStart-date);


let result = '';
let i = 0;


do {
    i = i + 1;
    result = result + i;
    console.log(result);


}while(i < 5);