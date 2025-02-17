// function parseInteger(str) {
//     const match = str.match(/^\s*([+-]?\d+)/);
//     console.log('match :>> ', match);
//     return match ? Number(match[1]) : NaN;
// }


function parseInteger(str) {
    const result = str.match(
        // /.\d+/
        // /(^(\-?)\d|(?<=\s))\d+/
        /(^[\S]|(?<=\s))\-?\d+/
        // /^\s*([+-]?\d+(\.\d+)?)/
    );
    // console.log('result :>> ', result);
    return result ? Number(result[0]) : NaN;
}

function parseFloat(str) {
    const result = str.match(
        // /(^(\-?)\d|(?<=\s))\d+\.\d+/
        // /(^[/S]|(?<=\s))\-?\d+(\.?\d+)/
        /(^[\S]|(?<=\s))\-?\d+(\.\d+)?/
    );
    // console.log('result :>> ', result);
    return result ? Number(result[0]) : NaN;
}

function includes(text, matchStr) {
    const result = text.match(
        matchStr
    );
    // console.log('result :>> ', result);
    return result ? true : false;
}

function split(text, divider) {
    console.log('text :>> ', text);
    console.log('divider :>> ', divider);
    const regexp = new RegExp(
        // `[^${divider}]+`,
        // `(?:${divider})?([^]+?)(?=${divider}|$)`,
        `(?:${divider})?([^]+?)(?=(?:${divider})|$)`,
        'g'
    );
    const result = text.match(regexp);
    console.log('result :>> ', result);
    return result ? true : false;
}




console.log(includes("hello world", "world"));
console.log(includes("hello world", "World"));
console.log(includes("helloworld", "world"));
console.log(includes("helloworld", "i"));
console.log();

console.log(parseInteger("42")); // 42
console.log(parseInteger("42.5")); // 42
console.log(parseInteger("   42.5")); // 42
console.log(parseInteger("  -42.5")); // 42
console.log(parseInteger("42px")); // 42
console.log(parseInteger("abc42")); // NaN
console.log();

console.log(parseFloat("123456"));
console.log(parseFloat("123456.7"));
console.log(parseFloat("     123456.789123451.34.56"));
console.log(parseFloat(".123456.78912.34.56"));
console.log(parseFloat("-123.456sASDASD sdasdasd"));
console.log(parseFloat("asdasdsaasd-123.456 sASDASD sdasdasd"));
console.log();



function parseBalance(message) {
    const result = message.match(
        /\d+(((\.|\,)\d+)?)/
    );
    return result ? result[0] : NaN;
}

console.log(parseBalance('My wallet balance is 14960 USDT'));
console.log(parseBalance('My wallet balance is 123456789.99 USD'));
console.log(parseBalance('My balance rest is 0.99 USDT'));
console.log(parseBalance('dsfsdfdsf sdsdfsddf ssdf'));
console.log(parseBalance('Hello team, I checked my wallet balance, there is 0,0000341 USDT, I can not buy anything'));
console.log();


function countBalance1(message) {
    const result = message.match(
        /\b((?<=<@)[a-z]+(?=(?:(\s?)+\/>))|\d+)/ig
    );

    if (!result) return null;

    const balances = {};
    let accumulator = { name: null, balance: null };

    result.reduce((previousValue, currentValue, currentIndex, array) => {
        const isNumber = !isNaN(+currentValue);

        if (previousValue.name) {
            if (isNumber) {
                let number = +currentValue;

                if (previousValue.balance) previousValue.balance += number;
                else previousValue.balance = number;
            }
            else {
                previousValue = { name: currentValue, balance: null };
            }
        }
        else {
            if (!isNumber) previousValue.name = currentValue;
        }

        if (previousValue.name) balances[previousValue.name.toLowerCase()] = previousValue.balance;

        // console.log('previousValue :>> ', previousValue);
        // console.log('currentValue :>> ', currentValue);

        return previousValue;
    }, accumulator);

    console.log('result :>> ', result);
    console.log('balances :>> ', balances);
}

console.log(countBalance1('Hello <@Kate/>, you did your work well and I sent you 1000 USDT. <@Dmitrty /> was working at the weekend so I sent you 350 USDT. <@Max /> won 600 USDT'));
console.log(countBalance1('Hello 500 <@Kate />, you did your work well and I sent you 1000 USDT. <@Dmitrty /> was working at the weekend so I sent you 350 USDT. <@Max /> won 600 USDT'));
console.log(countBalance1('Hello 500 <@Kate />, you did your work well and I sent you USDT. <@Dmitrty /> was working at the weekend so I sent you 350 USDT. <@Max /> won 600 USDT'));
console.log();


function countEmoji(message, emoji) {
    emoji = ':' + emoji + ':';
    const parsed = message.match(
        /((?<=<@)[a-z]+(?=(?:(\s?)+\/>))|\:[a-z]+\:)/ig
    );

    if (!parsed) return null;
    console.log('parsed :>> ', parsed);
    // console.log('emoji :>> ', emoji);
    // console.log('----------------------------------------');

    const emojis = {};

    let accumulator = { name: null, amount: null, previousAmount: null };

    parsed.reduceRight((previousValue, currentValue, currentIndex, array) => {
        const isEmoji = currentValue[0] === ':' && currentValue[currentValue.length - 1] === ':' ? true : false;
        // console.log('currentValue :>> ', currentValue);
        // console.log('emojis1 :>> ', emojis);

        if (isEmoji) {
            if (currentValue === emoji) {
                if (previousValue.amount) {
                    previousValue.amount++;
                }
                else previousValue.amount = 1;
            }
        }
        else {
            if (previousValue.name) {
                if (previousValue.amount > previousValue.previousAmount) {
                    previousValue.amount -= previousValue.previousAmount;
                }
            }
            previousValue.name = currentValue.toLowerCase();
            previousValue.previousAmount = previousValue.amount;
            if (emojis[previousValue.name]) emojis[previousValue.name] += previousValue.amount;
            else emojis[previousValue.name] = previousValue.amount;
        }

        return previousValue;
    }, accumulator);

    return emojis;
}

const case1 = '<@Kate />:apple: <@Max/>:like:<@alisa /> :like: received:apple::apple:';
const case2 = '<@Kate />:apple: <@Max/>:apple: :APPLE: :AppLe:<@alisa /> :like: received:apple::apple:';
const case3 = '<@Kate />:apple: <@Max/>:apple APPLE: AppLe:<@alisa /> :like: received:apple::apple:';
const case4 = '<@Kate />:apple: <@Max/>:like:<@alisa /> :like: :apple: received:apple::apple: <@kAte /> alsdaksdjhsa <@KATE /> :apple: :apple:';
const case5 = '<@Kate />:apple: <@Max/><@olia/><@misha/><@dasha/><@alisa /> :like: received:apple::apple:  <@dima/><@vasia/><@gena/><@ihor/><@tolik />';
const case6 = ':apple: :apple: <@Kate />:apple: <@Max/><@alisa /> :like: received:apple::apple:';

console.log(countEmoji(case1, 'apple'));
console.log(countEmoji(case2, 'apple'));
console.log(countEmoji(case3, 'apple'));
console.log(countEmoji(case4, 'apple'));
console.log(countEmoji(case5, 'apple'));
console.log(countEmoji(case6, 'apple'));
console.log();


const regex = /\b([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}|https?:\/\/[^\s/$.?#].[^\s]*|\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b|\b\d{4}-\d{2}-\d{2}\b|\b\d{2}:\d{2}\b|\b(?:[0-9a-fA-F]{2}:){5}[0-9a-fA-F]{2}\b|\b\d{5}(?:-\d{4})?\b|\b(?:\d{4}[-\s]?){3}\d{4}\b|\b#[0-9a-fA-F]{6}\b|\b(?:[0-9a-fA-F]{32}|[0-9a-fA-F]{40}|[0-9a-fA-F]{64})\b)\b/g;

const text = "Пример текста с email example@mail.com, URL https://example.com, IP 192.168.0.1, датой 2025-02-12example и временем 14:30.examp";

const matches = text.match(regex);
console.log('matches :>> ', matches);


split(text, 'example');
console.log();
console.log();
console.log();
console.log();
console.log();







// Задание 1
{
    const text = "Мой номер +7 (999)  123-45-67";
    const regexp = /(\+?)[\d]{1,2}\s*\(?[\d]{3}\)?\s*[\d\-]+\d/g;

    console.log(text.match(regexp)); // [ '+7(999)123-45-67' ]
}

// Задание 2
{
    let date = "2024-02-16";
    date = date.replace(/\-/g, '.');

    const dateData = date.match(/[^\.]+/g); // [ '2024', '02', '16' ]

    for (let key = 0; key < dateData.length / 2; key++) {
        const current = dateData[key];
        const last = dateData[dateData.length - 1 - key];

        date = date.replace(new RegExp(`${last}`), current);
        date = date.replace(new RegExp(`${current}`), last);
    }

    console.log(date); // 16.02.2024
}

// Задание 3
{
    const text = "hello world";
    const toFind = 'Hello';

    console.log(text.match(new RegExp(`${toFind}`, 'i'))); // [ 'hello', index: 0, input: 'hello world', groups: undefined ]
}




// 1️⃣ Найди все числа в строке.
{
    const text = "Цена: 300$, скидка 20%, итог 280$.";
    // Ожидаемый результат: ["300", "20", "280"]

    console.log(text.match(/\d+/g));
}

// 2️⃣ Найди все слова, начинающиеся с заглавной буквы.
{
    const text = "Сегодня хорошая Погода в Москве.";
    // Ожидаемый результат: ["Сегодня", "Погода", "Москве"]

    console.log(text.match(/[А-Я][а-я]+/g));
}


// 3️⃣ Найди все знаки пунктуации (запятые, точки, восклицательные и вопросительные знаки).
{
    const text = "Привет, как дела? Всё хорошо!";
    // Ожидаемый результат: [",", "?", "!"]

    console.log(text.match(/[\,\.\?\!]/g));
}


// 4️⃣ Найди все русские слова.
{
    const text = "Hello, это тестовый текст.";
    // Ожидаемый результат: ["это", "тестовый", "текст"]

    console.log(text.match(/[а-я]+/ig));
}


// 5️⃣ Найди все шестнадцатеричные числа (HEX).
{
    const text = "Цвета: #FF5733, #abc123, #000000.";
    // Ожидаемый результат: ["#FF5733", "#abc123", "#000000"]

    console.log(text.match(/#\w{6}/ig));
}



// 1️⃣ Извлеки все числа, состоящие минимум из двух цифр.
{
    const text = "5, 12, 123, 8, 45";
    console.log(text.match(/[\d]{2,}/g));
}
// Ожидаемый результат: ["12", "123", "45"]

// 2️⃣ Найди слова, содержащие от 3 до 5 букв.
{
    const text = "он она кот кошка собака";
    console.log(text.match(/[а-я]{3,5}(?=[^а-я])/ig));
}
// Ожидаемый результат: ["она", "кот", "кошка"]

// 3️⃣ Извлеки все HTML-теги (без жадности!).
{
    const text = "<div>Привет</div><span>Мир</span>";
    console.log(text.match(/<[a-z]+>/ig));
}
// Ожидаемый результат: ["<div>", "<span>"]

// 4️⃣ Найди все строки в кавычках (одинарные или двойные, без жадности).
{
    const text = `Он сказал "Привет", а потом добавил 'Как дела?'`;
    console.log(text.match(/(['"])(.+)\1/g));
}
// Ожидаемый результат: ['"Привет"', "'Как дела?'"]

// 5️⃣ Извлеки хештеги из текста.

{
    const text = "Сегодня отличный день! #happy_saddsa #sunny_asdsd #weekend_asdas";
    console.log(text.match(/#[a-z]+/ig));
}
// Ожидаемый результат: ["#happy", "#sunny", "#weekend"]

console.log();


// 1️⃣ Найди повторяющиеся слова (например, "мама мама").
// 2️⃣ Найди слова, где повторяется хотя бы одна буква (например, "кооот").
// 3️⃣ Найди HTML-теги с одинаковым открывающим и закрывающим тегами.
// 4️⃣ Найди слова, разделённые дефисом, где части одинаковые (например, "тест-тест").

// 1️⃣ Найди повторяющиеся слова (например, "мама мама").
{
    const text = "раму раму мама раму мама мама мыла раму раму она";
    // const text = "раму раму раму мыл раму она раму";
    // const text = "мама мама мыла раму";
    console.log(text.match(/(([а-я])+)\1+/g));
    // console.log(text.match(/\b(\w+)\s+\1\b/g));
}
// Ожидаемый результат: ["мама мама"]

// 2️⃣ Найди слова, где повторяется хотя бы одна буква (например, "кооот").
{
    const text = `кооот`;
    console.log(text.match(/([а-я])\1+/));
}

// 3️⃣ Найди HTML-теги с одинаковым открывающим и закрывающим тегами.
{
    const text = "<div>Привет</div><span>Мир</span>";
    console.log(text.match(/<(\w+)>(.*?)<\/\1>/g));
}
// Ожидаемый результат: ["<div>Привет</div>", "<span>Мир</span>"]

// 4️⃣ Найди слова, разделённые дефисом, где части одинаковые (например, "тест-тест").
{
    const text = "тест тестер тест-тест ";
    console.log(text.match(/([а-я]+)\-\1/g));
}

// 4️⃣ Найди пары парных скобок (круглые, квадратные, фигурные)
{
    const text = "(Привет) [Как] {дела} (всё) [ок]";
}
// Ожидаемый результат: ["(Привет)", "[Как]", "{дела}", "(всё)", "[ок]"]

// 5️⃣ Найди все телефонные номера, но только если код города совпадает
{
    const text = "+7 (495) 123-45-67 и +7 (495) 987-65-43";
}
// Ожидаемый результат: ["+7 (495) 123-45-67 и +7 (495) 987-65-43"]
