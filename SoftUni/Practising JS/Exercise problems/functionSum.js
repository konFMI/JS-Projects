/*
Write a function that adds a number passed to it to an internal sum and returns itself with its internal sum set to
the new value, so it can be chained in a functional manner.
*/

const add = (function() {
    let sum = 0;

    function add(addend) {
        sum += addend;
        return add;
    };

    add.toString = function() {
        return sum;
    }

    return add;
})();
console.log(add(1)(2)(3).toString());