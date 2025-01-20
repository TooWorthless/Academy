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



export default function parse(json) {
    let index = 0;
    let char = json[index];

    function updateIndex() {
        index++;
        char = json[index];
    }

    function skipWhitespace() {
        while (char === symbols.space ||
            char === symbols.newline ||
            char === symbols.tab ||
            char === symbols.return) {

            updateIndex();
        }
    }

    function parseValue() {
        skipWhitespace();

        if (char === symbols.string) return parseString();
        if (char === symbols.array) return parseArray();
        if (char === symbols.object) return parseObject();
        if (char === symbols.boolean_case1 || char === symbols.boolean_case2) return parseBoolean();
        if (char === symbols.null) return parseNull();
        if (char === symbols.minus || isDigit(char)) return parseNumber();

        throw new SyntaxError('Unexpected character: ' + char);
    }

    function parseString() {
        let str = '';

        updateIndex();

        while (char !== symbols.string && index < json.length) {
            str += char;
            updateIndex();
        }

        updateIndex();

        return str;
    }

    function parseArray() {
        updateIndex();

        const arr = [];
        skipWhitespace();

        if (char === symbols.array_end) {
            updateIndex();
            return arr;
        }

        while (true) {
            arr.push(parseValue());
            skipWhitespace();

            if (char === symbols.array_end) {
                updateIndex();
                return arr;
            }

            if (char === symbols.comma) {
                updateIndex();
                skipWhitespace();
            }
            else {
                throw new SyntaxError('Expected "," or "]"');
            }
        }
    }

    function parseObject() {
        updateIndex();

        const obj = {};
        skipWhitespace();

        if (char === symbols.object_end) {
            updateIndex();
            return obj;
        }

        while (true) {
            const key = parseString();
            skipWhitespace();

            if (char !== symbols.double_dot) throw new SyntaxError('Expected ":"');
            skipWhitespace();

            updateIndex();
            skipWhitespace();

            const value = parseValue();
            obj[key] = value;
            skipWhitespace();

            if (char === symbols.object_end) {
                updateIndex();
                return obj;
            }

            if (char === symbols.comma) {
                updateIndex();
                skipWhitespace();
            }
            else {
                throw new SyntaxError('Expected "," or "}"');
            }
        }
    }

    function parseBoolean() {
        let result = '';
        const lastIndex = index + 4;

        while (index < lastIndex) {
            result += char;
            updateIndex();
        }

        if (result === 'true') return true;
        if (result === 'false') return false;

        throw new SyntaxError('Unexpected value');
    }

    function parseNull() {
        let result = '';
        const lastIndex = index + 4;

        while (index < lastIndex) {
            result += char;
            updateIndex(index + 1);
        }

        if (result === 'null') return null;
        throw new SyntaxError('Unexpected value');
    }

    function parseNumber() {
        let result = 0;
        let fractionResult = 0;

        let isNegative = false;
        let isFraction = false;

        let fractionMultiplier = 1;

        while (true) {
            if (char === symbols.minus) {
                isNegative = true;
                updateIndex();
                continue;
            }

            if (char === symbols.dot && !isFraction) {
                isFraction = true;
                updateIndex();
                continue;
            }

            if (isDigit(char)) {
                const code = char.charCodeAt(0);
                const digit = code - symbols.zero.charCodeAt(0);

                if (isFraction) {
                    fractionResult = fractionResult * 10 + digit;
                    fractionMultiplier *= 10;
                }
                else {
                    result = result * 10 + digit;
                }
            } 
            else {
                break;
            }
            updateIndex();
        }

        const finalResult = result + fractionResult / fractionMultiplier;

        return isNegative ? -finalResult : finalResult;
    }

    function isDigit(char) {
        return (char >= symbols.zero && char <= symbols.nine);
    }


    return parseValue();
}