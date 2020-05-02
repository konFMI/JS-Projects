function oddPositionElementsDoubledReversed(arrayOfNumbers) {
    let oddPositionElements = [];
    for (let index = 1; index < arrayOfNumbers.length; index += 2) {
        const element = arrayOfNumbers[index];
        oddPositionElements.push(2 * element);
    }
    return oddPositionElements.reverse().join(' ');
}

console.log(oddPositionElementsDoubledReversed([1, 2, 3, 4, 5]));