function insertionSort(array, left, right) {
    for (let i = left + 1; i < right; i++) {

        let elem = array[i];
        let j = i - 1;

        while (j >= left && array[j] > elem) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = elem;
    }

    // console.log('iterations :>> ', iterations);

    return array;
};

function merge(array, left, middle, right) {
    const leftArray = array.slice(left, middle + 1);
    const rightArray = array.slice(middle + 1, right + 1);

    let i = 0;
    let j = 0;
    let k = left;

    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] <= rightArray[j]) {
            array[k] = leftArray[i];
            i++;
        }
        else {
            array[k] = rightArray[j];
            j++;
        }
        k++;
    }

    while (i < leftArray.length) {
        array[k] = leftArray[i];
        i++;
        k++;
    }

    while (j < rightArray.length) {
        array[k] = rightArray[j];
        j++;
        k++;
    }

    // console.log('array :>> ', array);
}



export default function timSort(array) {
    const RUN = 32;
    const n = array.length;

    // Sorting the partitions using Insertion Sort
    for (let i = 0; i < n; i += RUN) {
        insertionSort(array, i, Math.min(i + RUN - 1, n - 1));
    }
    for (let size = RUN; size < n; size *= 2) {
        for (let left = 0; left < n; left += 2 * size) {
            const mid = left + size - 1;
            const right = Math.min(left + 2 * size - 1, n - 1);
            merge(array, left, mid, right);
        }
    }

    return array;
};
