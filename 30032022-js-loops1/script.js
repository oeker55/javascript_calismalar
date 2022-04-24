const isim = ["O", "Z", "G", "U", "R"];
let i;
let random;
function gorev0() {

    for (i = 0; i < isim.length; i++) {
        let random = Math.floor(Math.random() * isim.length);

        if (random === 0) {

            return console.log(isim[random]);
        }
    }

}



function gorev1() {

    for (i = 0; i < isim.length; i++) {
        let random = Math.floor(Math.random() * isim.length);

        if (random === 1) {

            return console.log(isim[random]);
        }
    }

}
function gorev2() {

    for (i = 0; i < isim.length; i++) {
        let random = Math.floor(Math.random() * isim.length);

        if (random === 2) {

            return console.log(isim[random]);
        }
    }

} 
function gorev3() {

    for (i = 0; i < isim.length; i++) {
        let random = Math.floor(Math.random() * isim.length);

        if (random === 3) {

            return console.log(isim[random]);
        }
    }

}
 function gorev4() {

    for (i = 0; i < isim.length; i++) {
        let random = Math.floor(Math.random() * isim.length);

        if (random === 4) {

            return console.log(isim[random]);
        }
    }
}


gorev0();
gorev1();
gorev2();
gorev3();
gorev4();
