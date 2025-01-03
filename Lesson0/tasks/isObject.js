export default function isObject(data) {
    return data instanceof Object && Object.getPrototypeOf(data) === Object.prototype;
};