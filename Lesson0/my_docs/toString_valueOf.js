// TOSTRING
// console.log(10.toString()); // "10"
console.log(true.toString()); // "true"
console.log(null.toString()); // "null"
console.log(undefined.toString()); // "undefined"

// Об'єкти:
const obj = { name: "Alice" };
console.log(obj.toString()); // "[object Object]"

// Перевизначення методу toString:
const customObj = {
    toString: function() {
        return "Custom Object String Representation";
    }
};
console.log(customObj.toString()); // "Custom Object String Representation"

// 1. Може бути викликаний під час конкатенації рядків, 
// автоматичному перетворенні об'єктів або примітивів до рядків 
// (наприклад, при використанні в шаблонних рядках або при виведенні в консоль).



// VALUEOF
console.log((10).valueOf()); // 10
console.log((true).valueOf()); // true
console.log((null).valueOf()); // null
console.log((undefined).valueOf()); // undefined

// Об'єкти:
const obj2 = { value: 100, valueOf: function() { return this.value; } };
console.log(obj2.valueOf()); // 100 (повертається значення поля value)

// 1. .valueOf() викликається автоматично в багатьох випадках, 
// коли JavaScript очікує отримати примітивне значення. 
// Наприклад, під час порівняння об'єктів або операцій з числами.

// 2. У порівняннях (наприклад, при операціях +, -, <, >, тощо) 
// спочатку викликається .valueOf() для об'єкта.




// Послідовність виклику .valueOf() і .toString()

// При використанні об'єктів або примітивів в певних операціях, 
// JavaScript зазвичай спершу викликає метод .valueOf(). 
// Якщо .valueOf() не дає бажаного результату (не повертає примітив), 
// тоді JavaScript звертається до методу .toString().

// Наприклад:
const obj3 = { value: 100, valueOf: function() { return this.value; }, toString: function() { return "Object"; } };

console.log(obj3 + 10); // 110, спочатку викликається valueOf(), потім додається 10
console.log(String(obj3)); // "100", викликається toString(), який повертає 100
