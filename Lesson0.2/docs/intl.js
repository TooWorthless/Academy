// 1. Intl.DateTimeFormat
// Форматирует дату и время в соответствии с локалью.
// Используется для отображения дат с учетом языка и культурных особенностей.


// const formatter = new Intl.DateTimeFormat(locale, options);
// Аргументы:
// locale (строка, необязательно): язык и регион (например, 'en-US', 'fr-FR').
// options (объект, необязательно): настройки формата.
// year, month, day, weekday, hour, minute, second, timeZone и т. д.

// const date = new Date();
// const formatter = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' });
// console.log(formatter.format(date));
// // "Tuesday, 6 January 2025 at 13:45:30 GMT"


// 2. Intl.ListFormat
// Форматирует списки в зависимости от локали, добавляя союзы, знаки препинания и другие особенности.


// const formatter = new Intl.ListFormat(locale, options);
// Аргументы:
// locale: язык (например, 'en-US', 'de-DE').
// options:
// type: 'conjunction' (для "и"), 'disjunction' (для "или"), 'unit' (для единиц измерения).
// style: 'long', 'short', 'narrow'.

// const list = ['Apple', 'Banana', 'Cherry'];
// const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
// console.log(formatter.format(list));
// // "Apple, Banana, and Cherry"


// 3. Intl.NumberFormat
// Форматирует числа с учетом локали и предпочтений (валюта, проценты и т. д.).


// const formatter = new Intl.NumberFormat(locale, options);
// Аргументы:
// locale: язык и регион.
// options:
// style: 'decimal', 'currency', 'percent'.
// currency: код валюты (например, 'USD', 'EUR').
// minimumFractionDigits, maximumFractionDigits, и т. д.

// const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
// console.log(formatter.format(1234567.89));
// // "$1,234,567.89"


// 4. Intl.RelativeTimeFormat
// Форматирует временные интервалы относительно текущего времени.


// const formatter = new Intl.RelativeTimeFormat(locale, options);
// Аргументы:
// locale: язык.
// options:
// numeric: 'always' (по умолчанию) или 'auto'.
// style: 'long', 'short', 'narrow'.

// const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
// console.log(formatter.format(-1, 'day'));
// // "yesterday"
// console.log(formatter.format(2, 'week'));
// // "in 2 weeks"


// 5. Intl.Collator
// Позволяет сравнивать строки с учетом локали и правил сортировки.


// const collator = new Intl.Collator(locale, options);
// Аргументы:
// locale: язык.
// options:
// sensitivity: 'base', 'accent', 'case', 'variant'.
// ignorePunctuation: true или false.

// const collator = new Intl.Collator('en', { sensitivity: 'base' });
// console.log(collator.compare('apple', 'Apple'));
// // 0 (равны)

// const collatorCaseSensitive = new Intl.Collator('en', { sensitivity: 'case' });
// console.log(collatorCaseSensitive.compare('apple', 'Apple'));
// // 1 (не равны)