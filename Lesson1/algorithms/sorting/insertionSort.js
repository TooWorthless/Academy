export default function insertionSort(array) {
    let iterations = 0;
    
    for(let i = 1; i < array.length; i++) {
        iterations++;


        let elem = array[i];
        let j = i - 1;

        while(j >= 0 && array[j] > elem) {
            iterations++;
            array[j+1] = array[j];
            j--;
        }

        array[j+1] = elem;
    }

    // console.log('iterations :>> ', iterations);

    return array;
};