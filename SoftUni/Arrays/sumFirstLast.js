function sumFirstLast(numberArray) {
    let sum = 0;
    if (numberArray.length >= 2) {
        sum += Number(numberArray.pop());
        sum += Number(numberArray.shift());
    } else if (numberArray.length === 1) {
        sum += Number(numberArray[0]);
    }
    return sum;
}