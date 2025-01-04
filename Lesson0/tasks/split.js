export default function split(text, divider) {
    const result = [];
    let temp = '';
    let matchIndex = 0;
    let dividerPart = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        // console.log("temp", temp);
        // console.log("dividerPart", dividerPart);

        if (divider && char === divider[matchIndex]) {
            dividerPart += divider[matchIndex];
            matchIndex++;
            if (matchIndex === divider.length) {
                result.push(temp);
                temp = '';
                dividerPart = '';
                matchIndex = 0; 
            }
        } else {
            if (matchIndex > 0) {
                temp += dividerPart;
                dividerPart = '';
                matchIndex = 0; 
            }
            temp += char;
        }
    }

    if (matchIndex > 0) temp += dividerPart;
    result.push(temp);

    return result;
}