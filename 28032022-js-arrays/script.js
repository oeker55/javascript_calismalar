let dizi =["fatih","bayezid","yavuz","kanuni"];

dizi[1] = "2.bayezid";


console.log(dizi);
let dizi2 = new Array("osman ","orhan","murat","yıldırım");
console.log(dizi2);
const dizi3 = ["ahmet","mehmet","numan"];

//dizi3 = ["aa","bb","cc"];//const olarak tanımlandığı için yenide atama yapılamaz ancak içreriği değiştirilebilir.(Uncaught TypeError: Assignment to constant variable.)
dizi3[0] = "mete";
console.log(dizi3);


yeniDizi = new Array(5).fill();
console.log(yeniDizi);
