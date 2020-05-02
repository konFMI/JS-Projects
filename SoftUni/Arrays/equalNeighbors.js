function equalNeighbors(matrix) {
    let countOfNeighbors = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row < matrix.length - 1 && matrix[row][col] === matrix[row + 1][col]) {
                countOfNeighbors++;
            }
            if (col < matrix[row].length - 1 && matrix[row][col] === matrix[row][col + 1])
                countOfNeighbors++;
        }
    }
    return countOfNeighbors;
}


// let matrix = [
//     [1, 2, 3, 4],
//     [1, 2, 2, 3],
//     [1, 2, 3, 4],
//     [1, 2, 2, 2]
// ];
// console.log(equalNeighbors(matrix));