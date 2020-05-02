//Function that sorts an array with numeric values in ascending or descending order, depending on an argument that is passed to it. 

function sort(array, typeSort) {
    if (typeSort == 'asc') {
        return array.sort((a, b) => a - b);
    } else if (typeSort == 'desc') {
        return array.sort((a, b) => (b - a));
    }
}

console.log(sort([2, 4, 1, 5], 'desc'));