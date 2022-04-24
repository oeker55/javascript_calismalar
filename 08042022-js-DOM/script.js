
let container = document.getElementById("container")
let item = document.querySelectorAll(".item");//array olarak geldiği için item[0] şeklinde çağıracağız

console.log(item);
item[0].innerText = "Merhaba Dünya"
let item2 = document.getElementById("item2");
item2.innerText="Merhaba Venüs";
item2.style.backgroundColor="blue";

let h = document.getElementsByTagName("h1");//array olarak geldiği için h[0] şeklinde çağıracağız

let resim = document.getElementById("resim")
resim.src="./limon.jpeg";
resim.setAttribute("alt", "resimmm" )

resim.classList.add("yeniClass")
console.log(resim.classList)
resim.classList.remove("yeniClass")
console.log(resim.classList)


let paragraf1 = document.createElement("p");
paragraf1.innerText="svasvavadvsvasdsad";
container.appendChild(paragraf1);
console.log(container)
container.removeChild(paragraf1)









