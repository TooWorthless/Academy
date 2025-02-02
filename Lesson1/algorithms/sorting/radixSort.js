function maxDigits(array) {
    let max = 0;

    for (const number of array) {
        max = Math.max(max, digitsAmount(number));
    }

    return max;
}

function getDigit(number, index) {
    return Math.floor(
        Math.abs(number) / Math.pow(10, index)
    ) % 10;
}

function digitsAmount(number) {
    if (number === 0) return 1;

    return Math.floor(
        Math.log10(Math.abs(number))
    ) + 1;
}

export default function radixSort(array) {
    let max = maxDigits(array);
    // let maxDigits = 0;

    for (let digitIndex = 0; digitIndex < max; digitIndex++) {
        let buckets = Array.from({ length: 20 }, () => []);
        // let negativeBuckets = Array.from({ length: 10 }, () => []);

        for (const number of array) {
            let isNegative = number > 0 ? false : true;
            let digit = getDigit(number, digitIndex);

            // if(isNegative) negativeBuckets[digit].push(number);
            if(isNegative) buckets[10-digit].push(number);
            else buckets[digit+10].push(number);
        }

        let temp = [];
        // array = [].concat(...negativeBuckets.reverse(), ...buckets);
        // array = [].concat(...buckets);

        for(const bucket of buckets) {
            temp.push(...bucket);
        }

        array = temp;
    }

    return array;
};