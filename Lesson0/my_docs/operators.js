const sum = 5 + 3; // 8
const difference = 5 - 3; // 2
const product = 5 * 3; // 15
const quotient = 6 / 3; // 2
const remainder = 7 % 3; // 1
const power = 2 ** 3; // 8

let a = 5;
a++; // a = 6

let a2 = 5;
a2--; // a = 4

const xorResult = 5 ^ 3; // 6, побитовая операция: 0101 ^ 0011 = 0110
const inverted = ~5; // -6, так как инвертирует 0101 до 1010

console.log(5 > 3); // true
console.log(5 < 3); // false

console.log(true && true);  // true
console.log(true && false); // false

console.log(true || false); // true
console.log(false || false); // false

const age = 18;
const message = age >= 18 ? 'Adult' : 'Minor';
console.log(message); // "Adult"

const user = { name: 'Alice' };
console.log(user?.address?.city); // undefined, не вызывает ошибку

const name = null;
const defaultName = 'Guest';
console.log(name ?? defaultName); // "Guest"

console.log(!true);  // false
console.log(!false); // true