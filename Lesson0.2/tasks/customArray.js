class CustomArray {
    constructor() {
        this.length = 0;
        Object.defineProperty(this, "length", {
            writable: true,
            enumerable: false
        });
    }

    push(...elements) {
        for (let i = 0; i < elements.length; i++) {
            this[this.length] = elements[i];
            this.length++; 
        }
        return this.length;
    }

    pop() {
        if (this.length === 0) return undefined; 
        const lastElement = this[this.length - 1];
        delete this[this.length - 1];
        this.length--;
        return lastElement;
    }

    at(index) {
        if (index < 0) {
            index = this.length + index;
        }
        return this[index];
    }

    shift() {
        if (this.length === 0) return undefined;
        const firstElement = this[0];
        for (let i = 0; i < this.length - 1; i++) {
            this[i] = this[i + 1];
        }
        delete this[this.length - 1];
        this.length--;
        return firstElement;
    }

    unshift(...elements) {
        for (let i = this.length - 1; i >= 0; i--) {
            this[i + elements.length] = this[i];
        }
        for (let i = 0; i < elements.length; i++) {
            this[i] = elements[i];
        }
        this.length += elements.length;
        return this.length;
    }

    toString() {
        let result = "";
        for (let i = 0; i < this.length; i++) {
            result += (i > 0 ? "," : "") + this[i];
        }
        return result;
    }
}

const customArray = new CustomArray();
customArray.push(1, 2, 3);
console.log(customArray.toString()); // "1,2,3"
console.log(customArray.pop()); // 3
customArray.unshift(0);
console.log(customArray.toString()); // "0,1,2"
console.log(customArray.shift()); // 0
