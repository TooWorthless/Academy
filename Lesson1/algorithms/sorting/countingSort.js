export default function countingSort(array) {
    let min = array[0];
    let max = array[0];
    for(const number of array) {
        if(number < min) min = number;
        else if(number > max) max = number;
    }

    // console.log('min, max :>> ', min, max);

    const count = new Array(max - min + 1).fill(0);
    const output = new Array(array.length);
    

    // console.log('count :>> ', count);
    for (let i = 0; i < array.length; i++) {
        count[array[i] - min]++;
        // console.log('count :>> ', count);
    }
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
        // console.log('count :>> ', count);
    }

    for (let i = array.length - 1; i >= 0; i--) {
        // console.log('i :>> ', i);
        // console.log('array[i] :>> ', array[i]);
        // console.log('array[i] - min - 1 :>> ', count[array[i] - min]);
        output[count[array[i] - min] - 1] = array[i];
        // console.log('output :>> ', output);
        count[array[i] - min]--;
    }
    return output;
}