let newPromise = new Promise((resolve, reject)=>{
const kurs =["ali", "mehmet", "rıza"]
if(kurs.includes("rıza")){

    resolve("rıza bulundu")
}else{

    reject("rıza bulunamadı")
}
})



newPromise
.then(deger => console.log(deger))
.catch(err=> console.log(err));





const promiseFunc = (elma) => new Promise((resolve, reject)=>{

if(elma =="elma"){

    resolve("çalıştı");
    
}else{
    reject("hata");

}
})
    
    
    
    


promiseFunc("elm")
.then(deger=> console.log(deger))
.catch(err =>console.log(err));



const promiseFunc2 =()=>{

return new Promise( (resolve, reject)=>{

    if(false){

        resolve("çalıştı değer true")
    }else{

        reject("hatalı değer false ")
    }




})
}


promiseFunc2()
.then(deger=>console.log(deger))
.catch(err=>console.log(err));


const promiseFunc3 = async (deger)=>{

if(deger==3){

    console.log("değer 3")
}
else{
    console.log("değer 3 değil")
}

}


promiseFunc3("3")
.then(a=>a)
.catch(err=>err)