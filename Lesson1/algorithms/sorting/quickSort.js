// export default function quickSort(arr) {
//     if (arr.length <= 1) return arr;
    
//     let pivot = arr[Math.floor(arr.length / 2)];
//     let left = [], right = [], equal = [];
    
//     for (let num of arr) {
//         if (num < pivot) left.push(num);
//         else if (num > pivot) right.push(num);
//         else equal.push(num);
//     }
    
//     return [...quickSort(left), ...equal, ...quickSort(right)];
// }


function partition(arr, left, right) {
    let pivot = arr[right];
    let i = left - 1;
    
    for (let j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
}


export default function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return;
    
    let pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);

    return arr;
}