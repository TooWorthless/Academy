

// // class TestClass { }

// // const arr = [{ value: 1 }, { value: 2 }, 5, 6, 7, 'test', 'test2', 'test3', 'test4', false, null, undefined, [123], [456], new Date("2021-06-22"), new Date("2022-02-01"), new Set([1, 2, 3]), new Set([4, 5, 6]), Symbol(), Symbol(), Symbol(), new Map(), new TestClass(), new TestClass()];

// // function groupByDataType(data) {

// //     const result = {};

// //     data.reduce((previousValue, currentValue, currentIndex, array) => {
// //         // if(!currentValue) return currentValue;
// //         // console.log('currentValue :>> ', currentValue);

// //         const type = currentValue?.constructor?.name || String(currentValue);
// //         // console.log('type :>> ', type);
// //         // const proto = Object.getPrototypeOf(value);
// //         // if(proto === null) return null;
// //         // return undefined;


// //         if (!result[type]) result[type] = [];
// //         else result[type].push(currentValue);

// //     });

// //     return result;
// // }


// // console.log('groupByDataType :>> ', groupByDataType(arr));

// // Ожидаемый результат
// // {
// //   object: [ { value: 1 }, { value: 2 } ],
// //   number: [ 5, 6, 7 ],
// //   string: [ 'test', 'test2', 'test3', 'test4' ],
// //   boolean: [ false ],
// //   null: [ null ],
// //   undefined: [ undefined ],
// //   array: [ [ 123 ], [ 456 ] ],
// //   date: [new Date("2021-06-22"), new Date("2022-02-01")],
// //   set: [new Set([1,2,3]), new Set([4,5,6])],
// //   symbol: [Symbol(), Symbol(), Symbol()],
// //   map: [new Map()],
// //   TestClass: [new TestClass(), new TestClass()]
// // }


// const words = ['hello', 'zelda', 'world', 'its', 'jeka'];

// function getSortedString(data) {
//     const str = data.join('');
//     const result = {};

//     for(let charIndex = 0; charIndex < str.length; charIndex++) {
//         const char = str[charIndex];
//         const charCode = char.charCodeAt(0);

//         if(!result[charCode]) result[charCode] = char;

//     }

//     // const symbols = new Array(26).fill(false);
//     // const result = new Array(26).fill('');

//     // for(let charIndex = 0; charIndex < str.length; charIndex++) {
//     //     const char = str[charIndex];
//     //     const charCode = char.charCodeAt(0);

//     //     const index = charCode - 65;
//     //     if(!symbols[index]) {
//     //         symbols[index] = true;
//     //         result[index] = String.fromCharCode(charCode + 32);
//     //     }
//     // }


//     return Object.values(result).join('');
// }

// console.log(getSortedString(words));

// // написать функцию getSortedString, которая обьединит все слова в одну строку, выбросит символы дубликаты, отсортирует строку в алфавитном порядке;

// // результат функции 'abcdefghxyz'

// // Ограничения:
// // запрещено использовать функцию sort

// // можно использовать только 1 цикл for, метод join до и после цикла, Set, Object - включая методы получения ключей и значения обьекта


const data1 = {
    a: 1,
    x: null,
    k: [1, 2],
    b: 2,
    c: {
        d: 1,
        e: {
            s: {
                f: {
                    v: 4
                }
            }
        }
    }
}

const data2 = [{
    a: 1,
    x: null,
    k: [1, 2],
    b: 2,
    c: {
        d: 1,
        e: {
            s: {
                f: {
                    v: 4
                }
            }
        }
    }
}];

function cloneNestedData(data) {
    const isArray = Array.isArray(data);
    // console.log('isArray :>> ', isArray);


    const stack = [];


    let result = isArray ? [] : (typeof data === "object" && data !== null ? {} : data);


    stack.push(
        {
            source: data,
            result: result
        }
    );


    while (stack.length > 0) {
        const { source, result } = stack.pop();

        for(let key in source) {
            const currentValue = source[key];

            if(currentValue && typeof currentValue === 'object') {
                const currentResult = Array.isArray(currentValue) ? [] : {};
                result[key] = currentResult;
                stack.push({
                    source: currentValue,
                    result: currentResult
                });
            }
            else {
                result[key] = currentValue;
            }
        }
    }

    return result;

}


// console.log(cloneNestedData(data2));


// cloneNestedData(data1);

// cloneNestedData(data2);


//   Задача клонировать вложенный обьект

//   Запрещено использование JSON, structuredClone, рекурсий

//   Разрешено использовать
//   цикл while и for, array, map, object

// Test cases:
console.log(JSON.stringify(cloneNestedData(data1)) === JSON.stringify(data1)); // Expected result: true
console.log(JSON.stringify(cloneNestedData(data2)) === JSON.stringify(data2)); // Expected result: true