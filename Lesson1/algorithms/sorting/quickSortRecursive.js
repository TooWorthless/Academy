export default function quickSortRecursive(arr) {
    if (arr.length <= 1) return arr;
    
    let pivot = arr[Math.floor(arr.length / 2)];
    let left = [], right = [], equal = [];
    
    for (let num of arr) {
        if (num < pivot) left.push(num);
        else if (num > pivot) right.push(num);
        else equal.push(num);
    }
    
    return [...quickSortRecursive(left), ...equal, ...quickSortRecursive(right)];
}