function sameNumbers(numbers) {

    let number = numbers.toString().split('');
    let allTrue = true;
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        if (allTrue) {
            allTrue = number[i] === number[0];
        }
        sum = sum + +number[i];
    }

    return `${allTrue}\n${sum}`;

}

console.log(sameNumbers(111112));