const charCodes = {
    space: ' '.charCodeAt(0),
    dot: '.'.charCodeAt(0),
    left: '<'.charCodeAt(0),
    right: '>'.charCodeAt(0),
    start: '@'.charCodeAt(0),
    end: '/'.charCodeAt(0),
    zero: '0'.charCodeAt(0),
    nine: '9'.charCodeAt(0),
    emoji: ':'.charCodeAt(0),
};

function toLowerCode(code) {
    if (code >= 65 && code <= 90) {
        code += 32;
    }
    return code;
}

export default function countEmoji(message, emoji) {
    let results = {};

    let currentName = "";
    let isReadingName = false;

    let currentEmoji = "";
    let currentEmojisAmount = 0;
    let previousEmojisAmount = 0;
    let isReadingEmoji = false;

    let emojiMatchIndex = emoji.length - 1;

    for (let i = message.length - 1; i >= 0; i--) {
        const code = toLowerCode(message[i].charCodeAt(0));
        const char = String.fromCharCode(code);

        if (code === charCodes.right &&
            message[i - 1].charCodeAt(0) === charCodes.end) {
            isReadingName = true;
            currentName = "";
            i--;
            continue;
        }

        if (isReadingName &&
            code === charCodes.start &&
            message[i - 1].charCodeAt(0) === charCodes.left) {
            isReadingName = false;
            let amount;

            if (currentEmojisAmount === 0) {
                amount = (results[currentName] || 0) + previousEmojisAmount;
            }
            else {
                amount = (results[currentName] || 0) + currentEmojisAmount;
                previousEmojisAmount = currentEmojisAmount;
                currentEmojisAmount = 0;
            }

            if (results[currentName]) {
                delete results[currentName];
            }
            results = { [currentName]: amount, ...results };

            // console.log('results', results);

            continue;
        }

        if (isReadingName) {
            if (code !== charCodes.space && code !== charCodes.left) {
                currentName = char + currentName;
            }
            continue;
        }

        // emoji start
        if (code === charCodes.emoji && !isReadingEmoji) {
            isReadingEmoji = true;
            continue;
        }

        // emoji
        if (isReadingEmoji) {

            if(emojiMatchIndex >= 0) {
                const emojiCode = toLowerCode(emoji[emojiMatchIndex].charCodeAt(0));
                const emojiChar = String.fromCharCode(emojiCode);
    
                if (char === emojiChar) {
                    emojiMatchIndex--;
                    currentEmoji = emojiChar + currentEmoji;
                }
                else {
                    emojiMatchIndex = emoji.length - 1;
                    isReadingEmoji = false;
                    currentEmoji = "";
                }
                continue;
            }  

            if(code === charCodes.emoji) {
                currentEmojisAmount++;
            }

            emojiMatchIndex = emoji.length - 1;
            isReadingEmoji = false;
            currentEmoji = "";
            continue;
        }
    }

    return results;
}
