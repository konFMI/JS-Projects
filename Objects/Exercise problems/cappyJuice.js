/*
 *  You will be given different juices, as strings. You will also receive quantity as a number. 
 *   If you receive a juice, you already have, you must sum the current quantity of that juice,
 *    with the given one. When a juice reaches 1000 quantity, it produces a bottle. You must store 
 *    all produced bottles and you must print them at the end.
 *   Note: 1000 quantity of juice is one bottle. If you happen to have more than 1000, 
 *   you must make as much bottles as you can, and store what is left from the juice.
 *   Example: You have 2643 quantity of Orange Juice – this is 2 bottles of Orange Juice 
 *   and 643 quantity left.
 */

function cappyJuice(juiceData) {
    let juices = {};
    let producedBottles = {};
    const MIN_QUANTITI_FOR_PRODUCTION = 1000;

    juiceData.forEach(juice => {

        let [name, quantity] = juice.split("=>").map(x => x.trim());
        if (Object.keys(juices).includes(name)) {

            juices[name] += Number(quantity);

        } else {

            Object.defineProperty(juices, name, { value: Number(quantity), enumerable: true, writable: true });

        }

        let value = juices[name]
        if (value >= MIN_QUANTITI_FOR_PRODUCTION) {
            let bottles = 0;
            while (value >= MIN_QUANTITI_FOR_PRODUCTION) {
                bottles += 1;
                value -= MIN_QUANTITI_FOR_PRODUCTION;
            }
            juices[name] = value;

            if (Object.keys(producedBottles).includes(name)) {

                producedBottles[name] += bottles;

            } else {

                Object.defineProperty(producedBottles, name, { value: bottles, enumerable: true, writable: true });

            }
        }

    });
    let output = Object.keys(producedBottles).reduce((acc, name) => {
        acc.push(`${name}=>${producedBottles[name]}`);
        return acc;
    }, []);
    return output.join('\n');
}

// Testing.
let juiceDataRepository = [
    [
        'Orange => 2000',
        'Peach => 1432',
        'Banana => 450',
        'Peach => 600',
        'Strawberry => 549'
    ],
    [
        'Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789'
    ]
];
juiceDataRepository.forEach(juiceData => {
    console.log(cappyJuice(juiceData));
    console.log();
});