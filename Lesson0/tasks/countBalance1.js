const charCodes = {
    space: ' '.charCodeAt(0),
    dot: '.'.charCodeAt(0),
    left: '<'.charCodeAt(0),
    right: '>'.charCodeAt(0),
    start: '@'.charCodeAt(0),
    end: '/'.charCodeAt(0),
    zero: '0'.charCodeAt(0),
    nine: '9'.charCodeAt(0),
};

export default function countBalance1(message) {
    const balances = {};

    let currentName = "";
    let currentAmount = 0;
    let isReadingName = false;
    let isReadingAmount = false;

    for (let i = 0; i < message.length; i++) {
        const char = message[i];
        const code = char.charCodeAt(0);


        if (code === charCodes.left && message[i + 1].charCodeAt(0) === charCodes.start) {
            isReadingName = true;
            currentName = "";
            i++; 
            continue;
        }

        if (isReadingName && code === charCodes.end) {
            isReadingName = false;
            continue;
        }

        if (isReadingName) {
            if (code !== charCodes.space && code !== charCodes.right) {
                currentName += char;
            }
            continue;
        }


        // num start
        if (code >= charCodes.zero && code <= charCodes.nine && !isReadingAmount) {
            isReadingAmount = true;
            currentAmount = code - charCodes.zero;
            continue;
        }

        // num
        if (isReadingAmount) {
            if (code >= charCodes.zero && code <= charCodes.nine) {
                currentAmount = currentAmount * 10 + (code - charCodes.zero);
            } else {
                isReadingAmount = false;

                if(currentName === '') continue;
                const normalized = currentName.toLowerCase();
                balances[normalized] = (balances[normalized] || 0) + currentAmount;
            }
        }
    }

    return balances;
}