export default function mergeSort(array) {

    // console.log('array :>> ', array);

    let calls = 0;
    let iterations = 0;

    function ms(left, right) {

        calls++;
        // console.log('calls :>> ', calls);

        if (left < right) {

            // console.log('left :>> ', left);
            // console.log('middle :>> ', Math.floor((right + left) / 2));
            // console.log('right :>> ', right);

            const middle = Math.floor((right + left) / 2);

            ms(left, middle);
            ms(middle + 1, right);

            m(left, middle, right);
        }

    }

    function m(left, middle, right) {
        calls++;

        // console.log('left, middle, right :>> ', left, middle, right);

        const leftArray = array.slice(left, middle + 1);
        const rightArray = array.slice(middle + 1, right + 1);

        let i = 0;
        let j = 0;
        let k = left;

        while (i < leftArray.length && j < rightArray.length) {
            iterations++;
            if (leftArray[i] <= rightArray[j]) {
                array[k] = leftArray[i];
                i++;
            }
            else {
                array[k] = rightArray[j];
                j++;
            }
            k++;
        }

        while (i < leftArray.length) {
            array[k] = leftArray[i];
            i++;
            k++;
            iterations++;
        }

        while (j < rightArray.length) {
            array[k] = rightArray[j];
            j++;
            k++;
            iterations++;
        }

        // console.log('array :>> ', array);
    }


    ms(0, array.length - 1);

    // console.log('calls :>> ', calls);
    // console.log('iterations :>> ', iterations);


    return array;

}
