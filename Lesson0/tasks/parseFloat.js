const charCodes = {
    space: ' '.charCodeAt(0),
    dot: '.'.charCodeAt(0),
    plus: '+'.charCodeAt(0),
    minus: '-'.charCodeAt(0),
    zero: '0'.charCodeAt(0),
    nine: '9'.charCodeAt(0),
};

export default function parseFloat(str) {

    let result = 0;
    let fractionResult = 0;
    let isNegative = false;
    let started = false;
    let isFraction = false;
    let fractionMultiplier  = 1; 

    for (let i = 0; i < str.length; i++) {
        // console.log(result);
        const char = str[i];
        const code = char.charCodeAt(0);

        if (!started && code === charCodes.space) continue;

        if (!started && (code === charCodes.plus || code === charCodes.minus)) {
            isNegative = code === charCodes.minus;
            started = true;
            continue;
        }

        if (code === charCodes.dot && !isFraction) {
            isFraction = true;
            started = true;
            continue;
        }

        if (code >= charCodes.zero && code <= charCodes.nine) {
            started = true;
            const digit = code - charCodes.zero;

            if (isFraction) {
                // fractionDivider *= 10;
                // console.log("code", (code - charCodes.zero))
                // console.log("fractionDivider", fractionDivider)
                // console.log("code / fractionDivider", (code - charCodes.zero) / fractionDivider)
                // console.log("result", result)
                // console.log("result+=", result+((code - charCodes.zero) / fractionDivider))
                // result += (code - charCodes.zero) / (fractionDivider *= 10);
                fractionResult = fractionResult * 10 + digit;
                fractionMultiplier *= 10;
            } else {
                result = result * 10 + digit;
            }
        } else {
            break;
        }
    }

    
    if (!started) return NaN;


    const finalResult = result + fractionResult / fractionMultiplier;

    return isNegative ? -finalResult : finalResult;
}