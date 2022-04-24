let array0 = ["ahmet","ali",5,"mehmet","mustafa","rıza","arif"];
let yeniArray=array0.map(item=>"merhaba "+item);//map() metodu ile => tan sonraki kısımda dizinin her elemanına belirtilen işlem yaptırılır
console.log(yeniArray);

let yeniArray1=array0.find(item=>typeof item ==="number");//find() metodu => tan sonraki şarta uyan ilk elemanı bulur.
console.log(yeniArray1);

let yeniArray2 = array0.filter(itemmm=>typeof itemmm === "string");//filter metodu ile => tansonra girilen şarta göre dizinin elemanlarını filtreler.
console.log(yeniArray2);



///ÖRNEKLER
let array1 =["21","10","45","4",[55]];

let yeniArray3 = array1.filter(item=>item>10);
console.log(yeniArray3);
let yeniArray4 = array1.find(item=>typeof item === "object");//dizilerin tipi object'tir.
console.log(yeniArray4);


let yeniArray5 = array1.map(item=>item*5);
console.log(yeniArray5);