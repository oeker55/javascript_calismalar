let raceNumber = Math.round(Math.random() * 1000);
console.log(raceNumber);

let age = 100;
let early = false;


if (age > 18 && early) {
    console.log(`Yaşınız ${age} ve erken kayıt yaptığınız için saat 09:00'da yarışacaksınınız.Yarış Numaranız = ${raceNumber + 1000}`);

} else if (age > 18 && !early) {
    console.log(`Yaşınız ${age} ve erken kayıt yapmadığınız için saat 11:00 da yarışacaksınız. Yarış numaranız = ${raceNumber}`);

}
else if (age < 18) {
    console.log(`Yaşınız ${age} ve 18 yaşından küçük olduğunuz için saat 12:30 da yarışacaksınız. Yarış numaranız = ${raceNumber}`);
}
else {
    console.log(`Yaşınız ${age} olduğundan kayıt masası ile görüşünüz`);
}