function rotateArray(array) {

    let numberOfRotations = array.pop();
    if (isNaN(numberOfRotations)) {
        numberOfRotations = 0;
    }

    numberOfRotations = numberOfRotations % array.length;

    let rotate = () => {
        let lastElement = array[array.length - 1];
        for (let index = array.length - 1; index > 0; index--) {
            array[index] = array[index - 1];
        }
        array[0] = lastElement;
    }

    while (numberOfRotations > 0) {
        rotate();
        numberOfRotations--;
    }

    return array.join(' ');
}
let array = ['Banana', 'Orange', 'Coconut', 'Apple', 15];
let arr = [1, 2, 3, 4, 5, 2]
    // [2,3,4,5,1]
    // [3,4,5,1,2]
    // [4,5,1,2,3]
    // [5,1,2,3,4]
    // [1,2,3,4,5]
console.log(rotateArray(array));