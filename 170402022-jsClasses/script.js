



class topcular {

constructor(name, surname, age, kadroDurumu, formaNumarasi, millet){

this.name =name;
this.surname=surname;
this.age =age;
this.kadroDurumu = kadroDurumu;
this.formaNumarasi = formaNumarasi;
this.millet=millet;



}
oyuncuGoster(){

    console.log(this.name)
}


}
import futbolcular from "./kadro.js"



let topcu1 = new topcular("ismail", "çipe", "25", "yedek", "75", "Türk")



class BoyEkle extends topcular{

constructor(name, surname, age, kadroDurumu, formaNumarasi, millet, boy, kontrat ="sözleşmeli"){
    super(name, surname, age, kadroDurumu, formaNumarasi, millet, )
this.boy= boy
this.kontrat = kontrat


}


}


let topcu2 = new BoyEkle("atalay", "babacacn", "20", "yedek", "82", "Türk", "175", "kiralık")

topcu1.oyuncuGoster();
topcu2.oyuncuGoster();
console.log(topcu1)
console.log(topcu2)

topcu2.kadroDurumu ="İlk 11"
futbolcular.push(topcu1)
futbolcular.push(topcu2)
console.log(futbolcular[19])














