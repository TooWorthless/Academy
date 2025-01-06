const person = {
    name: 'Alice',
    age: 30,
    address: '123 Main St'
};

// Деструктуризация объекта
const { name, age } = person;

console.log(name); // "Alice"
console.log(age);  // 30



const person2 = {
    name: 'Alice',
    age: 30,
    address: '123 Main St'
};

// Переименование переменных
const { name: fullName, age: yearsOld } = person2;

console.log(fullName);  // "Alice"
console.log(yearsOld);  // 30



const person3 = {
    name: 'Alice',
    address: {
        street: '123 Main St',
        city: 'Wonderland'
    }
};

// Деструктуризация вложенного объекта
const { address: { street, city } } = person3;

console.log(street); // "123 Main St"
console.log(city);   // "Wonderland"



const numbers = [10, 20, 30];

// Деструктуризация массива
const [first, second, third] = numbers;

console.log(first);  // 10
console.log(second); // 20
console.log(third);  // 30



const numbers2 = [10, 20, 30, 40, 50];

// Деструктуризация с остаточными элементами
const [first2, second2, ...rest] = numbers2;

console.log(first2);  // 10
console.log(second2); // 20
console.log(rest);   // [30, 40, 50]

