console.log(" this is the note of js ");
//variable banauni tarika comparae wit c inn js
/**
 * in c 
 * data_type variable_name = value ;
 * int age = 20;
 * 
 * in js 
 * let variable_name = value 
 * let age = 20
 * 
 * the only difference while creating the variable in c and js is dollar($) can be used as a special character 
 * let $name = "saugat"      ----> valid variable in js but not in c
 * 
 * 
 * in c we have to write the exact data type of data while creating the variable but in js we can use let every where
 *  const , int , float , char , double etc in c
 *  let , const in js  
*/

let name = "saugat"     // char name[] = "saugat";
let age = 20    // int age = 20;
let price = 18.5    // float price = 18.5;
console.log(name)//printf("%s",name);
console.log(age)//printf("%d",age);
console.log(price)//printf("%f",price);

//console.log("        ",var_name ,"   ",v_name,"           ","                             ",v_name," ")

  console.log("my name is ",name,". i am ",age," years old ."," i bought a pen which costs $",price,".")
// //printf("my name is    %s   . i am    %d   years old .    i bought a pen which costs $   %f    .",name,age,price);

// ARRAY banauni tarika 
/**
 * let var_name = [" "," "," "] -----> for string
 * let var_name = [1,2,3,4]  ------> for number
 */
 let fruit = ["apple","banana","mango"] // string array
 let marks = [20,33.4,10,4]  // number array
// array lai herni tarika
console.log(fruit) // full element herni tarika  --------> ["apple","banana","mango"] 
console.log(marks) //   "    "     "      "  ----------->  [20,33.4,10,4] 
console.log(fruit[1]) // each element herni index bata ---> banana
console.log(fruit[2]) //   "    "     "      "   -----> mango
console.log(marks[0]) //   "    "     "      "   -----> 20
console.log(marks[1]) //   "    "     "      "   -----> 33.4
// method haru ko use
// array ma kati ota element xa vanera herna lai length vanni method ko use garni ------>  method vanyako dot sanga lekhinxa. like --> v_name.method
console.log(fruit.length)  //  .length is method -----------> 3
console.log(marks.length)  //----------> 4
/**
 * ----------IMP----------
 * push , pop , unshift , shift methods haru use garda data change va ko hunxa
 * soo, push pop vai sakya pachi ko data log garda dekhinxa
 */

// array ko last index  ma element thapna ko lagi .push() method use hunxa 
fruit.push("belauti","naribel") 
console.log(fruit)
// array ko first index ma data add garna .unshift() use hunxa
marks.unshift(99,100,100.5)
console.log(marks)
// array ko last index  bata data baira nikalna .pop() method ko use hunxa
console.log(marks.pop()) // kun data nikalyako herna lagi
console.log(marks) // data pop vai sakya pachi array ko last element change vayo(paila last ma 4 thiyo aailay 10 xa)
// .shift () , array ko first index bata data pop garauna use hunxa 
console.log(fruit.shift());// array ko 1 index bata apple baira niskiyo
console.log(fruit) // aaba array banana bata suru hunxa
// array ko kun index ma k xa vanera herna ko lagi .at() method use hunxa
console.log(fruit.at(0))
// array ko element kun index ma xa vanera herna ko lagi .indexof() method use hunxa
console.log(marks.indexOf(100.5))
