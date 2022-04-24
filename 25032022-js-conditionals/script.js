
 


function fonk(){
    let yas1 = document.getElementById("yas").value;  
    let ogrenim = document.getElementById("ogrenim").value; 
      if(yas1 < 18){

        alert("Bu arkadaşın yaşı 18'den küçük "+ yas1 + " yaşında" );
    }
    else if(yas1 > 55 ){
        alert("Bu iş için oldukça yaşlısınız");
    }
    else if(ogrenim == "ilköğretim"){
        console.log("İlköğretim mezunu olanları almıyoruz");

    }
    console.log("yaşıııı", yas1);
    console.log("Öğrenim  " + ogrenim )
}