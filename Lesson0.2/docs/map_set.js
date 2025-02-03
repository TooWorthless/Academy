
class CustomMap {
    constructor() {
        this._entries = [];
    }

    set(key, value) {
        const index = this._findKeyIndex(key);
        if (index === -1) {
            this._entries.push({ key, value });
        } else {
            this._entries[index].value = value;
        }
    }

    get(key) {
        const index = this._findKeyIndex(key);
        return index === -1 ? undefined : this._entries[index].value;
    }

    has(key) {
        return this._findKeyIndex(key) !== -1;
    }

    delete(key) {
        const index = this._findKeyIndex(key);
        if (index !== -1) {
            this._entries.splice(index, 1);
            return true;
        }
        return false;
    }

    clear() {
        this._entries = [];
    }

    get size() {
        return this._entries.length;
    }

    forEach(callback) {
        for (const entry of this._entries) {
            callback(entry.value, entry.key, this);
        }
    }

    _findKeyIndex(key) {
        return this._entries.findIndex(entry => Object.is(entry.key, key));
    }
}

class CustomSet {
    constructor() {
        this._values = []; 
    }

    add(value) {
        if (!this.has(value)) {
            this._values.push(value);
        }
    }

    has(value) {
        return this._values.some(v => Object.is(v, value));
    }

    delete(value) {
        const index = this._values.findIndex(v => Object.is(v, value));
        if (index !== -1) {
            this._values.splice(index, 1);
            return true;
        }
        return false;
    }

    clear() {
        this._values = [];
    }

    get size() {
        return this._values.length;
    }

    forEach(callback) {
        for (const value of this._values) {
            callback(value, value, this);
        }
    }
}