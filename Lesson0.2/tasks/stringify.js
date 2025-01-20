


export default function stringify(obj) {
    const stack = [];
    let result = '';

    let firstIsArray = Array.isArray(obj);

    result += firstIsArray ? '[' : '{';

    let keys = firstIsArray ? obj : Object.keys(obj);
    let keyIndex = 0;

    while (keyIndex <= keys.length) {

        // console.log('stack :>> ', stack);

        if (!stack.length) {
            if(keyIndex>=keys.length) break;
            if (keyIndex !== keys.length - 1) {
                stack.push({
                    value: ',',
                    type: 'add'
                });
            }
            stack.push({
                value: obj[firstIsArray ? keyIndex : keys[keyIndex]],
                isArray: firstIsArray,
                key: firstIsArray ? null : keys[keyIndex]
            });
            // console.log('stack :>> ', stack);
            keyIndex++;
        }

        const frame = stack.pop();

        if (frame.type === 'add') {
            result += frame.value;
            continue;
        }

        const { value, isArray, key } = frame;

        if (typeof value === 'undefined' ||
            typeof value === 'function' ||
            typeof value === 'symbol') {
            continue;
        }

        if (!isArray) {
            result += '"' + key + '":';
        }

        if (typeof value === 'string') {
            result += '"' + value + '"';
        } else if (typeof value === 'number' || typeof value === 'boolean') {
            result += String(value);
        } else if (value === null) {
            result += 'null';
        } else if (typeof value === 'object') {
            const isValueArray = Array.isArray(value);

            result += isValueArray ? '[' : '{';
            const valueKeys = isValueArray ? value : Object.keys(value);

            stack.push({
                value: isValueArray ? ']' : '}',
                type: 'add'
            });

            for (let index = valueKeys.length - 1; index >= 0; index--) {
                if (+index !== valueKeys.length - 1) {
                    stack.push({
                        value: ',',
                        type: 'add'
                    });
                }
                stack.push({
                    value: value[isValueArray ? index : valueKeys[index]],
                    isArray: isValueArray,
                    key: isValueArray ? null : valueKeys[index]
                });
            }
            continue;
        }

    }

    result += firstIsArray ? ']' : '}';

    return result;

}



