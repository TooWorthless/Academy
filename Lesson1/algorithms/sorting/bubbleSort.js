export default function bubbleSort(array) {
    for(let iterIndex = 0; iterIndex < array.length; iterIndex++) {
        let isSwapped = false;
        

        for(let arrayIndex = 0; arrayIndex < array.length-1; arrayIndex++) {
            if(array[arrayIndex] > array[arrayIndex+1]) {
                [array[arrayIndex], array[arrayIndex+1]] = [array[arrayIndex+1], array[arrayIndex]];
                isSwapped = true;
            }
        }

        if(!isSwapped) break;
    }

    return array;
}