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
    divider = divider.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const regexp = new RegExp(
        `^.+?(?=${divider})|(?<=${divider}).+?(?=${divider})|(?<=${divider}).+`,
        'g'
    );

    const result = text.match(regexp);

    // console.log('result :>> ', result);

    return result ? result : text;
}
function split2(text, divider) {

    const result = [];
    let match = true;

    const regexp = new RegExp(
        `.*?(?=${divider.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})|.*`,
        'y'
    );

    while(match) {
        match = regexp.exec(text);
        
        if(match) {
            regexp.lastIndex += divider.length;
            result[result.length] = match[0];
        }
    }
    
    // console.log('result :>> ', result);
    return result.length > 0 ? result : text;
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

    const emojis = {};

    let accumulator = { name: null, amount: null, previousAmount: null };

    parsed.reduceRight((previousValue, currentValue, currentIndex, array) => {
        const isEmoji = currentValue[0] === ':' && currentValue[currentValue.length - 1] === ':' ? true : false;


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

const text = "Пример текста с example@mail.com, URLexample.com, увыаывавыавыа.exampl";


console.log('Split1');
console.log(split(text, 'example'));
console.log(split(text, '.'));
console.log('\nSplit2');
console.log(split2(text, 'example'));
console.log(split2(text, '.'));
console.log();
