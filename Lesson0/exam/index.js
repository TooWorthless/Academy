// const text = 'Hello team, I checked my wallet balance, there is 0,0000341 USDT, I can not buy anything';
const charCodes = {
    dot: '.'.charCodeAt(0),
    comma: ','.charCodeAt(0),
    zero: '0'.charCodeAt(0),
    nine: '9'.charCodeAt(0),
};


// const parseBalance = str => {
//     let balance = 0;
//     let fractionBalance = 0;
//     let isParsingNumber = false;
//     let isFraction = false;
//     let fractionMultiplier = 1;

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         const code = char.charCodeAt(0);

//         if (code >= charCodes.zero && code <= charCodes.nine) {
//             isParsingNumber = true;
//             const digit = code - charCodes.zero;

//             if (isFraction) {
//                 fractionBalance = fractionBalance * 10 + digit;
//                 fractionMultiplier *= 10;
//             } else {
//                 balance = balance * 10 + digit;
//             }
//         } else if (isParsingNumber && code === charCodes.comma) { 
//             if (isFraction) break;
//             isFraction = true;
//         } else if (isParsingNumber) {
//             break;
//         }
//     }

//     if (!isParsingNumber) return NaN;


//     const finalBalance = balance + fractionBalance / fractionMultiplier;

//     return finalBalance;
// }

// const result = parseBalance(text);

// console.log(typeof result, result); // number, 0.0000341



// const text = `Max received 2400 USDT.
// Kate received 1900.044 USDT.
// Andrey received 2550.23 USDT.
// Before I confirmed first transaction platform deposit was 11750 USDT.
// Than I send Money to charity 900 USDT and paid for flat 1600.93 USDT`;

// function countMyBalance(text) {

//     let isParsingNum = false;

//     let maxNum = 0;
//     let currentNum = 0;
//     let total = 0;

//     let isFraction = false;
//     let fractionNum = 0;
//     let fractionMultiplier = 1;


//     for(let i = 0; i < text.length; i++) {
//         const char = text[i];
//         const code = char.charCodeAt(0);


//         if(code >= charCodes.zero && code <= charCodes.nine) {
//             isParsingNum = true;
//             const digit = code - charCodes.zero;

//             if(isFraction) {
//                 fractionNum = fractionNum * 10 + digit;
//                 fractionMultiplier *= 10;
//             }
//             else {
//                 currentNum = currentNum * 10 + digit;
//             }

//             continue;
//         }

//         if(isParsingNum && code === charCodes.dot) {
//             // if(isFraction) {
//             //     currentNum = currentNum + fractionNum / fractionMultiplier;

//             //     if(currentNum > maxNum) {
//             //         maxNum = currentNum;
//             //         total += currentNum;
//             //     }

//             //     currentNum = 0;
//             //     fractionNum = 0;
//             //     isParsingNum = false;
//             //     isFraction = false;
//             //     fractionMultiplier = 1;
//             //     continue;
//             // }

//             isFraction = true;
//             continue;
//         }

//         if(isParsingNum) {
//             if(isFraction) {
//                 currentNum = currentNum + fractionNum / fractionMultiplier;
//             }

//             if(currentNum > maxNum) {
//                 maxNum = currentNum;
//             }
//             total += currentNum;
//             // console.log("currentNum", currentNum)
//             // console.log("total", total)
//             // console.log("total + currentNume", total)

//         }

//         currentNum = 0;
//         fractionNum = 0;
//         isParsingNum = false;
//         isFraction = false;
//         fractionMultiplier = 1;
//     }


//     return maxNum - (total - maxNum);

// }

// console.log(countMyBalance(text));



/*
  Написать реализацию функции racePromises, которая как аргумент
  получает массив промисов, и возвращает резолв первого промиса,
  который не null, нельзя использовать Promise.all и async await
 */

const promise1 = new Promise((resolve) => setTimeout(() => resolve(null), 1000))
const promise2 = new Promise((resolve) => setTimeout(() => resolve('promise2'), 1700))
const promise3 = new Promise((resolve) => setTimeout(() => resolve(null), 500))
const promise4 = new Promise((resolve) => setTimeout(() => resolve('promise4'), 1200))

const racePromises = (promises) => {
    return new Promise((resolve) => {
    
        for(let i = 0; i < promises.length; i++) {
            promises[i].then( (promiseResult) => {
                if(promiseResult) {
                    resolve(promises[i]);
                }
            } );
        }
        
    });
}

racePromises([promise1, promise2, promise3, promise4]).then(result => {
    console.log(`Result: ${ result }`); // Result: promise4
});