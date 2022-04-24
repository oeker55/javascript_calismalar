/*
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log( Boolean({}));
console.log(Boolean("Özgür"));



const money = 0;
console.log(money);
if(money){
    console.log("para var");
}else{
    console.log("para yok");
}
*/
/*
const sayi = "1905";
console.log(typeof sayi); //string tipinde

if(sayi == 1905){// == operatör değişken string de olsa sayıya çevirir karşılaştırır

    console.log("Sayı 1905");
}else{
    console.log("Sayı 1905 değil");
}
if(sayi === 1905){// === operator yalnızca sayıları karşılaştırıyor 

    console.log("Sayı 1905");
}else{
    console.log("Sayı 1905 değil");
}
*/


const balıklar = (90+99+50)/3;
const kuslar = (90+99+50)/3;
/*
console.log(balıklar, kuslar);

if(balıklar > kuslar && balıklar > 100){
    console.log("Balıklar Kazandı");
}
else if(kuslar > balıklar && kuslar>100){
    console.log("Kuşlar Kazandı");
}
else if(balıklar === kuslar && balıklar>100 && kuslar>100){
    console.log("Her İkisi de Kazandı");
}else{
    console.log("Malesef Kimse Kazanamadı");
}
*/
console.log("balıklar"+balıklar,"kuslar"+ kuslar);
balıklar > kuslar && balıklar > 100 ? console.log("Balıklar Kazandı") :
kuslar > balıklar && kuslar>100 ? console.log("Kuşlar Kazandı"): balıklar === kuslar && balıklar>100 && kuslar>100 ?  console.log("Her İkisi de Kazandı"):
console.log("Malesef Kimse Kazanamadı");