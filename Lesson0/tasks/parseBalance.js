const charCodes = {
    dot: '.'.charCodeAt(0),
    zero: '0'.charCodeAt(0),
    nine: '9'.charCodeAt(0),
};

export default function parseBalance(message) {
    let balance = 0;
    let fractionBalance = 0;
    let isParsingNumber = false;
    let isFraction = false;
    let fractionMultiplier = 1;

    for (let i = 0; i < message.length; i++) {
        const char = message[i];
        const code = char.charCodeAt(0);

        if (code >= charCodes.zero && code <= charCodes.nine) {
            isParsingNumber = true;
            const digit = code - charCodes.zero;

            if (isFraction) {
                fractionBalance = fractionBalance * 10 + digit;
                fractionMultiplier *= 10;
            } else {
                balance = balance * 10 + digit;
            }
        } else if (isParsingNumber && code === charCodes.dot) { 
            if (isFraction) break;
            isFraction = true;
        } else if (isParsingNumber) {
            break;
        }
    }

    if (!isParsingNumber) return NaN;


    const finalBalance = balance + fractionBalance / fractionMultiplier;

    return finalBalance;
}