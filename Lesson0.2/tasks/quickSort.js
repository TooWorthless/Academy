export default function quickSort(array, compareFn) {
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

    function partition(a, from, to) {
        const pivotIndex = Math.floor((from + to) / 2);
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

    function quickSortInternal(a, from, to) {
        while (to - from > 1) {
            const pivotNewIndex = partition(a, from, to);

            // smaller subarray
            if (pivotNewIndex - from < to - pivotNewIndex - 1) {
                quickSortInternal(a, from, pivotNewIndex);
                from = pivotNewIndex + 1; // larger half
            } else {
                quickSortInternal(a, pivotNewIndex + 1, to);
                to = pivotNewIndex; // smaller half
            }
        }
    }

    quickSortInternal(array, 0, array.length);
    
    return array;
}
