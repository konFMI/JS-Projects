function negativePositiveNumbers(array) {
    let negativePositive = [];
    array.forEach(element => {
        if (element < 0) {
            negativePositive.unshift(element);
        } else {
            negativePositive.push(element);
        }
    });

    return negativePositive.join('\n');
}

console.log(negativePositiveNumbers([1, 2, -1, -2]));