export default function binary(array, target) {
    let left = 0, right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (array[mid] === target) return mid;
        if (array[mid] > target) right = mid - 1;
        else left = mid + 1;
    }

    return -1;
};
