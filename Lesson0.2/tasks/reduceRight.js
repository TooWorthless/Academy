export default function reduceRight(array, callbackFn, initialValue) {
    if (!Array.isArray(array)) {
        throw new TypeError('Input should be an array');
    }

    if (typeof callbackFn !== 'function') {
        throw new TypeError('Callback should be a function');
    }

    let hasInitialValue = initialValue !== undefined;
    let accumulator = hasInitialValue ? initialValue : undefined;
    let startIndex = hasInitialValue ? array.length - 1 : array.length - 2;

    if (!hasInitialValue && array.length === 0) {
        throw new TypeError('Reduce of empty array with no initial value');
    }

    if (!hasInitialValue) {
        accumulator = array[array.length - 1];
    }

    for (let i = startIndex; i >= 0; i--) {
        if (i in array) {
            accumulator = callbackFn(accumulator, array[i], i, array);
        }
    }

    return accumulator;
}
