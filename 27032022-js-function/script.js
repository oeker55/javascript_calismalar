



function alanHesapla(u, k){

    u = document.getElementById("uzun").value;
k = document.getElementById("kisa").value;


alan = u * k;
document.getElementById("alan").innerHTML = alan +"  metrekare";

    return alan;

}

//document.getElementById("alan").value() = alanHesapla(uzunKenar, kısaKenar);

function tuglaHesabı(){
    document.getElementById("tugla").innerHTML = alanHesapla()*5 +"  adet";

console.log();



}

