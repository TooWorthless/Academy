export default function shellSort(array) {
    
    let iterations = 0;

    for(let gap = Math.floor(array.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // iterations++;
        for(let i = gap; i < array.length; i++) {
            // iterations++;
            let current = array[i];
            let j = i;
            let previous = array[j-gap];

            while(j >= gap && previous > current) {
                // iterations++;
                array[j] = previous;
                j -= gap;
                previous = array[j-gap];
            }

            array[j] = current;
        }  

    }

    return array;
}