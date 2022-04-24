const myCar = {

    brand: "toyota",
    model: "auris",
    fuel: "diesel",
    age: "12"

}
console.log(myCar["brand"]);


const course = {

    name: "js",
    subjects: ["variables", "functions", "arrays", "objects"],
    teachers: {
        teacher_1: {
            name: "ozgur",
            surname: "eker",
        },
        teacher_2: {
            name: "omur",
            surname: "eker",

        }
    }

}

console.log(course.teachers.teacher_1.name);
console.log(course.subjects);


course.subjects.push("DOM");
console.log(course.subjects)

course["teachers"]["teacher_1"]["name"]="ozcan";

console.log(course.teachers.teacher_1.name);


function carCreator(brand,color,model,km){
    this.brand = brand;
    this.color = color;
    this.model = model;
    this.km = km;


}

const honda =  new carCreator("honda","gray","civic","132000");


console.log(honda.model);

const ogrenci ={

name : "fatih",
surname : "c",

toUpper : function(param) {

    return param.toUpperCase();
}

}


console.log(ogrenci.name);
console.log(ogrenci.toUpper(ogrenci.name));


for(key in ogrenci){
    
    console.log(key);
    
    
}

delete ogrenci["name"];

console.log(ogrenci.name);









