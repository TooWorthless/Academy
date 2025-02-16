import MyRegExp from "./myRegExp.js";

// Part 2

const text = "Hello, -  World .1234+";
const regexp = new MyRegExp(text);

//
regexp.match(/(?<=\s)\w+(?=\s)/);
// ['World', index: 10, input: 'Hello, -  World .1234+', groups: undefined]
regexp.match(/(?<=\s)\w+(?=\w)/); // = - cut current symbol
// ['Worl', index: 10, input: 'Hello, -  World .1234+', groups: undefined]
regexp.match(/(?<=\s)\w+(?:\w)/); // : - cut next symbol
// ['World', index: 10, input: 'Hello, -  World .1234+', groups: undefined]

regexp.match(/W[a-z]+(?:d)/i);
regexp.match(/W\w+(?:\w)/);
// ['World', index: 10, input: 'Hello, -  World .1234+', groups: undefined]

regexp.match(/\d+(?=[^\d])/i);
// ['1234', index: 17, input: 'Hello, -  World .1234+', groups: undefined]




























































