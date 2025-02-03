import bubbleSort from './algorithms/sorting/bubbleSort.js';
import bucketSort from './algorithms/sorting/bucketSort.js';
import countingSort from './algorithms/sorting/countingSort.js';
import heapSort from './algorithms/sorting/heapSort.js';
import insertionSort from './algorithms/sorting/insertionSort.js';
import mergeSort from './algorithms/sorting/mergeSort.js';
import quickSort from './algorithms/sorting/quickSort.js';
import radixSort from './algorithms/sorting/radixSort.js';
import selectionSort from './algorithms/sorting/selectionSort.js';
import shellSort from './algorithms/sorting/shellSort.js';
import timSort from './algorithms/sorting/timSort.js';
import getArray from './util/numbers.js';

import randomNumber from './util/randomNumber.js';

import fs from 'fs';


// let array = [];
// for(let i = 0; i < randomNumber(8, 11); i++) {
//     array[array.length] = randomNumber(0, 40);
// }
// console.log('array :>> ', array);
// console.log('array.length :>> ', array.length);

// let array = [
//     31, 7, -50, 71, 86, 39, 91, 98,
//     -13, 35, 26, -67, 87, 89, -25, 73,
//     67, -73, -63, 91, 51, 19, -27, 98
// ];
// length = 24

// let array = [35, 6, 35, 11, 3, 0, 38, 17, 1];
// console.log('array :>> ', array);

// console.log('array :>> ', array);

// console.log(bubbleSort(array));
// iterations :>>  480

// console.log(selectionSort(array));
// iterations :>>  300

// console.log(insertionSort(array));
// iterations :>> 144


var time = performance.now();

// let res = bubbleSort(getArray());
// 17900

// let res = insertionSort(getArray());
// 1080

// let res = selectionSort(getArray());
// 1200

// let res = shellSort(getArray());
// 45

// let res = radixSort(getArray());
// 41

// let res = heapSort(array);
// let res = heapSort(getArray());
// 29

// let res = bucketSort(array);
// let res = bucketSort(getArray());
// 21

// let res = countingSort(getArray());
// 16

// let res = mergeSort(getArray());
// 27

// let res = quickSort(getArray());
// 

// let res = timSort(getArray());
// 21

// let res = timSort2(getArray());
// 461
time = performance.now() - time;

console.log(time);

// console.log('res :>> ', res);



// fs.writeFileSync(`result${time}.json`, JSON.stringify(res, null, 2));

// const arr = Array.from({ length: 50000 }, () => Math.floor(Math.random() * 20001) - 10000);

// fs.writeFileSync('numbers.json', JSON.stringify(arr, null, 2));