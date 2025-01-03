import isObject from "./tasks/isObject.js";


console.log(isObject(String("hvcsdjh")));
console.log(isObject(new Set())); 
console.log(isObject([])); 
console.log(isObject(new Object())); 
console.log(isObject({})); 