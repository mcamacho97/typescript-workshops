// Narrowing
function padLeft(padding, input) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    // string case
    return padding + input;
}
// typeof type guards
// As we’ve seen, JavaScript supports a typeof operator which can give very basic information about 
// the type of values we have at runtime. TypeScript expects this to return a certain set of strings:
// "string", "number", "bigint", "boolean", "symbol", "undefined", "object", "function"
function printAll(strs) {
    if (typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
    else {
        // do nothing
    }
}
