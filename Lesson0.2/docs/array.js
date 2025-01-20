// 1. Array.of(...elements)
// Создает новый массив из аргументов, независимо от их типа.

// const arr = Array.of(1, 2, 3);
// console.log(arr); // [1, 2, 3]


// 2. Array.from(arrayLike, mapFn, thisArg)
// Создает новый массив из массивоподобного или итерируемого объекта.

// mapFn — необязательная функция для преобразования элементов.
// const arr = Array.from("123", num => Number(num));
// console.log(arr); // [1, 2, 3]


// 3. Array.prototype.at(index)
// Возвращает элемент по заданному индексу, поддерживает отрицательные индексы.

// const arr = [10, 20, 30];
// console.log(arr.at(-1)); // 30


// 4. Array.prototype.concat(...arrays)
// Объединяет массивы в один, не изменяя исходные.

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// console.log(arr1.concat(arr2)); // [1, 2, 3, 4]


// 5. Array.prototype.every(callback, thisArg)
// Проверяет, удовлетворяют ли все элементы условию.

// Возвращает true, если все элементы проходят проверку.
// const arr = [2, 4, 6];
// console.log(arr.every(num => num % 2 === 0)); // true


// 6. Array.prototype.fill(value, start, end)
// Заполняет массив указанным значением.

// const arr = [1, 2, 3];
// arr.fill(0, 1, 3);
// console.log(arr); // [1, 0, 0]


// 7. Array.prototype.filter(callback, thisArg)
// Создает новый массив, содержащий элементы, прошедшие проверку.

// const arr = [1, 2, 3];
// console.log(arr.filter(num => num > 1)); // [2, 3]


// 8. Array.prototype.some(callback, thisArg)
// Проверяет, удовлетворяет ли хотя бы один элемент условию.

// const arr = [1, 2, 3];
// console.log(arr.some(num => num > 2)); // true


// 9. Array.prototype.find(callback, thisArg)
// Возвращает первый элемент, удовлетворяющий условию.

// const arr = [1, 2, 3];
// console.log(arr.find(num => num > 1)); // 2


// 10. Array.prototype.findIndex(callback, thisArg)
// Возвращает индекс первого элемента, удовлетворяющего условию.

// const arr = [1, 2, 3];
// console.log(arr.findIndex(num => num > 1)); // 1


// 11. Array.prototype.flat(depth)
// Создает новый массив, "разглаживая" вложенные массивы до указанной глубины.

// depth — глубина вложенности (по умолчанию 1).
// const arr = [1, [2, [3]]];
// console.log(arr.flat(2)); // [1, 2, 3]


// 12. Array.prototype.forEach(callback, thisArg)
// Выполняет функцию для каждого элемента массива.

// [1, 2, 3].forEach(num => console.log(num)); // 1 2 3


// 13. Array.prototype.map(callback, thisArg)
// Создает новый массив, применяя функцию к каждому элементу.

// const arr = [1, 2, 3];
// console.log(arr.map(num => num * 2)); // [2, 4, 6]


// 14. Array.prototype.reduce(callback, initialValue)
// Сводит массив к одному значению, применяя функцию к каждому элементу.

// const arr = [1, 2, 3];
// console.log(arr.reduce((acc, num) => acc + num, 0)); // 6


// 15. Array.prototype.reduceRight(callback, initialValue)
// То же, что reduce, но обрабатывает элементы справа налево.

// const arr = [1, 2, 3];
// console.log(arr.reduceRight((acc, num) => acc + num, 0)); // 6


// 16. Array.prototype.includes(value, start)
// Проверяет, содержит ли массив заданное значение.

// const arr = [1, 2, 3];
// console.log(arr.includes(2)); // true


// 17. Array.prototype.indexOf(value, start)
// Возвращает первый индекс значения или -1, если значение не найдено.

// const arr = [1, 2, 3];
// console.log(arr.indexOf(2)); // 1


// 18. Array.isArray(obj)
// Проверяет, является ли объект массивом.

// console.log(Array.isArray([1, 2, 3])); // true


// 19. Array.prototype.join(separator)
// Объединяет элементы массива в строку.

// const arr = [1, 2, 3];
// console.log(arr.join("-")); // "1-2-3"


// 20. Array.prototype.lastIndexOf(value, start)
// Возвращает последний индекс значения или -1, если значение не найдено.

// const arr = [1, 2, 3, 1];
// console.log(arr.lastIndexOf(1)); // 3


// 21. Array.prototype.slice(start, end)
// Возвращает новый массив, содержащий элементы от start до end (не включая end).

// const arr = [1, 2, 3];
// console.log(arr.slice(1, 2)); // [2]


// 22. Array.prototype.splice(start, deleteCount, ...items)
// Изменяет массив: добавляет/удаляет элементы.

// const arr = [1, 2, 3];
// arr.splice(1, 1, 4);
// console.log(arr); // [1, 4, 3]


// 23. Array.prototype.sort(compareFn)
// Сортирует массив.

// compareFn — функция сравнения.
// const arr = [3, 1, 2];
// arr.sort((a, b) => a - b);
// console.log(arr); // [1, 2, 3]


// 24. Array.prototype.toString()
// Возвращает строковое представление массива.

// const arr = [1, 2, 3];
// console.log(arr.toString()); // "1,2,3"


// 25. Array.prototype.values()
// Возвращает итерируемый объект для значений массива.

// for (const value of [1, 2, 3].values()) {
//   console.log(value); // 1, 2, 3
// }


// 26. Array.prototype.entries()
// Возвращает итерируемый объект для пар [индекс, значение].

// for (const [index, value] of [1, 2, 3].entries()) {
//   console.log(index, value); // 0 1, 1 2, 2 3
// }


// 27. Array.prototype.keys()
// Возвращает итерируемый объект для индексов массива.

// for (const key of [1, 2, 3].keys()) {
//   console.log(key); // 0, 1, 2
// }


// 28. Array.prototype.toReversed()
// Создает новый массив с элементами в обратном порядке.

// const arr = [1, 2, 3];
// console.log(arr.toReversed()); // [3, 2, 1]


// 29. Array.prototype.toSorted(compareFn)
// Создает новый отсортированный массив.

// const arr = [3, 1, 2];
// console.log(arr.toSorted((a, b) => a - b)); // [1, 2, 3]


// 30. Array.prototype.toSpliced(start, deleteCount, ...items)
// Создает новый массив с изменениями, подобно splice.

// const arr = [1, 2, 3];
// console.log(arr.toSpliced(1, 1, 4)); // [1, 4, 3]


// 31. Array.prototype.with(index, value)
// Создает новый массив, заменяя элемент по индексу.

// const arr = [1, 2, 3];
// console.log(arr.with(1, 4)); // [1, 4, 3]