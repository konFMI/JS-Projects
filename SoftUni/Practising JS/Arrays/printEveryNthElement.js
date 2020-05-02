/*
 * The last element acts as the step. If it is NaN the step is set to defaultStep;
 */
function selectEveryNthElement(array) {
    let defaultStep = 1;
    let step = array.pop();
    if (!isNaN(step)) {
        step = Number(step);
    } else {
        step = defaultStep;
    }
    let elements = [];
    for (let index = 0; index < array.length; index += step) {
        elements.push(array[index]);
    }
    return elements.join(' ');
}

// console.log(selectEveryNthElement(['1', '2', '3', '4', '5', '6', '12', '13', '13', '13', '14', '3']));
// console.log(selectEveryNthElement(['1', '2', '3', '4', '5', '6', '12', '13', '13', '13', '14', '5']));
// console.log(selectEveryNthElement(['1', '2', '3', '4', '5', '6', '12', '13', '13', '13', '14', '6']));
// console.log(selectEveryNthElement(['1', '2', '3', '4', '5', '6', '12', '13', '13', '13', '14', 't']));