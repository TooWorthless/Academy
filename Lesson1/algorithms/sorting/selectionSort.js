export default function selectionSort(array) {
    let iterations = 0;

    for (let iterIndex = 0; iterIndex < array.length; iterIndex++) {
        console.log('for iteration ', iterIndex);
        iterations++;


        let minIndex = iterIndex;

        for (let arrayIndex = minIndex + 1; arrayIndex < array.length; arrayIndex++) {
            const min = array[minIndex];
            iterations++;

            if(min > array[arrayIndex]) {
                minIndex = arrayIndex;
            }
        }

        [array[iterIndex], array[minIndex]] = [array[minIndex], array[iterIndex]];
    }

    console.log('iterations :>> ', iterations);

    return array;
};