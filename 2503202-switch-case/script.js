let weekDay = prompt("Haftayı Giriniz")
weekDay = weekDay.toLowerCase();


switch (weekDay) {
    case "monday":
        console.log("Bugün Günlerden " + weekDay + ",yemek menüsü Pazartesi ....");
        break;
    case "tuesday":
        console.log("Bugün Günlerden " + weekDay + ",yemek menüsü Salı ....");
        break;
    case "wednesday":
        console.log("Bugün Günlerden " + weekDay + ",yemek menüsü Çarşamba....");
        break;
    case "thursaday":
        console.log("Bugün Günlerden " + weekDay + ",yemek menüsü Perşembe....");
        break;
    case "friday":
        console.log("Bugün Günlerden " + weekDay + ",yemek menüsü Cuma....");
        break;
    case "saturday":
        console.log("Bugün Günlerden " + weekDay + ",yemek menüsü Cumartesi....");
        break;
    case "sunday":
        console.log("Bugün Günlerden " + weekDay + ",yemek menüsü Pazar....");
        break;




    default:
        alert("Yanlış Giriş Yaptınız");
        break;
}
let sayi1 = 13;
let sayi2 = 14;
switch (sayi1 > sayi2) {
    case true:
        console.log("m n'den büyüktür.");

        break;
    case false:
        console.log("n m'den büyüktür");
        break;
    default:
        console.log("m ve n eşittir");
        break;
}
switch (true) {
    case sayi1 > sayi2:
        console.log("m n'den büyüktür.");

        break;
    case sayi2 > sayi1:
        console.log("n m'den büyüktür");
        break;
    default:
        console.log("m ve n eşittir");
        break;
}let hava = "yagmurlu";
switch (hava) {
    case "karlı":
        console.log("karlı");
        break;
    case "yagmurlu":

        console.log("yagmurlu");
////break; olmadığı için bir sonraki durumu da doğru kabul ettis
    case "güneşli ":
        console.log("güneşli");

        break;

    default:
        console.log("karışık");
        break;
}
let isNight = falsev;
isNight ? console.log("uyu") : console.log("çalış"); 