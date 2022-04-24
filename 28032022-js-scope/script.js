

function logIn() {
    function giris() {
        let isLoggedIn = prompt("Giriş Yapılsın mı?");
        isLoggedIn = isLoggedIn.toLowerCase();
        console.log(isLoggedIn);
       
        if (isLoggedIn == "evet") {
            return true;
        } else if( isLoggedIn == "hayır") {

            return false;
        }else{

           return alert("HATALI GİRİŞ ! Lütfen 'Evet' yada 'Hayır' Giriniz"),giris();
        }


    }
        sonuc = giris();
        let name = "GUEST USER";



    if (sonuc == true) {
        let name = "özgür";
        alert(`Hoşgeldin ${name}`);


    } else if (sonuc == false) {
       
        alert(`Hoşgeldin ${name}`);
    } else {
        console.log("hata");
    }



}
logIn();
