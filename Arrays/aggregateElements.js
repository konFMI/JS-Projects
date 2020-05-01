function aggregateElements(elements){

    let sum = 0;
    let reciprocalSum = 0;
    let elementsString = '';
    elements.forEach(element => {
        sum += element;
        reciprocalSum += 1/element;
        elementsString += element;
    });

    console.log(sum + '\n' + reciprocalSum + '\n' + elementsString);

}

aggregateElements([1,2,3,4]);