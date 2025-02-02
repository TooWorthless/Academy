import insertionSort from "./insertionSort.js";

export default function bucketSort(array) {
    let min = array[0];
    let max = array[0];
    let size = 4;

    for(const number of array) {
        if(number < min) min = number;
        else if(number > max) max = number;
    }

    let buckets = Array.from(
        { length: Math.floor( (max - min) / size ) + 1 }, 
        () => []
    );

    for(const current of array) {
        buckets[Math.floor( (current - min) / size )].push(current);
    }

    array.length = 0;
    

    for(const bucket of buckets) {
        insertionSort(bucket);
        bucket.forEach((bucketElem) => {array.push(bucketElem)});
    }

    return array;
}