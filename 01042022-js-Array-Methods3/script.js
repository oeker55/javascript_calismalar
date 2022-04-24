let array = ["ali", "mehmet", "mustafa", "ekrem", "mahmut"];

let sayilar = [12, 4, 75, 9, 8, 28];


array.forEach(element => {

    let start = element.charAt(0).toUpperCase();
    let end = element.substring(1);
    sonuc = start + end;


    console.log(sonuc);


});


const newarray = array.map(element => {

    let start = element.charAt(0).toUpperCase();
    let end = element.substring(1);
    sonuc = start + end;

    return sonuc;



});
console.log(newarray)


let toplam = sayilar.reduce((a, b) => a + b)


console.log(toplam)




let buyuk = array.every(a => a.length > 5)
console.log(buyuk);


let bazı = array.some(a => a.length > 5);
console.log(bazı);

findIndex = array.findIndex(item => item.length > 3)
console.log(findIndex);


let sorted = sayilar.sort((a, b) => (a - b))//küçükten büyüğe

console.log(sorted);

sorted = sayilar.sort((a, b) => (b - a))//büyükten küçüğe

console.log(sorted);













