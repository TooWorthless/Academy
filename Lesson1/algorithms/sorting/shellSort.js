export default function shellSort(array) {

    for(let gap = Math.floor(array.length / 2); gap > 0; gap = Math.floor(gap / 2)) {

        for(let i = gap; i < array.length; i++) {
            let current = array[i];
            let j = i;
            let previous = array[j-gap];

            while(j >= gap && previous > current) {
                array[j] = previous;
                j -= gap;
                previous = array[j-gap];
            }

            array[j] = current;
        }  

    }

    return array;
}