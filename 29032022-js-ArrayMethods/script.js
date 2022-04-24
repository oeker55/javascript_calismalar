
let gunlerRakam = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"];
let aylar = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
let gunler = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
let tarih;

tarih = [gunlerRakam[12], aylar[8], gunler[0]];
tarih = tarih.join(" ");//Join() methodu parantez içi boş kalırsa elemanlar arasında virgül oluyor .
console.log(tarih);

let subatGunlerRakam = [];
console.log(gunlerRakam.indexOf("30"));
console.log(gunlerRakam.pop());//çıkardığım elemanı gösterir

//console.log(gunlerRakam);//çıkardıktan sonraki diziyi gösterir
subatGunlerRakam = [...gunlerRakam];//bir diziyi başka bir diziye aktarırken bu yöntem kullanılılır
//subatGunlerRakam = gunlerRakam; //bu şekilde olmuyor subatı yazdırınca yine 30 alıyor 


console.log(gunlerRakam.push("30"));//eklediğim elemanı gösterir



console.log("Şubat", subatGunlerRakam);
console.log("günler", gunlerRakam);
if(aylar.includes("Şubat")){
    console.log("şubat içeriyor.");

}else{
    console.log("Belirtilen elemanı içermiyor");
}


console.log(gunler.slice(0,3));// 0. indexten başla 3 eleman seç
console.log(gunler.slice(1)); //1. indexten den başla hepsini seç
console.log(gunler.slice(gunler.length-1)); //son elemanı seç
console.log(gunler);//slice seçiyor dizimize birşey yapmıyor

//console.log(gunler.splice(0,3));// 0. indexten başla 3 eleman sil
//console.log(gunler.splice(1)); //1. indexten den başla hepsini sil
//console.log(gunler.splice(gunler.length-1)); //son elemanı seç

//console.log(gunler.splice(1,5,22,33,44));//1 den başla 5 index  sil yerlerine 22 33 44 ü yaz
console.log(gunler.shift());// ilk elemanı siler.pazartesiyi çekti aldı
console.log(gunler);//pazarrtesi silip kalan elemanları yazdı
console.log(gunler.unshift("fd")); //en başa fd ekledi bu satırda eklenmiş haliyle dizi uzunluğunu gösterdi
console.log(gunler);//fd eklenmiş hali

gunler.shift();
gunler.unshift("Pazartesi")
console.log(gunler);// tekrar fd yi silip yerine pazartesi yazdım

//console.log(gunler.sort());//küçükten büyüğe sıralar stringleri de alfabetik sıralar

console.log(gunler);

///dizinin içerisinden bir eleman silmek için 
console.log(gunler.indexOf("Çarşamba"));//önce sileceğimiz elemanın indexini buluyoruz
console.log(gunler.splice(2,1));//2.indexten itibaren bir eleman sil yerine başka bir eleman eklemek istersek console.log(gunler.splice(2,1,"gfgf"))
console.log(gunler);











