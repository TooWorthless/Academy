function customJoin(array, separator) {
    separator = separator === undefined ? ',' : String(separator);
    
    if (!Array.isArray(array)) {
        throw new TypeError('Input should be an array');
    }

    let result = '';
    for (let i = 0; i < array.length; i++) {
        
        const current = array[i] == null ? '' : String(array[i]);
        result += current; 
        
        if (i < array.length - 1) {
            result += separator;
        }
    }
    return result;
}