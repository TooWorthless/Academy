function createHeap(array) {
    let n = array.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(array, n, i);
    }
}


function heapify(array, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    // console.log('array :>> ', array);
    // console.log();
    // console.log('i :>> ', i);
    // console.log('largest :>> ', largest);
    // console.log('array[largest] :>> ', array[largest]);
    // console.log();
    // console.log('left :>> ', left);
    // console.log('array[left] :>> ', array[left]);
    // console.log();
    // console.log('right :>> ', right);
    // console.log('array[right] :>> ', array[right]);
    // console.log('-----------------------------------');

    if (left < n && array[left] > array[largest]) {
        largest = left;
    }

    if (right < n && array[right] > array[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [array[i], array[largest]] = [array[largest], array[i]];
        heapify(array, n, largest);
    }
}

export default function heapSort(array) {
    let n = array.length;

    createHeap(array);

    // console.log('============================');

    for (let i = n - 1; i > 0; i--) {
        [array[0], array[i]] = [array[i], array[0]];
        heapify(array, i, 0);
    }
    return array;
}


// [35, 6, 35, 11, 3, 0, 38, 17, 1]