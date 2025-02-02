export default function bubbleSort(array) {
    let iterations = 0;

    for(let iterIndex = 0; iterIndex < array.length; iterIndex++) {
        let isSwapped = false;
        iterations++;
        

        for(let arrayIndex = 0; arrayIndex < array.length-1; arrayIndex++) {
            iterations++;
            if(array[arrayIndex] > array[arrayIndex+1]) {
                [array[arrayIndex], array[arrayIndex+1]] = [array[arrayIndex+1], array[arrayIndex]];
                isSwapped = true;
            }
        }

        if(!isSwapped) break;
    }

    // console.log('iterations :>> ', iterations);

    return array;
}