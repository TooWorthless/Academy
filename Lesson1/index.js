import bubbleSort from './algorithms/sorting/bubbleSort.js';
import bucketSort from './algorithms/sorting/bucketSort.js';
import countingSort from './algorithms/sorting/countingSort.js';
import heapSort from './algorithms/sorting/heapSort.js';
import insertionSort from './algorithms/sorting/insertionSort.js';
import mergeSort from './algorithms/sorting/mergeSort.js';
import radixSort from './algorithms/sorting/radixSort.js';
import selectionSort from './algorithms/sorting/selectionSort.js';
import shellSort from './algorithms/sorting/shellSort.js';
import timSort from './algorithms/sorting/timSort.js';
import getArray from './util/numbers.js';
import randomNumber from './util/randomNumber.js';

import fs from 'fs';
// import mergeSort from './mergeSort2.js';


// let array = [];
// for(let i = 0; i < randomNumber(20, 40); i++) {
//     array[array.length] = randomNumber(0, 100);
// }
// console.log('array :>> ', array);
// console.log('array.length :>> ', array.length);

let array = [
    31, 7, -50, 71, 86, 39, 91, 98,
    -13, 35, 26, -67, 87, 89, -25, 73,
    67, -73, -63, 91, 51, 19, -27, 98
];
// length = 24

// bubbleSort(array);
// console.log('array :>> ', array);
// console.log(bubbleSort(array));
// iterations :>>  480

// console.log(selectionSort(array));
// iterations :>>  300

// console.log(insertionSort(array));
// iterations :>> 144


// console.log(mergeSort([5,3,7,1,0,8,5]));

// console.time('radix');
var time = performance.now();
// console.log(mergeSort(array));

// let res = bubbleSort(array);
// let res = bubbleSort(getArray());
// let res = insertionSort(array);
// let res = selectionSort(array);
// let res = shellSort(array);
// let res = shellSort(getArray());
// let res = radixSort(array);
// let res = heapSort(getArray());
// let res = bucketSort(array);
// let res = bucketSort(getArray());
// let res = countingSort([18, 32, 12, 2, 5, 38, 33, 16, 2]);
// let res = countingSort(getArray());
// let res = mergeSort(getArray());
// let res = timSort(getArray());
time = performance.now() - time;

// console.timeEnd('radix');
console.log(time);


fs.writeFileSync(`result${time}.json`, JSON.stringify(res, null, 2));


// const arr = Array.from({ length: 50000 }, () => Math.floor(Math.random() * 20001) - 10000);

// fs.writeFileSync('numbers.json', JSON.stringify(arr, null, 2));