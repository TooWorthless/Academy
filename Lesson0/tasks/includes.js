export default function includes(text, matchStr, index = 0) {

    if (typeof text !== "string" || typeof matchStr !== "string") {
        throw new TypeError("Params type error");
    }

    index = index < 0 ? 0 : index;

    let matchIndex = 0;
    let startCheck = false; 

    for (let i = 0; i < text.length; i++) {

        if (i < index) continue;

        if (text[i] === matchStr[matchIndex]) {
            startCheck = true;
            matchIndex++;
            if (matchIndex === matchStr.length) {
                return true;
            }
        } else {
            if (startCheck) {
                startCheck = false;
                matchIndex = 0;

                if (text[i] === matchStr[matchIndex]) {
                    startCheck = true;
                    matchIndex++;
                }
            }
        }
    }

    return false;
}