function name(num1) {
    return function(num2) {
        return num1 * num2;
    };
}

console.log(name(5)(2));