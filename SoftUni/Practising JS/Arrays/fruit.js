function fruit (fruit, grams, price) {
    const weightInKg = (grams / 1000);
    const totalPrice = ( weightInKg * price ).toFixed(2);
    return `I need $${totalPrice} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`
}

console.log('first', 'second', 'third')