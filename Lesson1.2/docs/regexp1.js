// Part 1

import MyRegExp from "./myRegExp.js";

const text = "Hello World 1234";
const regexp = new MyRegExp(text);

// simple search
regexp.match(/world/);
// null

regexp.match(/world/i); // i - ignore case
// [ 'World', index: 6, input: 'Hello World 1234', groups: undefined ]

regexp.match(/orld/);
// [ 'orld', index: 7, input: 'Hello World 1234', groups: undefined ]


// range
regexp.match(/[abcdefghijklmnopqrstuvwyx]/);
// [ 'e', index: 1, input: 'Hello World 1234', groups: undefined ]

regexp.match(/[abcdefghijklmnopqrstuvwyxABCDEFGHIJKLMNOPQRSTUVWYX]/);
// [ 'H', index: 0, input: 'Hello World 1234', groups: undefined ]

regexp.match(/[a-z]/);
// [ 'e', index: 1, input: 'Hello World 1234', groups: undefined ]

regexp.match(/[a-zA-Z]/);
// [ 'H', index: 0, input: 'Hello World 1234', groups: undefined ]

regexp.match(/[a-z]/i);
// [ 'H', index: 0, input: 'Hello World 1234', groups: undefined ]

regexp.match(/[a-z]/ig); // g - global search
// [
//     'H', 'e', 'l', 'l',
//     'o', 'W', 'o', 'r',
//     'l', 'd'
// ]

regexp.match(/[a-z][a-z][a-z][a-z][a-z]/i);
regexp.match(/[a-z]{5}/i);
regexp.match(/[a-z]{1,5}/i);
regexp.match(/[a-z]{1,7}/i);
regexp.match(/[a-z]+/i); // + - повторение паттерна до первого несовпадения 
// [ 'Hello', index: 0, input: 'Hello World 1234', groups: undefined ]

regexp.match(/[a-z]+/ig);
// [ 'Hello', 'World' ]

regexp.match(/[a-z ]+/ig);
// [ 'Hello World ' ]

regexp.match(/[a-z]*/i);
// [ 'Hello', index: 0, input: 'Hello World 1234', groups: undefined ]

regexp.match(/[a-z]*/ig);
// [
//     'Hello', '',
//     'World', '',
//     '', '',
//     '', '',
//     ''
// ]

regexp.match(/[0-9][a-z]+/ig);
// null
regexp.match(/[0-9]+[a-z]+/ig);
// null
regexp.match(/[a-z]+[0-9]/ig);
// null
regexp.match(/[a-z]+[0-9]+/ig);
// null

const newRegexp = new MyRegExp('Hello228 World 12345GG');

newRegexp.match(/[0-9][a-z]+/ig);
// [ '5GG' ]
newRegexp.match(/[a-z]+[0-9]/ig);
// [ 'Hello2' ]
newRegexp.match(/[0-9]+[a-z]+/ig);
// [ '12345GG' ]
newRegexp.match(/[a-z]+[0-9]+/ig);
// [ 'Hello228' ]

regexp.match(/[a-z0-9]+/ig);
['Hello', 'World', '1234']


// ignore range
console.log();
console.log();
regexp.match(/[^0-9]+/i); // ^ - ignore
// [
//     'Hello World ',
//     index: 0,
//     input: 'Hello World 1234',
//     groups: undefined
// ]

regexp.match(/[^ ]+/i);
regexp.match(/[^\s]+/i); // \s - space ignore
// [ 'Hello', index: 0, input: 'Hello World 1234', groups: undefined ]
regexp.match(/[^ ]+/ig);
// [ 'Hello', 'World', '1234' ]

regexp.match(/[^a-z]+/i);
// [ ' ', index: 5, input: 'Hello World 1234', groups: undefined ]
regexp.match(/[^a-z]+/ig);
// [ ' ', ' 1234' ]
regexp.match(/[^a-z\s]+/ig);
// [ '1234' ]


const newRegexp2 = new MyRegExp('Hello, -    Wor+ld . 12345GG');

newRegexp2.match(/[^a-z\s,-.+]/ig);
// [ '1', '2', '3', '4', '5' ]
newRegexp2.match(/[^a-z\s,-.+]+/ig);
// [ '12345' ]

// \w - [a-zA-Z0-9], \d(digits) - [0-9]
regexp.match(/[\w]+/g);
// [ 'Hello', 'World', '1234' ]
regexp.match(/[\d]+/g);
// [ '1234' ]
























