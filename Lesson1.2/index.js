// function parseInteger(str) {
//     const match = str.match(/^\s*([+-]?\d+)/);
//     console.log('match :>> ', match);
//     return match ? Number(match[1]) : NaN;
// }


function parseInteger(str) {
    const result = str.match(
        // /.\d+/
        /(^(\-?)\d|(?<=\s))\d+/
    );
    // console.log('result :>> ', result);
    return result ? Number(result[0]) : NaN;
}

function parseFloat(str) {
    const result = str.match(
        /(^(\-?)\d|(?<=\s))\d+\.\d+/
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
    // const result = text.match(
    //     matchStr
    // );
    // // console.log('result :>> ', result);
    // return result ? true : false;
}


console.log(includes("hello world", "world"));
console.log(includes("hello world", "World"));
console.log(includes("helloworld", "world"));
console.log(includes("helloworld", "i"));
console.log();

console.log(parseInteger("42")); // 42
console.log(parseInteger("42.5")); // 42
console.log(parseInteger("   42.5")); // 42
console.log(parseInteger("-42.5")); // 42
console.log(parseInteger("42px")); // 42
console.log(parseInteger("abc42")); // NaN
console.log();

console.log(parseFloat("123456.7"));
console.log(parseFloat("123456.789123451.34.56"));
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
    const result = message.match(
        /((?<=<@)[a-z]+(?=(?:(\s?)+\/>))|\:[a-z]+\:)/ig
        // /\:[a-z]+\:/ig
    );

    if (!result) return null;
    // console.log('result :>> ', result);
    // console.log('emoji :>> ', emoji);
    // console.log('----------------------------------------');

    const emojis = {};
    let accumulator = { name: null, amount: null, previousAmount: null };

    result.reduceRight((previousValue, currentValue, currentIndex, array) => {
        const isEmoji = currentValue[0] === ':' ? true : false;
        // console.log('currentValue :>> ', currentValue);
        // console.log('emojis1 :>> ', emojis);

        if (isEmoji) {
            if (currentValue === emoji) {
                if (previousValue.amount) {
                    // previousValue.previousAmount = previousValue.amount;
                    previousValue.amount++;
                }
                else previousValue.amount = 1;
            }
        }
        else {
            let isRest = false;
            if(previousValue.name) {
                // console.log('currentValue :>> ', currentValue);
                // console.log('previousValue.amount :>> ', previousValue.amount);
                // if(previousValue.amount > emojis[previousValue.name]) {
                if(previousValue.amount > previousValue.previousAmount) {
                    previousValue.amount -= previousValue.previousAmount;
                }
                // else isRest = true;
            }
            previousValue.name = currentValue.toLowerCase();
            previousValue.previousAmount = previousValue.amount;
            if(emojis[previousValue.name]) emojis[previousValue.name] += previousValue.amount;
            else emojis[previousValue.name] = previousValue.amount;

            if(isRest) previousValue = { name: null, amount: null, previousAmount: null };
        }

        // console.log('emojis2 :>> ', emojis);
        // console.log('previousValue :>> ', previousValue);
        // console.log('----------------------------------------');
        return previousValue;
    }, accumulator);

    console.log('emojis :>> ', emojis);
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

