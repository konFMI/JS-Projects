function evenPositionElements(array) {
    let evenPositions = [];
    for (let i = 0; i < array.length; i += 2) {
        evenPositions.push(array[i]);
    }
    return evenPositions.join(' ');
}

console.log(evenPositionElements(['1', '2', '3', '4']));