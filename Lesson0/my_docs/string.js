

// String.prototype.at
console.log("hello".at(0)); // "h"
console.log("hello".at(4)); // "o"
console.log("hello".at(5)); // undefined (індекс виходить за межі)
console.log("hello".at(-1)); // "o"
console.log("hello".at(-5)); // "h"
console.log("hello".at(-6)); // undefined (індекс виходить за межі)
console.log("".at(0)); // undefined (порожній рядок)
console.log("hello".at(1.5)); // "e" (округлюється до 1)
console.log("hello".at(NaN)); // "h" (NaN стає 0)
console.log("hello".at(Infinity)); // undefined (індекс виходить за межі)
console.log("hello".at(undefined)); // "h" (undefined стає 0)
console.log("hello".at(null)); // "h" (null стає 0)
console.log("hello".at([])); // "h" (порожній масив стає 0)
console.log("hello".at([2])); // "l" (масив з одним числом перетворюється в це число)
console.log("hello".at({})); // "h" (об'єкт стає 0)
console.log("hello".at(Symbol())); // TypeError: Cannot convert a Symbol to a number
console.log("hello".at(true)); // "e" (boolean перетворюється на 1)
console.log("hello".at(false)); // "h" (boolean перетворюється на 0)
console.log("hello".at("2")); // "l" (рядок перетворюється на число)
console.log("hello".at("abc")); // "h" (некоректне значення стає 0)

// Приймає некоректні аргументи, які несподівано перетворюються на числа.
// Повертає undefined, якщо індекс виходить за межі.



// String.prototype.chartAt
console.log("hello".charAt(0)); // "h"
console.log("hello".charAt(4)); // "o"
console.log("hello".charAt(5)); // "" (індекс виходить за межі)
console.log("".charAt(0)); // "" (порожній рядок)
console.log("hello".charAt(-1)); // "" (негативний індекс)
console.log("hello".charAt(1.5)); // "e" (округлюється до 1)
console.log("hello".charAt(NaN)); // "h" (NaN стає 0)
console.log("hello".charAt(Infinity)); // "" (індекс виходить за межі)
console.log("hello".charAt(undefined)); // "h" (undefined стає 0)
console.log("hello".charAt(null)); // "h" (null стає 0)
console.log("hello".charAt([])); // "h" (порожній масив стає 0)
console.log("hello".charAt([2])); // "l" (масив з одним числом перетворюється в це число)
console.log("hello".charAt([2, 3])); // "h" (ігнорується все після першого значення)
console.log("hello".charAt({})); // "h" (об'єкт стає 0)
console.log("hello".charAt(() => { })); // "h" (функція стає 0)
console.log("hello".charAt(Symbol())); // TypeError: Cannot convert a Symbol to a string
console.log("hello".charAt(true)); // "e" (boolean перетворюється на 1)
console.log("hello".charAt(false)); // "h" (boolean перетворюється на 0)
console.log("hello".charAt("2")); // "l" (рядок перетворюється на число)
console.log("hello".charAt("abc")); // "h" (некоректне значення стає 0)

// Приймає аргументи, які несподівано перетворюються на числа (NaN, undefined, об'єкти, масиви).
// Повертає "", коли індекс виходить за межі, без жодного попередження.


// String.prototype.fromCharCode
console.log(String.fromCharCode(65)); // "A"
console.log(String.fromCharCode(97, 98, 99)); // "abc"
console.log(String.fromCharCode(8364)); // "€"
console.log(String.fromCharCode(55357, 56835)); // "🐣" (сурогатна пара)
console.log(String.fromCharCode()); // "" (без аргументів)
console.log(String.fromCharCode(-1)); // "\uffff" (обробляє як 0xFFFF)
console.log(String.fromCharCode(0)); // "\0"
console.log(String.fromCharCode(1114111)); // "�" (зайве значення)
console.log(String.fromCharCode(3.5)); // "\u0003" (округлюється до 3)
console.log(String.fromCharCode(NaN)); // "\0" (NaN стає 0)
console.log(String.fromCharCode(Infinity)); // "\0" (Infinity стає 0)
console.log(String.fromCharCode(null)); // "\0" (null стає 0)
console.log(String.fromCharCode(undefined)); // "\0" (undefined стає 0)
console.log(String.fromCharCode([])); // "\0" (масив стає 0)
console.log(String.fromCharCode([65])); // "A" (масив з одним елементом)
console.log(String.fromCharCode([65, 66])); // "A" (ігнорується все після першого значення)
console.log(String.fromCharCode({})); // "\0" (об'єкт стає 0)
console.log(String.fromCharCode(true)); // "\u0001" (boolean true стає 1)
console.log(String.fromCharCode(false)); // "\0" (boolean false стає 0)

// Повертає символи навіть для від'ємних значень чи значень, більших за 0xFFFF.
// Ігнорує частину даних, якщо передано більше значень, ніж потрібно.



// String.prototype.charCodeAt
console.log("hello".charCodeAt(0)); // 104
console.log("hello".charCodeAt(4)); // 111
console.log("hello".charCodeAt(5)); // NaN (індекс виходить за межі)
console.log("hello".charCodeAt(-1)); // NaN (негативний індекс)
console.log("hello".charCodeAt(1.5)); // 101 (округлюється до 1)
console.log("hello".charCodeAt(NaN)); // 104 (NaN стає 0)
console.log("hello".charCodeAt(Infinity)); // NaN (індекс виходить за межі)
console.log("hello".charCodeAt(undefined)); // 104 (undefined стає 0)
console.log("hello".charCodeAt(null)); // 104 (null стає 0)
console.log("hello".charCodeAt([])); // 104 (масив стає 0)
console.log("hello".charCodeAt([2])); // 108 (масив з одним числом)
console.log("hello".charCodeAt([2, 3])); // 104 (ігнорується все після першого значення)
console.log("hello".charCodeAt({})); // NaN (об'єкт не конвертується в число)
console.log("hello".charCodeAt(Symbol())); // TypeError: Cannot convert a Symbol to a number
console.log("hello".charCodeAt(true)); // 101 (boolean true стає 1)
console.log("hello".charCodeAt(false)); // 104 (boolean false стає 0)
console.log("hello".charCodeAt("2")); // 108 (рядок перетворюється на число)
console.log("hello".charCodeAt("abc")); // 104 (некоректне значення стає 0)

// Може несподівано перетворювати некоректні аргументи на числа.
// Повертає NaN, якщо індекс виходить за межі.



// String.prototype.concat
console.log("hello".concat(" world")); // "hello world"
console.log("hello".concat("!", " How are you?")); // "hello! How are you?"
console.log("".concat("Test")); // "Test" (порожній рядок + значення)
console.log("hello".concat()); // "hello" (без аргументів)
console.log("hello".concat(null)); // "hellonull"
console.log("hello".concat(undefined)); // "helloundefined"
console.log("hello".concat(123)); // "hello123" (число стає рядком)
console.log("hello".concat(true)); // "hellotrue" (boolean стає рядком)
console.log("hello".concat([])); // "hello" (порожній масив стає порожнім рядком)
console.log("hello".concat([1, 2, 3])); // "hello1,2,3" (масив перетворюється у рядок)
console.log("hello".concat({})); // "hello[object Object]" (об'єкт перетворюється на рядок)
console.log("hello".concat(() => { })); // "hello() => {}" (функція стає її текстовим представленням)
console.log("hello".concat(Symbol("test"))); // TypeError: Cannot convert a Symbol to a string
console.log("hello".concat(Infinity)); // "helloInfinity"
console.log("hello".concat(NaN)); // "helloNaN"
console.log("hello".concat(new Date())); // "helloTue Jan 06 2025..." (рядкове представлення дати)
console.log("hello".concat("world".toUpperCase())); // "helloWORLD"
console.log("hello".concat(" ", "world".length)); // "hello 5"
console.log("hello".concat(null, undefined, 42)); // "hellonullundefined42"

// Автоматично конвертує аргументи у рядки, що може призводити до неочікуваних результатів.
// Викликає TypeError, якщо аргументом є Symbol.



// String.prototype.endsWith
console.log("hello world".endsWith("world")); // true
console.log("hello world".endsWith("world!")); // false
console.log("hello world".endsWith("")); // true (порожній суфікс завжди true)
console.log("hello world".endsWith("world", 11)); // true (довжина рядка врахована)
console.log("hello world".endsWith("hello", 5)); // true
console.log("hello world".endsWith("world", 5)); // false
console.log("hello world".endsWith()); // false (без аргументів)
console.log("hello world".endsWith(undefined)); // false (undefined стає рядком "undefined")
console.log("hello world".endsWith(null)); // false (null стає рядком "null")
console.log("hello world".endsWith([])); // false (порожній масив стає "")
console.log("hello world".endsWith([1, 2, 3])); // false (масив стає "1,2,3")
console.log("hello world".endsWith({})); // false (об'єкт стає "[object Object]")
console.log("hello world".endsWith(Symbol("test"))); // TypeError: Cannot convert a Symbol to a string
console.log("hello world".endsWith(NaN)); // false (NaN стає "NaN")
console.log("hello world".endsWith("world", NaN)); // false (NaN обробляється як 0)
console.log("hello world".endsWith("world", Infinity)); // true (Infinity обробляється як довжина рядка)
console.log("hello world".endsWith("w", 11)); // false (чутливий до регістру)
console.log("hello world".endsWith("w", 6)); // true
console.log("hello world".endsWith("world", -1)); // false (негативний індекс обробляється як 0)

// Приймає undefined, null, об'єкти, і неочікувано конвертує їх у рядки.
// Викликає TypeError, якщо передати Symbol.



// String.prototype.includes
console.log("hello world".includes("world")); // true
console.log("hello world".includes("world!")); // false
console.log("hello world".includes("")); // true (порожній рядок завжди true)
console.log("hello world".includes("world", 6)); // true
console.log("hello world".includes("hello", 5)); // false
console.log("hello world".includes()); // false (без аргументів)
console.log("hello world".includes(undefined)); // false (undefined стає "undefined")
console.log("hello world".includes(null)); // false (null стає "null")
console.log("hello world".includes([])); // false (порожній масив стає "")
console.log("hello world".includes([1, 2, 3])); // false (масив стає "1,2,3")
console.log("hello world".includes({})); // false (об'єкт стає "[object Object]")
console.log("hello world".includes(Symbol("test"))); // TypeError: Cannot convert a Symbol to a string
console.log("hello world".includes(NaN)); // false (NaN стає "NaN")
console.log("hello world".includes("world", NaN)); // true (NaN обробляється як 0)
console.log("hello world".includes("world", Infinity)); // false (індекс виходить за межі)
console.log("hello world".includes("w")); // true
console.log("hello world".includes("W")); // false (чутливий до регістру)
console.log("hello world".includes(" ", 5)); // true
console.log("hello world".includes("world", -1)); // true (негативний індекс обробляється як 0)

// Приймає некоректні аргументи та несподівано конвертує їх у рядки.
// Викликає TypeError, якщо передати Symbol.



// String.prototype.indexOf
console.log("hello world".indexOf("world")); // 6
console.log("hello world".indexOf("world!")); // -1
console.log("hello world".indexOf("")); // 0 (порожній рядок знайдений на початку)
console.log("hello world".indexOf("world", 6)); // 6
console.log("hello world".indexOf("hello", 5)); // -1
console.log("hello world".indexOf()); // -1 (без аргументів)
console.log("hello world".indexOf(undefined)); // -1 (undefined стає "undefined")
console.log("hello world".indexOf(null)); // -1 (null стає "null")
console.log("hello world".indexOf([])); // 0 (порожній масив стає порожнім рядком)
console.log("hello world".indexOf([1, 2, 3])); // -1 (масив стає "1,2,3")
console.log("hello world".indexOf({})); // -1 (об'єкт стає "[object Object]")
console.log("hello world".indexOf(Symbol("test"))); // TypeError: Cannot convert a Symbol to a string
console.log("hello world".indexOf(NaN)); // -1 (NaN стає "NaN")
console.log("hello world".indexOf("world", NaN)); // 6 (NaN обробляється як 0)
console.log("hello world".indexOf("world", Infinity)); // -1 (індекс виходить за межі)
console.log("hello world".indexOf("w")); // 6
console.log("hello world".indexOf("W")); // -1 (чутливий до регістру)
console.log("hello world".indexOf(" ", 5)); // 5
console.log("hello world".indexOf("world", -1)); // 6 (негативний індекс обробляється як 0)

// Автоматично конвертує некоректні аргументи у рядки.
// Викликає TypeError, якщо передати Symbol.



// String.prototype.lastIndexOf
console.log("hello world world".lastIndexOf("world")); // 12
console.log("hello world".lastIndexOf("world!")); // -1
console.log("hello world".lastIndexOf("")); // 11 (порожній рядок знайдений в кінці)
console.log("hello world".lastIndexOf("world", 6)); // 6
console.log("hello world".lastIndexOf("hello", 5)); // 0
console.log("hello world".lastIndexOf()); // -1 (без аргументів)
console.log("hello world".lastIndexOf(undefined)); // -1 (undefined стає "undefined")
console.log("hello world".lastIndexOf(null)); // -1 (null стає "null")
console.log("hello world".lastIndexOf([])); // 11 (порожній масив стає порожнім рядком)
console.log("hello world".lastIndexOf([1, 2, 3])); // -1 (масив стає "1,2,3")
console.log("hello world".lastIndexOf({})); // -1 (об'єкт стає "[object Object]")
console.log("hello world".lastIndexOf(Symbol("test"))); // TypeError: Cannot convert a Symbol to a string
console.log("hello world".lastIndexOf(NaN)); // -1 (NaN стає "NaN")
console.log("hello world".lastIndexOf("world", NaN)); // -1 (NaN обробляється як 0)
console.log("hello world".lastIndexOf("world", Infinity)); // 6 (Infinity не впливає)
console.log("hello world".lastIndexOf("w")); // 6
console.log("hello world".lastIndexOf("W")); // -1 (чутливий до регістру)
console.log("hello world".lastIndexOf(" ", 5)); // 5
console.log("hello world".lastIndexOf("world", -1)); // -1 (негативний індекс обробляється як 0)

// Чутливість до регістру може викликати труднощі.
// Некоректні аргументи конвертуються у рядки.
// Викликає TypeError, якщо передати Symbol.



// String.prototype.match
console.log("hello world".match(/world/)); // ["world"]
console.log("hello world".match(/world/g)); // ["world"]
console.log("hello world world".match(/world/g)); // ["world", "world"]
console.log("hello world".match(/World/i)); // ["world"] (ігнорує регістр)
console.log("hello world".match(/hello|world/)); // ["hello"]
console.log("hello world".match("world")); // TypeError: Argument must be a RegExp
console.log("hello world".match(undefined)); // null (undefined не викликає помилку)
console.log("hello world".match(null)); // TypeError: Cannot convert null to object
console.log("hello world".match(/z/)); // null (немає відповідності)
console.log("hello world".match(/z/g)); // null (немає відповідності)
console.log("hello world".match(/o/g)); // ["o", "o"]
console.log("hello world".match(/o/)); // ["o"]
console.log("hello world".match([])); // TypeError: Argument must be a RegExp
console.log("hello world".match({})); // TypeError: Argument must be a RegExp
console.log("hello world".match(/o/g).length); // 2
console.log("hello world".match(/w|l/g)); // ["l", "l", "l", "w"]
console.log("hello world".match(/[a-z]/g)); // ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]
console.log("12345".match(/\d/g)); // ["1", "2", "3", "4", "5"]
console.log("hello123".match(/\d+/)); // ["123"]
console.log("hello".match(/[^a-z]/)); // null (лише літери)

// Якщо аргумент не є регулярним виразом, метод може викликати помилку.
// Повертає null, якщо немає відповідностей, що потребує додаткової перевірки.



// String.prototype.matchAll
for (let match of "test1 test2 test3".matchAll(/test\d/g)) {
    console.log(match[0]); // test1, test2, test3
}
console.log([... "hello world".matchAll(/o/g)]); // [ ["o"], ["o"] ]
console.log([... "hello world".matchAll(/o./g)]); // [ ["or"] ]
console.log([... "hello123world456".matchAll(/\d+/g)]); // [ ["123"], ["456"] ]
console.log("hello".matchAll()); // TypeError: Missing argument
console.log("hello".matchAll("o")); // TypeError: First argument must be a RegExp
console.log([... "hello".matchAll(/z/g)]); // [] (порожній масив)
console.log([... "".matchAll(/./g)]); // [] (порожній рядок не має збігів)
console.log([... "a b c".matchAll(/\w/g)]); // [ ["a"], ["b"], ["c"] ]
console.log([... "aaa".matchAll(/a{2}/g)]); // [ ["aa"] ]
console.log([... "123abc".matchAll(/\D/g)]); // [ ["a"], ["b"], ["c"] ]

// Аргумент обов’язково має бути регулярним виразом, інакше викликається TypeError.



// String.prototype.normalize
console.log("é".normalize("NFC")); // "é"
console.log("é".normalize("NFD")); // "é"
console.log("\u0041\u0301".normalize("NFC")); // "Á"
console.log("\u0041\u0301".normalize("NFD")); // "Á"
console.log("test".normalize()); // "test" (за замовчуванням NFC)
console.log("test".normalize("INVALID")); // RangeError: Invalid normalization form
console.log("𝔘𝔫𝔦𝔠𝔬𝔡𝔢".normalize("NFKC")); // "Unicode"
console.log("A\u0301".normalize("NFD").length); // 2 (розділення символів)
console.log("A\u0301".normalize("NFC").length); // 1 (об'єднання символів)
console.log("".normalize("NFD")); // "" (порожній рядок не змінюється)
console.log("é".normalize(null)); // "é" (null обробляється як NFC)
console.log("é".normalize(undefined)); // "é" (undefined обробляється як NFC)

// Некоректні значення форми нормалізації (INVALID) викликають RangeError.



// String.prototype.padEnd
console.log("hello".padEnd(10, ".")); // "hello....."
console.log("hello".padEnd(10)); // "hello     "
console.log("hello".padEnd(3)); // "hello" (довжина вже більша)
console.log("".padEnd(5, "x")); // "xxxxx" (порожній рядок доповнюється)
console.log("test".padEnd(7, "123")); // "test123"
console.log("test".padEnd(9, "123")); // "test12312"
console.log("test".padEnd(10, "")); // "test" (порожній рядок не додається)
console.log("test".padEnd(10, null)); // "testnullnu" (null стає рядком)
console.log("test".padEnd(10, undefined)); // "testundef" (undefined стає рядком)
console.log("test".padEnd(10, {})); // "test[obje" (об'єкт стає "[object Object]")
console.log("test".padEnd(10, Symbol("x"))); // TypeError: Cannot convert a Symbol to a string
console.log("test".padEnd(20, " ")); // "test                "
console.log("test".padEnd(Infinity, ".")); // RangeError: Invalid string length

// Символи додаються навіть із некоректними типами (null, undefined, об’єкт).
// Викликає RangeError при довжині, що перевищує допустиму.



// String.prototype.padStart
console.log("hello".padStart(10, ".")); // ".....hello"
console.log("hello".padStart(10)); // "     hello"
console.log("hello".padStart(3)); // "hello" (довжина вже більша)
console.log("".padStart(5, "x")); // "xxxxx" (порожній рядок доповнюється)
console.log("test".padStart(7, "123")); // "123test"
console.log("test".padStart(9, "123")); // "123123tes"
console.log("test".padStart(10, "")); // "test" (порожній рядок не додається)
console.log("test".padStart(10, null)); // "nullnutest" (null стає рядком)
console.log("test".padStart(10, undefined)); // "undefinetest" (undefined стає рядком)
console.log("test".padStart(10, {})); // "[objectObtest" (об'єкт стає "[object Object]")
console.log("test".padStart(10, Symbol("x"))); // TypeError: Cannot convert a Symbol to a string
console.log("test".padStart(20, " ")); // "                test"
console.log("test".padStart(Infinity, ".")); // RangeError: Invalid string length

// Аналогічно padEnd, некоректні типи обробляються несподівано.



// String.prototype.repeat
console.log("hello".repeat(3)); // "hellohellohello"
console.log("hello".repeat(0)); // "" (повертає порожній рядок)
console.log("hello".repeat(-1)); // RangeError: Invalid count value
console.log("hello".repeat(1)); // "hello"
console.log("hello".repeat(1.5)); // "hello" (округлюється до цілого)
console.log("hello".repeat(NaN)); // "" (NaN обробляється як 0)
console.log("hello".repeat(Infinity)); // RangeError: Invalid count value
console.log("hello".repeat(null)); // "" (null обробляється як 0)
console.log("hello".repeat(undefined)); // "" (undefined обробляється як 0)
console.log("hello".repeat(true)); // "hello" (true обробляється як 1)
console.log("hello".repeat(false)); // "" (false обробляється як 0)
console.log("hello".repeat(2e3)); // "hellohello..." (працює для великих значень)

// Викликає RangeError для негативних або нескінченних значень.
// Аргументи NaN, null, undefined мають несподівану поведінку.



// String.prototype.replace
console.log("hello world".replace("world", "everyone")); // "hello everyone"
console.log("hello world".replace(/world/, "everyone")); // "hello everyone"
console.log("hello world world".replace("world", "everyone")); // "hello everyone world"
console.log("hello world".replace(/world/g, "everyone")); // "hello everyone"
console.log("hello world".replace(/(hello) (world)/, "$2 $1")); // "world hello"
console.log("hello world".replace(/world/, (match) => match.toUpperCase())); // "hello WORLD"
console.log("hello world".replace("world", null)); // "hello null"
console.log("hello world".replace("world", undefined)); // "hello undefined"
console.log("hello world".replace(/o/g, (match, offset) => offset)); // "h0ll4 w7rld"

// Замінник автоматично конвертується у рядок, навіть якщо це null, undefined чи об’єкт.



// String.prototype.replaceAll
console.log("hello world world".replaceAll("world", "everyone")); // "hello everyone everyone"
console.log("hello world".replaceAll(/o/g, "0")); // "hell0 w0rld"
console.log("hello world world".replaceAll(/world/g, "everyone")); // "hello everyone everyone"
console.log("hello world".replaceAll("world", "everyone")); // "hello everyone"
console.log("hello world".replaceAll("o", (match) => match.toUpperCase())); // "hellO wOrld"
console.log("hello world".replaceAll("world", null)); // "hello null"
console.log("hello world".replaceAll("world", undefined)); // "hello undefined"
console.log("hello world".replaceAll("o", "")); // "hell wrld" (видаляє "o")
console.log("hello world".replaceAll(/o/g, (match, offset) => offset)); // "hell0 w7rld"
console.log("hello world".replaceAll("world", (match) => match.toUpperCase())); // "hello WORLD"
console.log("hello world".replaceAll(/world/g, 123)); // "hello 123 123"

// Аналогічно методу replace, замінники можуть бути неочікуваними (null, undefined).
// Приймає лише регулярні вирази з глобальним флагом g.



// String.prototype.search
console.log("hello world".search("world")); // 6
console.log("hello world".search(/world/)); // 6
console.log("hello world".search(/world/i)); // 6 (ігнорує регістр)
console.log("hello world".search("earth")); // -1
console.log("hello world".search(/hello/)); // 0
console.log("hello world".search(/o/g)); // 4
console.log("hello world".search(/o/)); // 4
console.log("hello world".search(null)); // TypeError: Argument must be a RegExp
console.log("hello world".search(undefined)); // TypeError: Argument must be a RegExp
console.log("hello world".search("world", 6)); // 6 (початковий індекс не впливає)
console.log("hello world".search([])); // TypeError: Argument must be a RegExp
console.log("hello world".search(Symbol("test"))); // TypeError: Cannot convert a Symbol to a string

// Потрібно передавати регулярний вираз, інакше буде викликано TypeError.



// String.prototype.slice
console.log("hello world".slice(0, 5)); // "hello"
console.log("hello world".slice(6)); // "world"
console.log("hello world".slice(-5)); // "world"
console.log("hello world".slice(0, -6)); // "hello"
console.log("hello world".slice(2, -3)); // "llo wor"
console.log("hello world".slice(-6, -3)); // "wor"
console.log("hello world".slice(3, 3)); // "" (пустий рядок)
console.log("hello world".slice(5, 3)); // "" (початковий індекс більший за кінцевий)
console.log("hello world".slice("5", 10)); // " world" (стрічковий індекс)
console.log("hello world".slice(null, 5)); // "hello" (null обробляється як 0)
console.log("hello world".slice(undefined, 5)); // "hello" (undefined обробляється як 0)
console.log("hello world".slice(NaN, 5)); // "hello" (NaN обробляється як 0)
console.log("hello world".slice(Symbol("test"), 5)); // TypeError: Cannot convert a Symbol to a string

// null, undefined, NaN можуть бути автоматично оброблені як індекси, але надають неочікувані результати.
// Не підтримує символи (викликає TypeError).



// String.prototype.split
console.log("hello world".split(" ")); // ["hello", "world"]
console.log("hello world".split("o")); // ["hell", " w", "rld"]
console.log("hello world".split("")); // ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
console.log("hello world".split("l")); // ["he", "", "o wor", "d"]
console.log("hello world".split(/o/)); // ["hell", " w", "rld"]
console.log("hello world".split(" ", 1)); // ["hello"] (обмежує кількість елементів)
console.log("hello world".split()); // ["hello world"] (без роздільника)
console.log("hello world".split(undefined)); // ["hello world"] (undefined обробляється як роздільник за замовчуванням)
console.log("hello world".split(null)); // ["hello world"] (null обробляється як роздільник за замовчуванням)
console.log("hello world".split(Symbol("split"))); // TypeError: Cannot convert a Symbol to a string

// Якщо передати undefined або null як роздільник, повертається весь рядок в масиві.
// Потрібно бути обережним з регулярними виразами та типами.



// String.prototype.startsWith
console.log("hello world".startsWith("hello")); // true
console.log("hello world".startsWith("world")); // false
console.log("hello world".startsWith("h")); // true
console.log("hello world".startsWith(" ", 5)); // true (починається з пробілу після 5 символів)
console.log("hello world".startsWith("H")); // false (регістр має значення)
console.log("hello world".startsWith("world", 6)); // true (починається з "world" з індексу 6)
console.log("hello world".startsWith("world", 0)); // false (не збігається з початку)
console.log("hello world".startsWith("world", NaN)); // true (NaN обробляється як 0)
console.log("hello world".startsWith("hello", null)); // true (null обробляється як 0)
console.log("hello world".startsWith(Symbol("test"))); // TypeError: Cannot convert a Symbol to a string

// Якщо передати NaN або null як індекс, вони інтерпретуються як 0.



// String.prototype.substring
console.log("hello world".substring(0, 5)); // "hello"
console.log("hello world".substring(6)); // "world"
console.log("hello world".substring(-3, -1)); // "world" (негативні індекси трактуються як 0)
console.log("hello world".substring(5, 0)); // "hello" (індекси міняються місцями)
console.log("hello world".substring(6, 11)); // "world"
console.log("hello world".substring(0, 0)); // "" (порожній рядок)
console.log("hello world".substring(5, 5)); // "" (порожній рядок)
console.log("hello world".substring(NaN, 5)); // "hello" (NaN трактується як 0)
console.log("hello world".substring(undefined, 5)); // "hello" (undefined трактується як 0)
console.log("hello world".substring(0, Symbol("test"))); // TypeError: Cannot convert a Symbol to a string
console.log("hello world".substring(10, 100)); // "world" (100 виходить за межі рядка, але обробляється правильно)

// Негативні індекси автоматично інтерпретуються як 0, що не завжди бажано.
// Передача недійсних значень, таких як NaN або undefined, не викликає помилок, але результат може бути неочікуваним.



// String.prototype.toLowerCase
console.log("HELLO WORLD".toLowerCase()); // "hello world"
console.log("Hello World".toLowerCase()); // "hello world"
console.log("hello world".toLowerCase()); // "hello world"
console.log("Привет Мир".toLowerCase()); // "привет мир" (кирилиця також перетворюється)
console.log("12345".toLowerCase()); // "12345" (цифри не змінюються)
console.log("!@#$%".toLowerCase()); // "!@#$%" (спеціальні символи не змінюються)
console.log("Hello 123".toLowerCase()); // "hello 123"
console.log("hello world".toLowerCase(5)); // "hello world" (аргумент не має ефекту)
console.log("HELLO".toLowerCase(100)); // "hello" (аргумент не має ефекту)

// Метод працює коректно, однак результат може не змінити цифри чи спеціальні символи.



// String.prototype.toUpperCase
console.log("hello world".toUpperCase()); // "HELLO WORLD"
console.log("Hello World".toUpperCase()); // "HELLO WORLD"
console.log("HELLO WORLD".toUpperCase()); // "HELLO WORLD"
console.log("привет мир".toUpperCase()); // "ПРИВЕТ МИР" (кирилиця також перетворюється)
console.log("12345".toUpperCase()); // "12345" (цифри не змінюються)
console.log("!@#$%".toUpperCase()); // "!@#$%" (спеціальні символи не змінюються)
console.log("Hello 123".toUpperCase()); // "HELLO 123"
console.log("hello world".toUpperCase(5)); // "HELLO WORLD" (аргумент не має ефекту)
console.log("hello".toUpperCase(100)); // "HELLO" (аргумент не має ефекту)

// Коректно працює для алфавітних символів, не змінюючи цифри або спеціальні символи.



// String.prototype.trim
console.log(" ".repeat(1000) + "hello world" + " ".repeat(1000).trim());  // "hello world" (очень длинный ввод)
console.log(null.trim());  // Ошибка, потому что null не имеет метода trim()
console.log(undefined.trim());  // Ошибка, потому что undefined не имеет метода trim()
console.log((12345).toString().trim());  // "12345" (метод trim работает с числами, конвертированными в строку)
console.log("   123  ".trim());  // "123" (работает корректно с пробелами)
console.log("hello\u200Bworld".trim());  // "hello\u200Bworld" (нульовая ширина пробела не удаляется, так как они не считаются пробелами)
console.log("hello\u202Fworld".trim());  // "hello\u202Fworld" (символы разделителей не удаляются)
console.log("hello world".trim(NaN));  // "hello world" (метод игнорирует аргумент, работает корректно)
console.log({ key: "value" }.trim());  // Ошибка, так как объект не имеет метода trim()
console.log(" ".repeat(10000) + "hello world" + " ".repeat(10000).trim());  // "hello world" (работает с очень большими строками)
console.log("\u200Chello world\u200C".trim());  // "hello world" (незаметные символы удаляются)
console.log({}.toString().trim());  // "" (метод toString() объекта превращает его в строку, результат будет пустой)
console.log(Symbol('sym').toString().trim());  // "Symbol(sym)" (преобразуется в строку, но метод trim не имеет смысла)



// String.prototype.trimEnd
console.log("hello world   ".trimEnd()); // "hello world"
console.log("hello world  \n\t".trimEnd()); // "hello world" (видаляє табуляції та нові рядки)
console.log("   hello world".trimEnd()); // "   hello world"
console.log("hello world".trimEnd()); // "hello world" (немає пробілів)
console.log("\t hello world".trimEnd()); // "\t hello world" (не впливає на табуляцію)
console.log("hello world    ".trimEnd()); // "hello world"
console.log("\u200Bhello world".trimEnd()); // "hello world" (видаляє нульову ширину пробіла)
console.log("hello world\uFEFF".trimEnd()); // "hello world" (видаляє BOM символи)

// Підтримує всі типи пробілів та спеціальних символів для видалення з кінця.



// String.prototype.trimStart
console.log("   hello world".trimStart()); // "hello world"
console.log("\t hello world".trimStart()); // "hello world"
console.log("hello world".trimStart()); // "hello world" (немає пробілів)
console.log("   hello world".trimStart()); // "hello world"
console.log("hello world   ".trimStart()); // "hello world   "
console.log("\u200Bhello world".trimStart()); // "hello world" (видаляє нульову ширину пробіла)
console.log("hello world\uFEFF".trimStart()); // "hello world" (видаляє BOM символи)

// Підтримує всі типи пробілів та спеціальних символів для видалення з кінця.



// String.prototype.localeCompare
console.log("a".localeCompare("b")); // -1 (a < b)
console.log("b".localeCompare("a")); // 1 (b > a)
console.log("a".localeCompare("a")); // 0 (a == a)
console.log("a".localeCompare("A")); // 1 (враховується регістр)
console.log("abc".localeCompare("abcd")); // -1 (abc < abcd)
console.log("абв".localeCompare("абг")); // -1 (порівняння за кирилицею)
console.log("a".localeCompare("а")); // -1 (різні алфавіти, латиниця і кирилиця)
console.log("1".localeCompare("a")); // -1 (цифри < літери)
console.log("hello".localeCompare("hello", "en", { sensitivity: "base" })); // 0 (без урахування регістру)
console.log("hello".localeCompare("HELLO", "en", { sensitivity: "accent" })); // -1 (різниця в регістрі)

// Враховує регістр, якщо не вказана чутливість, що може призвести до неочікуваних результатів.
// В залежності від локалі та налаштувань можуть бути відмінності у результатах порівняння.





