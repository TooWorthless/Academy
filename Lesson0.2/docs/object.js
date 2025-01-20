// 1. Object.create(proto, propertiesObject)
// Создает новый объект с указанным прототипом и опциональными свойствами.

// proto — объект, который станет прототипом нового объекта.
// propertiesObject — необязательный объект с дескрипторами свойств.

// const proto = { greet() { console.log("Hello"); } };
// const obj = Object.create(proto);
// obj.greet(); // "Hello"


// 2. Object.assign(target, ...sources)
// Копирует значения всех перечисляемых собственных свойств из одного или нескольких объектов в целевой объект.

// Возвращает модифицированный целевой объект.

// const target = { a: 1 };
// const source = { b: 2, c: 3 };
// Object.assign(target, source);
// console.log(target); // { a: 1, b: 2, c: 3 }


// 3. Object.keys(obj)
// Возвращает массив собственных перечисляемых ключей объекта.

// const obj = { a: 1, b: 2 };
// console.log(Object.keys(obj)); // ["a", "b"]


// 4. Object.values(obj)
// Возвращает массив значений свойств объекта.

// const obj = { a: 1, b: 2 };
// console.log(Object.values(obj)); // [1, 2]


// 5. Object.entries(obj)
// Возвращает массив пар [ключ, значение] объекта.

// const obj = { a: 1, b: 2 };
// console.log(Object.entries(obj)); // [["a", 1], ["b", 2]]


// 6. Object.seal(obj)
// Запрещает добавление или удаление свойств объекта, но позволяет изменять их значения.

// Возвращает запечатанный объект.

// const obj = { a: 1 };
// Object.seal(obj);
// obj.a = 2; // Работает
// delete obj.a; // Ошибка в строгом режиме


// 7. Object.isSealed(obj)
// Проверяет, является ли объект запечатанным.

// const obj = Object.seal({ a: 1 });
// console.log(Object.isSealed(obj)); // true


// 8. Object.freeze(obj)
// Запрещает добавление, удаление или изменение свойств объекта.

// Объект становится неизменяемым.

// const obj = Object.freeze({ a: 1 });
// obj.a = 2; // Ошибка в строгом режиме


// 9. Object.isFrozen(obj)
// Проверяет, является ли объект замороженным.

// const obj = Object.freeze({ a: 1 });
// console.log(Object.isFrozen(obj)); // true


// 10. Object.preventExtensions(obj)
// Запрещает добавление новых свойств в объект.

// Уже существующие свойства можно удалять или изменять.

// const obj = { a: 1 };
// Object.preventExtensions(obj);
// obj.b = 2; // Ошибка в строгом режиме


// 11. Object.is(obj1, obj2)
// Сравнивает два значения на строгое равенство.

// Отличие от ===: корректно работает с NaN и -0/+0.

// console.log(Object.is(NaN, NaN)); // true
// console.log(Object.is(-0, +0)); // false


// 12. Object.fromEntries(entries)
// Преобразует массив пар [ключ, значение] в объект.

// const entries = [["a", 1], ["b", 2]];
// const obj = Object.fromEntries(entries);
// console.log(obj); // { a: 1, b: 2 }