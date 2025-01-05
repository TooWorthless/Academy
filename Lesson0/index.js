import isObject from "./tasks/isObject.js";
import parseInteger from "./tasks/parseInteger.js";
import includes from "./tasks/includes.js";
import parseFloat from "./tasks/parseFloat.js";
import split from "./tasks/split.js";
import parseBalance from "./tasks/parseBalance.js";
import countBalance1 from "./tasks/countBalance1.js";
import countEmoji from "./tasks/countEmoji.js";


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


/*
console.log("a,b,c".split(","));
console.log("hello world".split(" "));
console.log("test".split("e"));
console.log("123--456--789".split("--"));
console.log("no-divider".split(","));
console.log("ab##cd##ef".split("##"));
console.log("aaaaaa".split("aa"));
console.log("aaaabaaa".split("aaa"));  
*/
console.log(split("a,b,c", ","));
console.log(split("hello world", " "));
console.log(split("test", "e"));
console.log(split("123--456--789", "---"));
console.log(split("no-divider", ","));
console.log(split("ab##cd##ef", "##"));
console.log(split("aaaaaa", "aa"));
console.log(split("aaaabaaa", "aaa"));
console.log('\n\n');
/*
[ 'a', 'b', 'c' ]
[ 'hello', 'world' ]
[ 't', 'st' ]
[ '123', '456', '789' ]
[ 'no-divider' ]
[ 'ab', 'cd', 'ef' ]
[ '', '', '', '' ]
[ '', 'ab', '' ]
*/


console.log(parseBalance('My wallet balance is 14960 USDT'));
console.log(parseBalance('My wallet balance is 123456789.99 USD'));
console.log(parseBalance('My balance rest is 0.99 USDT')); 
console.log(parseBalance('dsfsdfdsf sdsdfsddf ssdf'));  
console.log('\n\n');
/*
14960
123456789.99
0.99
NaN
*/


console.log(countBalance1('Hello <@Kate />, you did your work well and I sent you 1000 USDT. <@Dmitrty /> was working at the weekend so I sent you 350 USDT. <@Max /> won 600 USDT'));
console.log(countBalance1('Hello 500 <@Kate />, you did your work well and I sent you 1000 USDT. <@Dmitrty /> was working at the weekend so I sent you 350 USDT. <@Max /> won 600 USDT'));
console.log(countBalance1('Hello 500 <@Kate />, you did your work well and I sent you USDT. <@Dmitrty /> was working at the weekend so I sent you 350 USDT. <@Max /> won 600 USDT'));
console.log('\n\n');
/*
{ kate: 1000, dmitrty: 350, max: 600 }
{ kate: 1000, dmitrty: 350, max: 600 }
{ dmitrty: 350, max: 600 }
*/


const case1 = '<@Kate />:apple: <@Max/>:like:<@alisa /> :like: received:apple::apple:';
const case2 = '<@Kate />:apple: <@Max/>:apple: :APPLE: :AppLe:<@alisa /> :like: received:apple::apple:';
const case3 = '<@Kate />:apple: <@Max/>:apple APPLE: AppLe:<@alisa /> :like: received:apple::apple:';
const case4 = '<@Kate />:apple: <@Max/>:like:<@alisa /> :like: received:apple::apple: <@kate /> alsdaksdjhsa <@KATE /> :apple: :apple:';
const case5 = '<@Kate />:apple: <@Max/><@olia/><@misha/><@dasha/><@alisa /> :like: received:apple::apple:  <@dima/><@vasia/><@gena/><@ihor/><@tolik />';
const case6 = ':apple: :apple: <@Kate />:apple: <@Max/><@alisa /> :like: received:apple::apple:';

console.log(countEmoji(case1, 'apple')); 
console.log(countEmoji(case2, 'apple')); 
console.log(countEmoji(case3, 'apple')); 
console.log(countEmoji(case4, 'apple')); 
console.log(countEmoji(case5, 'apple')); 
console.log(countEmoji(case6, 'apple')); 

// { kate: 1, max: 2, alisa: 2 }
// { kate: 1, max: 3, alisa: 2 }
// { kate: 1, max: 2, alisa: 2 }
// { kate: 5, max: 2, alisa: 2 }
// { kate: 1, max: 2, olia: 2, misha: 2, dasha: 2, alisa: 2, dima: 0, vasia: 0, gena: 0, ihor: 0, tolik: 0 }
// { kate: 1, max: 2, alisa: 2 }









