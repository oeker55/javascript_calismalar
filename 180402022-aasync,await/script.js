
async function newFunc1() {
    return newPromise = new Promise((resolve, reject) => {



        setTimeout(() => {
            if (true) {

                resolve("hello")
            } else {

                reject("error")
            }
        }, 1000)


    })

}





/*newFunc1()
.then(result=>console.log(result))
.catch(err=>console.log(err))
*/


async function newFunc2() {
    let newPromise2 = await newFunc1()

    return await newPromise2;
}
newFunc2()
/* .then(result => console.log(result))
.catch(err => console.log(err))*/


//const placeHolderUrl = 'https://api.yapikredi.com.tr/api/investmentrates/v1/currencyRates'
const placeHolderUrl = 'https://jsonplaceholder.typicode.com/todos/1'
const getData = async () => {

    const data = await fetch(placeHolderUrl);
    const response = await data.json()
    console.log(response)
   // document.write(response)

}
getData();



let api = "https://api.github.com/users/ozgureker"

async function getGithubAvatar() {
try {
    let response = await fetch(api)
    if(response.status===200){

        let data = await response.json()
        let imgSrc = data.avatar_url
        console.log(imgSrc)
        let resim = document.createElement("img")
        document.body.appendChild(resim)
        resim.src = imgSrc;
        resim.alt="resim"
    }else{

        console.log("birşeyler ters gitti")
    }
    
} catch (error) {
    console.log(error)
    
}

}
getGithubAvatar()