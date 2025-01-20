// Custom implementation of Map
class CustomMap {
    constructor() {
        this._entries = []; // Array to store key-value pairs
    }

    // Set a key-value pair
    set(key, value) {
        const index = this._findKeyIndex(key);
        if (index === -1) {
            this._entries.push({ key, value });
        } else {
            this._entries[index].value = value;
        }
    }

    // Get the value associated with a key
    get(key) {
        const index = this._findKeyIndex(key);
        return index === -1 ? undefined : this._entries[index].value;
    }

    // Check if a key exists
    has(key) {
        return this._findKeyIndex(key) !== -1;
    }

    // Delete a key-value pair
    delete(key) {
        const index = this._findKeyIndex(key);
        if (index !== -1) {
            this._entries.splice(index, 1);
            return true;
        }
        return false;
    }

    // Clear all entries
    clear() {
        this._entries = [];
    }

    // Get the size of the map
    get size() {
        return this._entries.length;
    }

    // Iterate over entries
    forEach(callback) {
        for (const entry of this._entries) {
            callback(entry.value, entry.key, this);
        }
    }

    // Find the index of a key
    _findKeyIndex(key) {
        return this._entries.findIndex(entry => Object.is(entry.key, key));
    }
}

// Custom implementation of Set
class CustomSet {
    constructor() {
        this._values = []; // Array to store unique values
    }

    // Add a value
    add(value) {
        if (!this.has(value)) {
            this._values.push(value);
        }
    }

    // Check if a value exists
    has(value) {
        return this._values.some(v => Object.is(v, value));
    }

    // Delete a value
    delete(value) {
        const index = this._values.findIndex(v => Object.is(v, value));
        if (index !== -1) {
            this._values.splice(index, 1);
            return true;
        }
        return false;
    }

    // Clear all values
    clear() {
        this._values = [];
    }

    // Get the size of the set
    get size() {
        return this._values.length;
    }

    // Iterate over values
    forEach(callback) {
        for (const value of this._values) {
            callback(value, value, this);
        }
    }
}