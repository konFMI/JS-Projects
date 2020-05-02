function variationFibonacci(sizeOfSeries, numbersToSum) {
    let series = [1];
    let sum = (accumulator, currentValue) => {
        return accumulator + currentValue;
    }
    let k = Number(numbersToSum);
    let n = Number(sizeOfSeries);
    for (let i = 0; i < n; i++) {
        if (i < k) {
            series[i] = series.reduce(sum, 0);
        } else {
            series[i] = series.slice(i - k, i).reduce(sum, 0);
        }
        // series[i] =
    }
    return series.join(' ');
}

// console.log(variationFibonacci(20, 1));
// console.log(variationFibonacci(20, 2));
// console.log(variationFibonacci(20, 3));
// console.log(variationFibonacci(20, 4));
// console.log(variationFibonacci(20, 5));
// console.log(variationFibonacci(20, 6));
// console.log(variationFibonacci(20, 7));