// variable banauni tarika 
let Name = "saugat";
let caste = "adhikarim";
let age = 20;
console.log(Name," is ", age ,"years old.");  // output herni tarika
// array banauni tarika
let fruit = ["apple","banana","mango"];
console.log(fruit); // array herni tarika
// object banauni tarika 
let obj = {
    meroname : "saugat",
    merocaste : "adhikari",
    meroage : 20
}
console.log(obj);// object herni tarika

// array pratcise
// .unshift(); array ko first element add
// .shift();first faldinxa
let num = [1,2,3,4,5]
//.slice();  cut data  from array tara no data change in the array
let nnn = num.slice(1,3)
console.log(nnn)
// .splice();

let aaa = num.splice(1,1,3,"saugat")// cut from,no of cut , what to place in cut place
console.log(aaa);
console.log(num);

let data = [1,2,3,4,5]
data = data.splice(1,3,"hello","bye","world")
console.log(data)

//.split();
let text = "haha haha haha"
let split = text.split(" ")
console.log(split)

// obj edit , add 
// var me = Object.freeze(
//     {
//     key : value ,
//     }
// ) 

/*
console.log(object.keys(obj_name))
*/

// my name is saugat adhikari
console.log("saugat is my name")


