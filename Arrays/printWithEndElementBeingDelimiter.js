function printWithEndElementBeingDelimiter(array) {
    let delimiter = array.pop();
    return array.join(delimiter);
}

console.log(printWithEndElementBeingDelimiter(['a', 'b', '-']));