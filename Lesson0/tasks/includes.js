export default function includes(text, matchStr, index = 0) {
    let matchIndex = 0;
    let startCheck = false;

    index = index < 0 ? 0 : index;

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