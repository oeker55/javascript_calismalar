const calismaSaatleri = (day) => {

    switch (day) {
        case "Monday":

            return 10;

        case "Tuesday":

            return 8;
        case "Wednesday":

            return 6;
        case "Thursday":

            return 10;
        case "Friday":

            return 8;
        case "Saturday":

            return 5;
        case "Sunday":

            return 10;





        default:
            console.log("hata");
            break;
    }



}



const toplamCalismaSaati=()=>{

    let toplam = calismaSaatleri("Monday")+calismaSaatleri("Tuesday")+calismaSaatleri("Wednesday")+calismaSaatleri("Thursday")+calismaSaatleri("Friday")+calismaSaatleri("Saturday")+
    calismaSaatleri("Sunday")
    

return toplam;

}
console.log(`Toplam Çalışma Saati ${toplamCalismaSaati()}`);


const idealCalismaSaati=()=>{
let günlük= 8;
let haftalik =günlük*7;
return haftalik;
}
const sonuc=()=>{
let toplam = toplamCalismaSaati();
let ideal = idealCalismaSaati();


    if (toplam>ideal) {
        return console.log(`Bu Hafta ${toplam-ideal} saat fazla çalıştın`);
    } else if(ideal>toplam) {
        return console.log(`Bu Hafta ${ideal-toplam} saat az çalıştın`);
    }else if(ideal=toplam){

        return console.log(`Bu hafta tam ${toplam} saat çalıştın ve hedefi tam tutturdun`)

    }
    
}
sonuc();