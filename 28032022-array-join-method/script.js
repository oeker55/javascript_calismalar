let cumle = "galatasaray futbol takımı, Galatasaray Spor Kulübü'nün Süper Lig'de mücadele eden futbol takımıdır" ;
//Yukarıda yazılı olan cümlenin ilk harfini büyütüp sonuna da nokta koyan fonksiyon

const toUpperAndLastDot = (cumle) =>yeniCumle
{
    let yeniDizi= cumle.split("");

    yeniDizi[0]=yeniDizi[0].toUpperCase();

    yeniDizi[yeniDizi.length] = ".";
    
    yeniCumle = yeniDizi.join("");

}
console.log(cumle);
console.log(toUpperAndLastDot(cumle));
