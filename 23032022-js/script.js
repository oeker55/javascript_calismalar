console.log("Merhaba Dünya")
let firstName = "Özgür";
console.log(firstName.length);//5
console.log(firstName[2]);//0-1-2 ---->g
console.log(firstName[-1]);
console.log(firstName.charAt(2));// üstteki yöntemle aynı -->g
console.log(firstName.toLocaleUpperCase());//Hepsi büyük--> ÖZGÜR
console.log(firstName.toLowerCase());//Hepsi Küçük --->özgür
console.log(firstName.substring(2));//İkinci karakterden başlayarak yaz -->gür
console.log(firstName.substring(2, 4))//İkinci karakterden başlayıp 4üncü karakter kadar yaz 4 dahil değil--> gü
console.log(firstName.substr(2, 1))//İkinciden başla 1 tanesini yaz-->g

let metin = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore dolores repudiandae cupiditate, consequuntur possimus placeat! Velit voluptas rem nulla magnam rerum illo, nesciunt, alias assumenda, fugit quia sunt architecto itaque";

console.log(metin.split(""));/*(235) ['L', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm', ' ', 'd', 'o', 'l', 'o', 'r', ' ', 's', 'i', 't', ' ', 'a', 'm', 'e', 't', ',', ' ', 'c', 'o', 'n', 's', 'e', 'c', 't', 'e', 't', 'u', 'r', ' ', 'a', 'd', 'i', 'p', 'i', 's', 'i', 'c', 'i', 'n', 'g', ' ', 'e', 'l', 'i', 't', '.', ' ', 'I', 'n', 'v', 'e', 'n', 't', 'o', 'r', 'e', ' ', 'd', 'o', 'l', 'o', 'r', 'e', 's', ' ', 'r', 'e', 'p', 'u', 'd', 'i', 'a', 'n', 'd', 'a', 'e', ' ', 'c', 'u', 'p', 'i', 'd', 'i', 't', 'a', 't', 'e', ',', ' ', …]; ----> Boşluklar dahil en küçük parçalarına ayırır 235 parça*/

console.log(metin.split(" "));/*30) ['Lorem', 'ipsum', 'dolor', 'sit', 'amet,', 'consectetur', 'adipisicing', 'elit.', 'Inventore', 'dolores', 'repudiandae', 'cupiditate,', 'consequuntur', 'possimus', 'placeat!', 'Velit', 'voluptas', 'rem', 'nulla', 'magnam', 'rerum', 'illo,', 'nesciunt,', 'alias', 'assumenda,', 'fugit', 'quia', 'sunt', 'architecto', 'itaque']0: "Lorem"1: "ipsum"2: "dolor"3: "sit"4: "amet,"5: "consectetur"6: "adipisicing"7: "elit."8: "Inventore"9: "dolores"10: "repudiandae"11: "cupiditate,"12: "consequuntur"13: "possimus"14: "placeat!"15: "Velit"16: "voluptas"17: "rem"18: "nulla"19: "magnam"20: "rerum"21: "illo,"22: "nesciunt,"23: "alias"24: "assumenda,"25: "fugit"26: "quia"27: "sunt"28: "architecto"29: "itaque"length: 30[[Prototype]]: Array(0)---> kelimelere ayırır  */
console.log(metin.split("."));/*['Lorem ipsum dolor sit amet, consectetur adipisicing elit', ' Inventore dolores repudiandae cupiditate, consequ…lias assumenda, fugit quia sunt architecto itaque'] --->cümlelere ayırır*/
let lastName = "   eker";
console.log(lastName);
console.log(lastName.trim());/* baştaki ve sondaki boşlukları kırpar */

let a = lastName.includes("e");// "eker" içinde e varmı?
console.log(a); //true
a = lastName.includes("z");// "eker" içinde z var mı?
console.log(a);//false

///// metnin ilk kelimesini bul
let tumKelimeler = metin.split(" ");
console.log(tumKelimeler);
let ilkKelime = tumKelimeler[0];
console.log("İlk Kelime=", ilkKelime);
///// metnin son kelimesini bul
let sonKelime = tumKelimeler[tumKelimeler.length - 1];
console.log("Son Kelime=", sonKelime);
///-------charAT ie
//console.log("İlk Kelime= ", tumKelimeler.charAt(0) ) //olmuyor çünkü charAt() metodu sadece karakter seçebilyor kelime seçemiyor


///ogrenim değişkenin ilk harfi küçükse büyük yap
let ogrenim = "  lise  ";

console.log(ogrenim);
ogrenim = ogrenim.trim();///boşluk varsa al
console.log(ogrenim);//lise
tumHarfler = ogrenim.split("");
console.log(tumHarfler);//['l', 'i', 's', 'e']

tumHarfler[0] = tumHarfler[0].toLocaleUpperCase();
ogrenim = tumHarfler[0]+ogrenim.substring(1);
console.log(ogrenim);// Lise
/// yukarıdaki kod formlardan düzenli veri çekmekte kullanılabilir
////////////
let sinif = 2;
sonOgrenim = ogrenim.concat("-",sinif);//ogrenim ve sinif değişkenlerinin içeriğini birleştiriyoruz arasına da "-" ekliyoruz ---Lise-2
console.log(sonOgrenim);

////////////////
let sayi = "5";
console.log(sayi+ 6);// 56
console.log(Number(sayi)+6);// 11
console.log(+sayi + 6);// 11
console.log(6 + +sayi); //11









