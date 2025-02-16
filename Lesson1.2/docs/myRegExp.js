export default class MyRegExp {
    constructor(text) {
        this.text = text;
    }

    match(regexp) {
        console.log(this.text.match(regexp));
    }
}
