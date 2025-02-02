function createHeap(array) {
    let heap = [...array];
    for (let i = Math.floor(heap.length / 2); i >= 0; i--) {
        heapify(heap, i, heap.length);
    }
    return heap;
}

function heapify(heap, i, heapSize) {
    // console.log('heap :>> ', heap);
    // console.log();
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let largest = i;
    // console.log('largest :>> ', largest);
    // console.log();
    // console.log('left :>> ', left);
    // console.log('heap[left] :>> ', heap[left]);
    // console.log();
    // console.log('right :>> ', right);
    // console.log('heap[right] :>> ', heap[right]);
    // console.log('-----------------------------------');
    if (left < heapSize && heap[left] > heap[largest]) {
        largest = left;
    }
    if (right < heapSize && heap[right] > heap[largest]) {
        largest = right;
    }
    if (largest !== i) {
        [heap[i], heap[largest]] = [heap[largest], heap[i]];
        heapify(heap, largest, heapSize);
    }
}

export default function heapSort(array) {
    let heap = createHeap(array);
    const result = [];

    while(heap.length > 0) {
        result.unshift(heap.shift());
        heap = createHeap(heap);
    }

    return result;
}