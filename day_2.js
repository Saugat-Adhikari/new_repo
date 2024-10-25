// variable banauni tarika 
// let Name = "saugat";
// let caste = "adhikarim";
// let Age = 20;
// console.log(Name," is ", Agege ,"years old.");  // output herni tarika
// // array banauni tarika
// let fruit = ["apple","banana","mango"];
// console.log(fruit); // array herni tarika
// // object banauni tarika 
// let obj = {
//     meroname : "saugat",
//     merocaste : "adhikari",
//     meroage : 20
// }
// console.log(obj);// object herni tarika

// // array pratcise
// // .unshift(); array ko first element add
// // .shift();first faldinxa
// let num = [1,2,3,4,5]
// //.slice();  cut data  from array tara no data change in the array
// let nnn = num.slice(1,3)
// console.log(nnn)
// // .splice();

// let aaa = num.splice(1,1,3,"saugat")// cut from,no of cut , what to place in cut place
// console.log(aaa);
// console.log(num);

// let data = [1,2,3,4,5]
// data = data.splice(1,3,"hello","bye","world")
// console.log(data)

// //.split();
// let text = "haha haha haha"
// let split = text.split(" ")
// console.log(split)

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



// conditional statement
// ternary operator
// short circuit
var israining = true
israining && console.log("carry the umbrella")

if (israining)
{
    console.log("pani paryo sathi , ghara jau")
}

var temp = 36
temp>30?console.log("tato xa sathi , sarai tato"):console.log("xaina tato sato")

// loop
var numbers = [1,2,4,5,6,7,8,0]
for (let i = 0; i < 5; i++) {
    console.log(numbers[i])
    
}

var hapta = ["sun","mon","tue","wed","thu","fri","sat"]

// special loop for array -------> for of loop
for(let $ind of hapta){
    console.log($ind)
}


//slice--------->n index bata n-1 
// .slice(a,b)   -----> a index bata b-a ota data dekhauxa
var one = [ "ram","shyam","hari","gita","sita","ramita"]
var test = one.slice(2,6)
console.log(test)

// special loop for object -------> for in loop
// obj
// var data = {
//     "name" : "saugat",
//     "age" : 20,
//     "locaion" : "pokhara"
// }
// // for in loop
// for(let key in data){
//     console.log(data[key])
// }
// // array in obj
// for(let key of data){
// console.log(data.name)
// }
//


// function
//regular and arrow function
// regular
//syntax:
/**
 * 
 * function name(parameter){
 * //statement
 * }
 */

function intro(name){
    console.log("hello my name is ",name)
}

intro("saugat")
intro("ramesh")

function addTwoNumber(num1,num2){
    console.log(num1+num2)
}

// arrow function
var sayHello = (name)=>{
    console.log("hello",name)
}
sayHello("saugat")


var addTwoNumber = (num1,num2=2)=> console.log(num1+num2)
addTwoNumber(1)

var foods = ['chowmein','momo','burger']
var qq = [1,2,3,4,5,5]

function khaja (foods){
 for(let key of foods){
    console.log(key)
 }
}

khaja(foods)
khaja(qq)

let age = 20
function log(console_log){
    console.log(console_log)
}
log("saugat")
log("saugat is ",age," years old .")