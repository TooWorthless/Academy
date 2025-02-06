// Number.isNaN()
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(42)); // false
console.log(Number.isNaN("hello")); // false
console.log(Number.isNaN("42" - "hello")); // true

console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN(null)); // false
console.log(Number.isNaN("NaN")); // false
console.log(Number.isNaN("100")); // false
console.log(Number.isNaN({})); // false
console.log(Number.isNaN([])); // false
console.log(Number.isNaN([123])); // false
console.log(Number.isNaN([123, 456])); // false
console.log(Number.isNaN(true)); // false
console.log(Number.isNaN(false)); // false
console.log(Number.isNaN(Symbol("NaN"))); // TypeError: Cannot convert a Symbol to a number
console.log(Number.isNaN(Infinity)); // false
console.log(Number.isNaN(-Infinity)); // false
console.log(Number.isNaN(() => {})); // false
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(new Date())); // false
console.log(Number.isNaN(new Date("invalid date"))); // false
console.log(Number.isNaN(BigInt(42))); // false
console.log(Number.isNaN("42" - "hello")); // true
console.log(Number.isNaN(new Number(NaN))); // false

// Number.isNaN() не розпізнає NaN, якщо він обгорнутий у new Number.
// Повертає false для Symbol, але кидає помилку при конвертації в число.


// Number.isFinite()
console.log(Number.isFinite(100)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite("100")); // false

console.log(Number.isFinite(100)); // true
console.log(Number.isFinite("100")); // false
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite(undefined)); // false
console.log(Number.isFinite(null)); // false
console.log(Number.isFinite([])); // false
console.log(Number.isFinite({})); // false
console.log(Number.isFinite([123])); // false
console.log(Number.isFinite([123, 456])); // false
console.log(Number.isFinite(true)); // false
console.log(Number.isFinite(false)); // false
console.log(Number.isFinite(Symbol("finite"))); // TypeError: Cannot convert a Symbol to a number
console.log(Number.isFinite(() => {})); // false
console.log(Number.isFinite(BigInt(100))); // false
console.log(Number.isFinite(new Number(42))); // false
console.log(Number.isFinite(new Number(Infinity))); // false
console.log(Number.isFinite("")); // false
console.log(Number.isFinite("abc")); // false

// Не працює з BigInt.
// Значення new Number(42) не розпізнається як скінченне.


// Number.parseInt()
console.log(Number.parseInt("42")); // 42
console.log(Number.parseInt("42.5")); // 42
console.log(Number.parseInt("42px")); // 42
console.log(Number.parseInt("abc42")); // NaN

console.log(Number.parseInt("42")); // 42
console.log(Number.parseInt("42.5")); // 42
console.log(Number.parseInt("abc42")); // NaN
console.log(Number.parseInt("42abc")); // 42
console.log(Number.parseInt("0x10")); // 16
console.log(Number.parseInt("0b1010")); // 0 (не підтримує двійкову систему)
console.log(Number.parseInt("  42 ")); // 42
console.log(Number.parseInt("+42")); // 42
console.log(Number.parseInt("-42")); // -42
console.log(Number.parseInt("")); // NaN
console.log(Number.parseInt(" ")); // NaN
console.log(Number.parseInt(null)); // NaN
console.log(Number.parseInt(undefined)); // NaN
console.log(Number.parseInt([])); // NaN
console.log(Number.parseInt({})); // NaN
console.log(Number.parseInt(Symbol("42"))); // TypeError: Cannot convert a Symbol to a string
console.log(Number.parseInt(NaN)); // NaN
console.log(Number.parseInt(Infinity)); // NaN
console.log(Number.parseInt(BigInt(42))); // NaN
console.log(Number.parseInt("42.0000000000001")); // 42

// Не підтримує двійковий (0b) або восьмирічний (0o) запис.
// Може повернути некоректний результат, якщо після чисел стоять символи.


// Number.parseFloat()
console.log(Number.parseFloat("42.5")); // 42.5
console.log(Number.parseFloat("42.12345px")); // 42.12345
console.log(Number.parseFloat("abc42.5")); // NaN

console.log(Number.parseFloat("42.5")); // 42.5
console.log(Number.parseFloat("42.123abc")); // 42.123
console.log(Number.parseFloat("abc42.123")); // NaN
console.log(Number.parseFloat("   42.5   ")); // 42.5
console.log(Number.parseFloat("+42.5")); // 42.5
console.log(Number.parseFloat("-42.5")); // -42.5
console.log(Number.parseFloat("")); // NaN
console.log(Number.parseFloat(" ")); // NaN
console.log(Number.parseFloat(null)); // NaN
console.log(Number.parseFloat(undefined)); // NaN
console.log(Number.parseFloat([])); // NaN
console.log(Number.parseFloat([42.5])); // 42.5
console.log(Number.parseFloat([42.5, 100])); // 42.5 (ігнорується все після коми)
console.log(Number.parseFloat({})); // NaN
console.log(Number.parseFloat(Symbol("42.5"))); // TypeError: Cannot convert a Symbol to a string
console.log(Number.parseFloat(NaN)); // NaN
console.log(Number.parseFloat(Infinity)); // Infinity
console.log(Number.parseFloat("-Infinity")); // -Infinity
console.log(Number.parseFloat("42.0e2")); // 4200
console.log(Number.parseFloat("42.5.5")); // 42.5 (зупиняється на другій крапці)

// Дозволяє обробляти лише першу частину рядка, ігноруючи символи чи помилки після чисел.
// Приймає рядки формату 42.5.5, що може бути несподіваним.
// Не працює з типом Symbol.


// Number.isInteger()
console.log(Number.isInteger(42)); // true
console.log(Number.isInteger(42.5)); // false
console.log(Number.isInteger("42")); // false
console.log(Number.isInteger(NaN)); // false

console.log(Number.isInteger(42)); // true
console.log(Number.isInteger(-42)); // true
console.log(Number.isInteger(0)); // true
console.log(Number.isInteger(42.5)); // false
console.log(Number.isInteger("42")); // false
console.log(Number.isInteger(NaN)); // false
console.log(Number.isInteger(Infinity)); // false
console.log(Number.isInteger(-Infinity)); // false
console.log(Number.isInteger(null)); // false
console.log(Number.isInteger(undefined)); // false
console.log(Number.isInteger([])); // false
console.log(Number.isInteger([42])); // false
console.log(Number.isInteger({})); // false
console.log(Number.isInteger(Symbol("42"))); // TypeError: Cannot convert a Symbol to a number
console.log(Number.isInteger(() => {})); // false
console.log(Number.isInteger(BigInt(42))); // false
console.log(Number.isInteger(new Number(42))); // false
console.log(Number.isInteger(0.0000001)); // false
console.log(Number.isInteger(0.0)); // true
console.log(Number.isInteger(1e6)); // true

// Не працює з BigInt, хоча BigInt також може бути цілим числом.
// Повертає false для об'єктів типу new Number(42).


// Number.isSafeInteger()
console.log(Number.isSafeInteger(42)); // true
console.log(Number.isSafeInteger(9007199254740992)); // false
console.log(Number.isSafeInteger(0.1)); // false
console.log(Number.isSafeInteger("42")); // false

console.log(Number.isSafeInteger(42)); // true
console.log(Number.isSafeInteger(-42)); // true
console.log(Number.isSafeInteger(0)); // true
console.log(Number.isSafeInteger(42.5)); // false
console.log(Number.isSafeInteger("42")); // false
console.log(Number.isSafeInteger(NaN)); // false
console.log(Number.isSafeInteger(Infinity)); // false
console.log(Number.isSafeInteger(-Infinity)); // false
console.log(Number.isSafeInteger(null)); // false
console.log(Number.isSafeInteger(undefined)); // false
console.log(Number.isSafeInteger([])); // false
console.log(Number.isSafeInteger([42])); // false
console.log(Number.isSafeInteger(BigInt(42))); // false
console.log(Number.isSafeInteger(Math.pow(2, 53))); // false (небезпечно)
console.log(Number.isSafeInteger(-(Math.pow(2, 53) - 1))); // true
console.log(Number.isSafeInteger(Symbol("42"))); // TypeError: Cannot convert a Symbol to a number
console.log(Number.isSafeInteger(() => {})); // false
console.log(Number.isSafeInteger(0.1 + 0.2)); // false (через похибки обчислень)
console.log(Number.isSafeInteger(new Number(42))); // false
console.log(Number.isSafeInteger(1e6)); // true

// Не працює з BigInt.
// Число може бути цілим, але не вважатися "безпечним" через обмеження.


// Number.prototype.toFixed()
console.log((42.98765).toFixed(2)); // "42.99"
console.log((42.98765).toFixed(0)); // "43"
console.log((42.98765).toFixed(5)); // "42.98765"

console.log((42.987).toFixed(2)); // "42.99"
console.log((42.987).toFixed(0)); // "43"
console.log((42).toFixed(5)); // "42.00000"
console.log((0.1 + 0.2).toFixed(1)); // "0.3"
console.log((-42.987).toFixed(2)); // "-42.99"
console.log((42).toFixed()); // "42" (за замовчуванням 0 десяткових)
console.log((42).toFixed(null)); // "42" (перетворення null на 0)
console.log((42).toFixed(undefined)); // "42" (перетворення undefined на 0)
console.log((42).toFixed("2")); // "42.00" (перетворення рядка на число)
console.log((42).toFixed("abc")); // RangeError: Invalid digits argument
console.log((42).toFixed(-1)); // RangeError: Invalid digits argument
console.log((42).toFixed(21)); // RangeError: Invalid digits argument
console.log((42).toFixed(20)); // "42.00000000000000000000" (максимум 20 знаків)
console.log((42.987).toFixed(1.5)); // "43.0" (округлення значення параметра)
console.log((42.987).toFixed(Infinity)); // RangeError: Invalid digits argument
console.log((42.987).toFixed(NaN)); // "43" (перетворення NaN на 0)
console.log((42.987).toFixed([])); // "43" (перетворення порожнього масиву на 0)
console.log((42.987).toFixed([2])); // "42.99" (масив з одним значенням)
console.log((42.987).toFixed([2, 3])); // "43" (ігнорується додаткове значення)

// Може приймати інвалідні аргументи (рядки, масиви), які конвертуються в числа, іноді несподівано.
// Кидає RangeError, якщо число десяткових знаків виходить за межі 0–20.


// Number.prototype.toExponential()
const num2 = 123456;
console.log(num2.toExponential(2)); // "1.23e+5"
console.log(num2.toExponential(4)); // "1.2346e+5"


// Number.prototype.toPrecision()
const num3 = 123.456;
console.log(num3.toPrecision(4)); // "123.5"
console.log(num3.toPrecision(2)); // "1.2e+2"
console.log(num3.toPrecision(6)); // "123.456"


// Number.prototype.toString()
const num4 = 255;
console.log(num4.toString()); // "255"
console.log(num4.toString(2)); // "11111111" (бінарний запис)
console.log(num4.toString(16)); // "ff" (шістнадцятковий запис)

console.log((42).toString()); // "42"
console.log((42).toString(2)); // "101010" (бінарний запис)
console.log((42).toString(8)); // "52" (вісімкова система)
console.log((42).toString(16)); // "2a" (шістнадцяткова система)
console.log((42).toString(36)); // "16" (максимальна система)
console.log((42).toString(1)); // RangeError: Invalid radix
console.log((42).toString(37)); // RangeError: Invalid radix
console.log((42).toString(10)); // "42" (десяткова система)
console.log((-42).toString(2)); // "-101010"
console.log((0).toString(2)); // "0"
console.log((Infinity).toString(2)); // "Infinity"
console.log((-Infinity).toString(16)); // "-Infinity"
console.log(NaN.toString(10)); // "NaN"
console.log((42.5).toString(10)); // "42.5"
console.log((0.1 + 0.2).toString(10)); // "0.30000000000000004"
console.log((42).toString()); // "42" (без вказівки системи числення)
console.log((42).toString(undefined)); // "42" (за замовчуванням десяткова система)
console.log((42).toString(null)); // TypeError: Invalid radix
console.log((42).toString([])); // TypeError: Invalid radix
console.log((42).toString("abc")); // TypeError: Invalid radix

// radix (система числення) може викликати RangeError, якщо виходить за межі 2–36.
// Похибки при роботі з числами з плаваючою крапкою, як у випадку 0.1 + 0.2.

