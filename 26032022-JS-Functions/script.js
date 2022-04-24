
let a = 25;
let b = 30;
let c = Number;
let d = Number;
let f = 32;

function calc() {
    let c = a + b;
    console.log(`Toplam= ${c}`);

}
calc();







function calc2() {

    c = a + b;
    return c;


}
console.log(`2.Fonksiyon'da Toplam = ${calc2()}`);





function calc3(sonuc) {

    sonuc = sonuc + 1;

    console.log(sonuc);

}
calc3(20);
calc3(a);




function calc4(param1, param2 ="matematik"){

console.log(`${param1} isimli öğrenci ${param2} dersinde başarılıdır`);

}
calc4("ali");
calc4("ali", "fen bilgisi");