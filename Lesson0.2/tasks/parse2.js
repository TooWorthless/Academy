const symbols = {
    space: ' ',
    dot: '.',
    double_dot: ':',
    comma: ',',
    plus: '+',
    minus: '-',
    zero: '0',
    nine: '9',
    string: '"',
    string_end: '"',
    array: '[',
    array_end: ']',
    object: '{',
    object_end: '}',
    null: 'n',
    boolean_case1: 't',
    boolean_case2: 'f',
    escape_sequence: '\\',
    newline: '\n',
    tab: '\t',
    return: '\r',
};

export default function parse2(json) {

    let index = 0;
    let char = json[index];

    const stack = [];
    let result;


    function updateIndex(newIndex = 1) {
        index += newIndex;
        if(index >= json.length) throw new SyntaxError('Invalid JSON structure');
        char = json[index];
    }

    const isWhitespace = () => {
        if (
            char === symbols.space ||
            char === symbols.newline ||
            char === symbols.tab ||
            char === symbols.return
        ) {
            return true;
        } else {
            return false;
        }
    };

    function isDigit(char) {
        return char >= symbols.zero && char <= symbols.nine;
    }

    while (index < json.length - 1) {
        // console.log('char :>> ', char);
        // console.log('stack :>> ', stack);
        if (isWhitespace()) {
            updateIndex();
            continue;
        }

        if (!stack.length) {
            if (char === symbols.object) {
                result = {};
                stack.push({
                    type: 'object',
                    value: result,
                    stage: 'key',
                    key: null
                });
            } else if (char === symbols.array) {
                result = [];
                stack.push({
                    type: 'array',
                    value: result,
                    stage: 'value'
                });
            } else {
                throw new SyntaxError('Invalid JSON structure');
            }
            updateIndex();
            continue;
        }

        const context = stack[stack.length - 1];
        // console.log('stack.length :>> ', stack.length);
        // console.log('stack[stack.length-1] :>> ', stack[stack.length-1]);
        // console.log('context :>> ', context);
        // console.log('context.stage :>> ', context.stage);
        // console.log('context.type :>> ', context.type);

        switch (context.stage) {
            case 'key':
                if (char === symbols.object_end) {
                    stack.pop();
                    updateIndex();
                    continue;
                }
                if (char === symbols.string) {
                    updateIndex();
                    let key = '';
                    while (char !== symbols.string) {
                        key += char;
                        updateIndex();
                    }
                    context.key = key;
                    context.stage = 'beforeValue';
                    updateIndex();
                    continue;
                }
                throw new SyntaxError('Invalid key in object');
                break;

            case 'beforeValue':
                if (char === symbols.double_dot) {
                    context.stage = 'value';
                    updateIndex();
                    continue;
                }
                throw new SyntaxError('Invalid JSON structure in object');
                break;

            case 'value':
                if (char === symbols.object) {
                    const obj = {};
                    if (context.type === 'object') context.value[context.key] = obj;
                    if (context.type === 'array') context.value.push(obj);
                    stack.push({
                        type: 'object',
                        value: obj,
                        stage: 'key',
                        key: null
                    });
                    updateIndex();
                }
                else if (char === symbols.array) {
                    const arr = [];
                    if (context.type === 'object') context.value[context.key] = arr;
                    if (context.type === 'array') context.value.push(arr);
                    stack.push({
                        type: 'array',
                        stage: 'value',
                        value: arr
                    });
                    updateIndex();
                }
                else {
                    let currentValue = '';
                    let valueType;
                    let currentValueCharIndex = 0;
                    let fractionResult = null;
                    let fractionMultiplier = null;
                    let isNegative = false;

                    if (char === symbols.string) valueType = 'string';
                    if (char === symbols.null) valueType = 'null';
                    if (char === symbols.boolean_case1) valueType = 'true';
                    if (char === symbols.boolean_case2) valueType = 'false';
                    if (isDigit(char) || char === symbols.minus) {
                        if (char === symbols.minus) {
                            isNegative = true;
                            updateIndex();
                        }
                        valueType = 'number';
                        currentValue = 0;
                    }

                    while (true) {
                        if (valueType === 'string') {
                            updateIndex();
                            if (char === symbols.string) {
                                updateIndex();
                                break;
                            }
                            currentValue += char;
                            continue;
                        }
                        else if (valueType === 'null' ||
                            valueType === 'true' ||
                            valueType === 'false') {
                            if (currentValueCharIndex >= valueType.length) {
                                currentValue = currentValue === 'null' ? currentValue = null : currentValue = currentValue === 'true' ? true : false;
                                break;
                            }
                            if (char !== valueType[currentValueCharIndex]) break;
                            currentValue += char;
                        }
                        else if (valueType === 'number') {
                            if (isDigit(char)) {
                                const code = char.charCodeAt(0);
                                const digit = code - symbols.zero.charCodeAt(0);

                                if (fractionResult === null) {
                                    currentValue = currentValue * 10 + digit;
                                }
                                else {
                                    fractionResult = fractionResult * 10 + digit;
                                    fractionMultiplier *= 10;
                                }
                            }
                            else if (char === symbols.dot && fractionResult === null) {
                                fractionResult = 0;
                                fractionMultiplier = 1;
                            }
                            else {
                                if (fractionResult) {
                                    currentValue = currentValue + fractionResult / fractionMultiplier;
                                    currentValue = isNegative ? -currentValue : currentValue;

                                    fractionResult = null;
                                }
                                break;
                            }
                        }
                        updateIndex();
                        currentValueCharIndex++;
                    }

                    if (context.type === 'object') context.value[context.key] = currentValue;
                    else if (context.type === 'array') context.value.push(currentValue);
                    context.stage = 'afterValue';
                    continue;
                }
                break;

            case 'afterValue':
                if (char === symbols.comma) {
                    if (context.type === 'object') context.stage = 'key';
                    else if (context.type === 'array') context.stage = 'value';
                    updateIndex();
                    continue;
                }
                if (char === symbols.object_end) {
                    stack.pop();
                    if (stack[stack.length - 1]) stack[stack.length - 1].stage = 'afterValue';
                    updateIndex();
                    continue;
                }
                if (char === symbols.array_end) {
                    stack.pop();
                    if (stack[stack.length - 1]) stack[stack.length - 1].stage = 'afterValue';
                    updateIndex();
                    continue;
                }
                throw new SyntaxError('Invalid JSON after value structure');
                break;

            default:
                break;
        }
    }

    return result;
}
