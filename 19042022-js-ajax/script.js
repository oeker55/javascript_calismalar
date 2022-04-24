let reqres = "https://reqres.in/api/users";
let placeholder = "https://jsonplaceholder.typicode.com/users"
/*
const xhr = new XMLHttpRequest();
xhr.responseType="json"
xhr.open("GET", url)
xhr.send()
//console.log(xhr)

xhr.onreadystatechange = () => {
  // if(xhr.readyState===4 && xhr.status===200){

    //console.log(xhr.response)

//   }
    if(XMLHttpRequest.DONE){///yukarıdaki if ile aynı anlama geliyor

       
       // console.log(xhr.response.data[0].avatar)
      //  xhr.response.data.forEach(element => {
            //avatarResim = element.avatar
           // console.log(avatarResim)
           // addHtml(avatarResim)
      //  });
     
    
    
    
    
    
    }

  


}

const useData = ()=>{

}
const addHtml = (avatarResimUrl) =>{
    let avatar =  document.createElement("img")
     document.body.appendChild(avatar)
     avatar.src=avatarResimUrl;
     
 }




 
 const data = { id: "10", firstName: "ali"}
 const JSONdata = JSON.stringify(data)

const xhr2 = new XMLHttpRequest();
xhr2.responseType="json"
xhr2.open("POST", url)
xhr2.send(JSONdata);


xhr2.onreadystatechange=()=>{

if(xhr2.readyState ===4 ){

    console.log(xhr2.response)
}

}



*/

async function getData(url) {

    try {
        let data = await fetch(url)
        let data1 = await data.json()

        console.log(data1)
        useData(data1)

    } catch (error) {
        console.log(error)

    }


}


getData(reqres)



async function postData() {

    try {
        willPostData =[25, "l", "klm"]
        //  willPostData = JSON.stringify(willPostData)
          let poster={
              method:"POST",
              body: willPostData
          }
          let data = await fetch(placeholder,poster)
          if(data.ok){
      
              let data1 = await data.json()
              console.log(data1)
          }
        
    } catch (error) {
        console.log(error)
    }
   
}
postData()
let htmlContent=""
const addHTML=(isim,soyisim,mailAdresi,avatarResmi)=>{
    htmlContent = htmlContent + `<div class="card " style="width: 18rem;">
  <img class="card-img-top rounded-circle " src="${avatarResmi}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${isim} ${soyisim}</h5>
    <p class="card-text">${mailAdresi}<br>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
document.body.innerHTML=htmlContent;
}

const useData =(veri)=>{
    let yeni= veri.data
    yeni.forEach(element => {
        isim = element.first_name;
        soyisim = element.last_name;
        mailAdresi =element.email;
        avatarResmi = element.avatar;

        console.log(isim,soyisim,mailAdresi,avatarResmi)
        addHTML(isim,soyisim,mailAdresi,avatarResmi)

    });


}
