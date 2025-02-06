export default function insertionSort(array) {
    
    for(let i = 1; i < array.length; i++) {

        let elem = array[i];
        let j = i - 1;

        while(j >= 0 && array[j] > elem) {
            array[j+1] = array[j];
            j--;
        }

        array[j+1] = elem;
    }

    return array;
};