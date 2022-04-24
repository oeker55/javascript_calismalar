



function liEkle() {

    let yenili = document.createElement("li")
    let yenia = document.createElement("a")
    let liler = document.querySelectorAll("ul li")
    
    yenia.setAttribute("href", "www.ozgur.com")
    yenili.appendChild(yenia)
    ulmiz = document.querySelector("ul")
    
    ulmiz.appendChild(yenili)
    
    yenili.innerHTML=`Merhaba ${liler.length-1}`


    console.log(liler)




} 

let i=0;
let arkaplan=document.getElementById("arkaplan");


function arkaPlan(){
   
   
    
    
    if(i%2==0){
        
        document.body.style["background-color"]="blue" 
        arkaplan.innerHTML = "Kırmızı Arka Plan İçin Tıklayınız"
        i=i+1;
        
    }else{
        
        
        document.body.style["background-color"]="red" 
        arkaplan.innerHTML = "Mavi Arka Plan İçin Tıklayınız"
        i=i+1;

    }

return console.log(i);
}




