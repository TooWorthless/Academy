function hybridSort(array, compareFn) {
    if (!Array.isArray(array)) {
        throw new TypeError('Input must be an array');
    }

    if (typeof compareFn !== 'function') {
        compareFn = (a, b) => {
            const strA = String(a);
            const strB = String(b);
            if (strA < strB) return -1;
            if (strA > strB) return 1;
            return 0;
        };
    }

    const INSERTION_SORT_THRESHOLD = 10;

    function insertionSort(a, from, to) {
        for (let i = from + 1; i < to; i++) {
            const element = a[i];
            let j = i - 1;
            while (j >= from && compareFn(a[j], element) > 0) {
                a[j + 1] = a[j];
                j--;
            }
            a[j + 1] = element;
        }
    }

    function getMedianOfThree(a, from, to) {
        const tArray = [];
        const increment = 200 + ((to - from) & 15);
        for (let i = from + 1, j = 0; i < to - 1; i += increment, j++) {
            tArray[j] = [i, a[i]];
        }
        tArray.sort((x, y) => compareFn(x[1], y[1]));
        return tArray[Math.floor(tArray.length / 2)][0];
    }

    function partition(a, from, to, pivotIndex) {
        const pivot = a[pivotIndex];
        [a[pivotIndex], a[to - 1]] = [a[to - 1], a[pivotIndex]];
        let storeIndex = from;
        for (let i = from; i < to - 1; i++) {
            if (compareFn(a[i], pivot) < 0) {
                [a[i], a[storeIndex]] = [a[storeIndex], a[i]];
                storeIndex++;
            }
        }
        [a[storeIndex], a[to - 1]] = [a[to - 1], a[storeIndex]];
        return storeIndex;
    }

    function quickSort(a, from, to) {
        while (to - from > INSERTION_SORT_THRESHOLD) {
            const pivotIndex =
                to - from > 1000
                    ? getMedianOfThree(a, from, to)
                    : Math.floor((from + to) / 2);
            const pivotNewIndex = partition(a, from, to, pivotIndex);

            if (pivotNewIndex - from < to - pivotNewIndex - 1) {
                quickSort(a, from, pivotNewIndex);
                from = pivotNewIndex + 1;
            } else {
                quickSort(a, pivotNewIndex + 1, to);
                to = pivotNewIndex;
            }
        }
        insertionSort(a, from, to);
    }

    quickSort(array, 0, array.length);
    
    return array;
}
