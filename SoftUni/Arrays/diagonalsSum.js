function diagonalsSum(matrix) {
    let diagonalSum = [0, 0];
    let i = 0;
    let length = matrix.length;
    while (i < length) {
        diagonalSum[0] += matrix[i][i];
        diagonalSum[1] += matrix[i][length - 1 - i];
        i++;
    }
    return diagonalSum.join(' ');
}