export default function selectionSort(array) {

    for (let iterIndex = 0; iterIndex < array.length; iterIndex++) {

        let minIndex = iterIndex;

        for (let arrayIndex = minIndex + 1; arrayIndex < array.length; arrayIndex++) {
            const min = array[minIndex];

            if(min > array[arrayIndex]) {
                minIndex = arrayIndex;
            }
        }

        [array[iterIndex], array[minIndex]] = [array[minIndex], array[iterIndex]];
    }

    return array;
};