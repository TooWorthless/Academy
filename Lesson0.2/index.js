import flat from "./tasks/flat.js";
import parse from "./tasks/parse.js";
import stringify from "./tasks/stringify.js";
import parse2 from "./tasks/parse2.js";
import reduce from "./tasks/reduce.js";
import reduceRight from "./tasks/reduceRight.js";
import quickSort from "./tasks/quickSort.js";


console.log(flat([1, [2, [3, [4]]], 5]));
console.log(flat([1, [[2], [3, [4]]], 5], 2));
console.log('\n');
/*
    [ 1, 2, [ 3, [ 4 ] ], 5 ]
    [ 1, 2, 3, [ 4 ], 5 ]
*/


console.log(parse2(`
    {
        "squadName": "Super hero squad",
        "homeTown": "Metro City",
        "formed": 2016.23,
        "secretBase":      "Super tower"    ,
        "active": true,
        "members": {
            "1": {
                "name": "Molecule Man",
                "age": 29,
                "secretIdentity": "Dan Jukes"     ,
                "powers": null
              },
            "2": {
                "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unk nown",
            "powers": [1,2,3]
            },
        }
    }`
));
console.log('\n');
console.log(parse2(`
    {
        "squadName": "Super hero squad",
        "homeTown": "Metro City",
        "formed": 2016.23,
        "secretBase":      "Super tower",
        "active": true,
        "members": [
          {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
          },
          {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
              "Million tonne punch",
              "Damage resistance",
              "Superhuman reflexes"
            ]
          },
          {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
              "Immortality",
              "Heat Immunity",
              "Inferno",
              "Teleportation",
              "Interdimensional travel"
            ]
          }
        ],
        "sadadssda : 2132":           "sadsadsadsd",
      }`
));
console.log('\n');

console.log(parse(`[2, 4, 6, {"23": [123,456,432]}]`));
console.log('\n');


let obj =
{
    a: 1,
    b: "test",
    c: [1, 2, { x: 10, y: 20, z: 50 }],
    d: { nested: { key: "value" } },
    e: null,
    f: { 'asdsd': 'asdadssad', 'dsfd': [12, 34], "dasd": 234 }
};
console.log(stringify(obj));
console.log('\n');
// {"a":1,"b":"test","c":[1,2,{"x":10,"y":20,"z":50}],"d":{"nested":{"key":"value"}},"e":null,"f":{"asdsd":"asdadssad","dsfd":[12,34],"dasd":234}}


let jsonString = '[{"a":1,"b":[true,"test",null],"c":{"nested":42}},2, {}]';
console.log('jsonString :>> ', jsonString);
console.log('\n');
console.log(parse2(jsonString));
console.log('\n');
// { a: 1, b: [ true, 'test', null ], c: { nested: 42 } }




const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = reduce(
    array1,
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);
console.log(sumWithInitial);
console.log('\n');
// 10

const array2 = [
    [0, 1],
    [2, 3],
    [4, 5],
];

const result = reduceRight(
    array2,
    (accumulator, currentValue) => accumulator.concat(currentValue)
);

console.log(result);
console.log('\n');
// [ 4, 5, 2, 3, 0, 1 ]




const waterfall =
    (...functions) =>
        (callback, ...args) =>
            reduceRight(
                functions,
                (composition, fn) =>
                    (...results) =>
                        fn(composition, ...results),
                callback,
            )(...args);

const randInt = (max) => Math.floor(Math.random() * max);

const add5 = (callback, x) => {
    setTimeout(callback, randInt(1000), x + 5);
};
const mult3 = (callback, x) => {
    setTimeout(callback, randInt(1000), x * 3);
};
const sub2 = (callback, x) => {
    setTimeout(callback, randInt(1000), x - 2);
};
const split = (callback, x) => {
    setTimeout(callback, randInt(1000), x, x);
};
const add = (callback, x, y) => {
    setTimeout(callback, randInt(1000), x + y);
};
const div4 = (callback, x) => {
    setTimeout(callback, randInt(1000), x / 4);
};

// const computation = waterfall(add5, mult3, sub2, split, add, div4);
// computation(console.log, 5); 
// 14

// const computation2 = (input, callback) => {
//     const f6 = (x) => div4(callback, x);
//     const f5 = (x, y) => add(f6, x, y);
//     const f4 = (x) => split(f5, x);
//     const f3 = (x) => sub2(f4, x);
//     const f2 = (x) => mult3(f3, x);
//     add5(f2, input);
// };

const arr = [5, 2, 9, 1, 5, 6, 3, 7, 4, 8, 0];
console.log(quickSort(arr));
console.log('\n');
// [0, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9]