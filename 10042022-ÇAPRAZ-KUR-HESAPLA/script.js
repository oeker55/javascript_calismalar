




let = kurDolarTl= 14.71;
let = kurEuroTl= 16.04;
let = kurSterlinTl= 19.14;
let = kurRiyalTl= 3.92;



let tl = document.getElementById("tl")
let dolar = document.getElementById("dolar")
let euro = document.getElementById("euro")
let sterlin = document.getElementById("sterlin")
let riyal = document.getElementById("riyal")






tl.addEventListener("input", cevirici)
dolar.addEventListener("input", cevirici)
euro.addEventListener("input", cevirici)
sterlin.addEventListener("input", cevirici)
riyal.addEventListener("input", cevirici)


tl.name="tl"
dolar.name ="dolar"
euro.name ="euro"
sterlin.name ="sterlin"
riyal.name ="riyal"






let labels = document.querySelectorAll("label");
console.log(labels)
for (let i = 0; i < labels.length; i++) {
    const element = labels [i];
    
    element.style.marginRight="20px";
}

function cevirici(e){

    if(e.target.name === "tl"){
        e.target.value ? dolar.value= Number(e.target.value)*(1/kurDolarTl)+" $" : dolar.value ="";
        e.target.value ? euro.value= Number(e.target.value)*(1/kurEuroTl)+" €" : euro.value ="";
        e.target.value ? sterlin.value= Number(e.target.value)*(1/kurSterlinTl)+" £" : sterlin.value ="";
        e.target.value ? riyal.value= Number(e.target.value)*(1/kurRiyalTl)+" ﷼ " : riyal.value ="";




    }
    else if(e.target.name === "dolar"){
        e.target.value ? tl.value= Number(e.target.value)*kurDolarTl+" ₺" : tl.value ="";
        e.target.value ? euro.value= Number(e.target.value)*kurDolarTl/kurEuroTl+" €" : euro.value ="";
        e.target.value ? sterlin.value= Number(e.target.value)*kurDolarTl/kurSterlinTl+" £" : sterlin.value ="";
        e.target.value ? riyal.value= Number(e.target.value)*kurDolarTl/kurRiyalTl+" ﷼ " : riyal.value ="";

            
       




    }
   else if(e.target.name === "euro"){
    e.target.value ? tl.value= Number(e.target.value)*kurEuroTl+" ₺" : tl.value ="";
    e.target.value ? dolar.value= Number(e.target.value)*kurEuroTl/kurDolarTl+" $" : dolar.value ="";
    e.target.value ? sterlin.value= Number(e.target.value)*kurEuroTl/kurSterlinTl+" £" : sterlin.value ="";
    e.target.value ? riyal.value= Number(e.target.value)*kurEuroTl/kurRiyalTl+" ﷼ " : riyal.value ="";
       




    }else if(e.target.name === "sterlin"){

    
        e.target.value ? tl.value= Number(e.target.value)*kurSterlinTl+" ₺" : tl.value ="";
        e.target.value ? dolar.value= Number(e.target.value)*kurSterlinTl/kurDolarTl+" $" : dolar.value ="";
        e.target.value ? euro.value= Number(e.target.value)*kurSterlinTl/kurEuroTl+" €" : euro.value ="";
        e.target.value ? riyal.value= Number(e.target.value)*kurSterlinTl/kurRiyalTl+" ﷼ " : riyal.value ="";
       




    }else if(e.target.name === "riyal"){
        e.target.value ? tl.value= Number(e.target.value)*kurRiyalTl+" ₺" : tl.value ="";
        e.target.value ? dolar.value= Number(e.target.value)*kurRiyalTl/kurDolarTl+" $" : dolar.value ="";
        e.target.value ? sterlin.value= Number(e.target.value)*kurRiyalTl/kurSterlinTl+" £" : sterlin.value ="";
        e.target.value ? euro.value= Number(e.target.value)*kurRiyalTl/kurEuroTl+" €" : euro.value ="";
        




    }

   



}
