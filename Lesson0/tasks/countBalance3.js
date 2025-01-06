const charCodes = {
    space: ' '.charCodeAt(0),
    dot: '.'.charCodeAt(0),
    zero: '0'.charCodeAt(0),
    nine: '9'.charCodeAt(0),
  };
  
  export default function countBalance3(message) {

    let maxNum = 0;
    let currentNum = 0;
    let total = 0;

    let isParsingNumber = false;

    let fractionNum = 0;
    let isFraction = false;
    let fractionMultiplier = 1;
    let digitMultiplier = 1;

    for (let i = message.length - 1; i >= 0; i--) {
        const char = message[i];
        const code = char.charCodeAt(0);

        if (code >= charCodes.zero && code <= charCodes.nine) {
            isParsingNumber = true;
            const digit = code - charCodes.zero;

            currentNum = digit * digitMultiplier + currentNum;
            digitMultiplier *= 10;
            
            if (!isFraction) {
                fractionMultiplier *= 10;
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

                isFraction = false;
                isParsingNumber = false;
                fractionMultiplier = 1;
                fractionNum = 0;
                digitMultiplier = 1;
                continue;
            }

            isFraction = true;
            fractionNum = currentNum;
            currentNum = 0;
            digitMultiplier = 1;
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
            digitMultiplier = 1;
        }
    }

    return maxNum - (total - maxNum);
  }