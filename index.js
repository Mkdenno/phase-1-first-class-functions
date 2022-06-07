
function receivesAFunction(callback) {
    callback()
}
function sayHi() {
    return `say hi`;
}

function returnsANamedFunction() {
    return sayHi;
}

function returnsAnAnonymousFunction() {
    return function () {
        return "hello everyone";
    }
}

