function isMagicMatrix(matrix) {
    let sums = [];
    let sumRow = 0;
    let sumCol = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            sumRow += matrix[row][col];
            sumCol += matrix[col][row];
        }
        sums.push(sumRow);
        sums.push(sumCol);
        sumRow = 0;
        sumCol = 0;
    }
    for (let index = 0; index < sums.length - 1; index++) {
        if (sums[index] != sums[index + 1]) {
            return false;
        }
    }
    return true;
}

console.log(isMagicMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));

console.log(isMagicMatrix([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]));