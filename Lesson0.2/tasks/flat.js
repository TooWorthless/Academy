export default function flat(array, depth = 1) {
    const result = [];
    const stack = [];

    let stackIndex = 0;
    let arrayIndex = 0;

    while (arrayIndex < array.length) {
        if(stackIndex >= stack.length) {
            stack[stack.length] = {
                value: array[arrayIndex],
                currentDepth: 0
            };
            arrayIndex++;
        }

        const { value, currentDepth } = stack[stackIndex];
        stackIndex++;
        
        if(Array.isArray(value) && currentDepth < depth) {
            for(let i = 0; i < value.length; i++) {
                stack[stack.length] = {
                    value: value[i],
                    currentDepth: currentDepth+1
                };
            }
        }
        else {
            result[result.length] = value;
        }
    } 

    return result;
}