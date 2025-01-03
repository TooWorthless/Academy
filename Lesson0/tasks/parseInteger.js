const charCodes = {
    space: ' '.charCodeAt(0),
    plus: '+'.charCodeAt(0),
    minus: '-'.charCodeAt(0),
    zero: '0'.charCodeAt(0),
    nine: '9'.charCodeAt(0),
};

export default function parseInteger(str) {
    let result = 0;
    let isNegative = false;
    let started = false;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const code = char.charCodeAt(0);

        if (!started && code === charCodes.space) continue;

        if (!started && (code === charCodes.plus || code === charCodes.minus)) {
            isNegative = code === charCodes.minus;
            started = true;
            continue;
        }

        if (code >= charCodes.zero && code <= charCodes.nine) {
            started = true;
            result = result * 10 + (code - charCodes.zero);
        } else {
            break;
        }
    }

    if (!started) return NaN;

    return isNegative ? -result : result;
}