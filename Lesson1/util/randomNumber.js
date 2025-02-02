export default function randomNumber(left, right) {
    if(left >= right) throw new Error('Incorrect parameters');

    return Math.floor(left + (Math.random() * (right - left)));
};