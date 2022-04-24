let sayilar = [35, 25, 95, 36, 85, 1];



let tutucu = Number;

for (i = 0; i <= 5; i++) {

    for (j = 0; j <= 5; j++) {
        if (sayilar[j] > sayilar[j + 1]) {

            tutucu = sayilar[j];

            sayilar[j] = sayilar[j + 1];
            sayilar[j + 1] = tutucu;
        }else{}





    }
}
for (i = 0; i < 6; i++) {
    console.log(sayilar[i]);
}
console.log(sayilar);
