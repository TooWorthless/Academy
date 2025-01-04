import isObject from "./tasks/isObject.js";
import parseInteger from "./tasks/parseInteger.js";
import includes from "./tasks/includes.js";
import parseFloat from "./tasks/parseFloat.js";


console.log(isObject(String("hvcsdjh")));
console.log(isObject(new Set())); 
console.log(isObject([])); 
console.log(isObject(new Object())); 
console.log(isObject({})); 
console.log('\n\n'); 

/*
false
false
false
false
true
true
*/

console.log(parseInteger("21")); 
console.log(parseInteger("-21"));
console.log(parseInteger(" 21"));
console.log(parseInteger("  -21"));
console.log(parseInteger("2121ssdfsdfsdf asdasdasd"));
console.log(parseInteger("sdfsdfsdf sdfsdf 228"));
console.log(parseInteger("-123456789123456789122"));
console.log('\n\n'); 

/*
21
-21
21
-21
2121
NaN
-123456789123456800000
*/ 

console.log(includes("hello world", "world"));
console.log(includes("hello world", "world", 6));
console.log(includes("hello world", "world", 7));
console.log(includes("helloworld", "world"));
console.log(includes("helloworld", "i"));
console.log('\n\n'); 

/*
true
true
false
true
false
*/

console.log(parseFloat("123456.7"));
console.log(parseFloat("123456.789123451.34.56"));
console.log(parseFloat(".123456.78912.34.56"));
console.log(parseFloat("-123.456sASDASD sdasdasd"));
console.log(parseFloat("asdasdsaasd-123.456 sASDASD sdasdasd"));
console.log('\n\n');

/*
123456.7
123456.789123451
0.123456
-123.456
NaN
*/