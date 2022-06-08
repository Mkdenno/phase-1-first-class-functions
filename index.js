
function receivesAFunction(callback) {
    callback()
}
function hello() {
    return ` hello`;
}

function returnsANamedFunction() {
    return hello;
}

function returnsAnAnonymousFunction() {
    return function () {
        return "hello everyone";
    }
}

