function smallestKNumbers(array, k = 2) {
    let kElements = array.sort((a, b) => { return a - b }).slice(0, k);
    return kElements.join(' ');
}

console.log(smallestKNumbers([30, 15, 50, 5]));