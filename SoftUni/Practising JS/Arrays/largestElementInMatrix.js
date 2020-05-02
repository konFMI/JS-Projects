function largestElementInMatrix(array) {
    let max = Number.NEGATIVE_INFINITY;
    array.forEach(subArray => {
        subArray.forEach(element => {
            if (max < element) {
                max = element;
            }
        });
    });
    return max;
}



//console.log(largestElementInMatrix([20, 50, 10]]));