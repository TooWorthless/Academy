const charCodes = {
    space: ' '.charCodeAt(0),
    dot: '.'.charCodeAt(0),
    zero: '0'.charCodeAt(0),
    nine: '9'.charCodeAt(0),
};


export default function countBalance2(message) {

    let maxNum = 0;
    let currentNum = 0;
    let total = 0;

    let isParsingNumber = false;

    let fractionNum = 0;
    let isFraction = false;
    let fractionMultiplier = 1;

    for (let i = 0; i < message.length; i++) {
        const char = message[i];
        const code = char.charCodeAt(0);

        if (code >= charCodes.zero && code <= charCodes.nine) {
            isParsingNumber = true;
            const digit = code - charCodes.zero;


            if (isFraction) {
                fractionNum = fractionNum * 10 + digit;
                fractionMultiplier *= 10;
            } else {
                currentNum = currentNum * 10 + digit;
            }
        }
        else if (isParsingNumber && code === charCodes.dot) {
            if (isFraction) {
                currentNum = currentNum + fractionNum / fractionMultiplier;
                total += currentNum;
                if (currentNum > maxNum) {
                    maxNum = currentNum;
                }
                currentNum = 0;


                isParsingNumber = false;
                fractionMultiplier = 1;
                fractionNum = 0;
                isFraction = false;
                continue;
            }

            isFraction = true;
        }
        else if (isParsingNumber) {
            if (isFraction) {
                currentNum = currentNum + fractionNum / fractionMultiplier;
            }

            total += currentNum;
            if (currentNum > maxNum) {
                maxNum = currentNum;
            }
            currentNum = 0;

            isParsingNumber = false;
            fractionMultiplier = 1;
            fractionNum = 0;
            isFraction = false;
        }
    }

    return maxNum - (total - maxNum);
}