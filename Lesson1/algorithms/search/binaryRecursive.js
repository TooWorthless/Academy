export default function binaryRecursive(array, target, left = 0, right = array.length - 1) {
    if (left > right) return -1;

    const mid = Math.floor((left + right) / 2);

    if (array[mid] === target) return mid;
    if (array[mid] > target) return binaryRecursive(array, target, left, mid - 1);
    return binaryRecursive(array, target, mid + 1, right);
};
