function sumByTown(input) {
    const data = {};

    for (let index = 0; index < input.length - 1; index += 2) {

        let [townName, value] = input.slice(index, index + 2);
        if (Object.keys(data).includes(townName)) {
            data[townName] += Number(value);
        } else {
            Object.defineProperty(data, townName, { value: Number(value), enumerable: true, writable: true });
        }

    }

    return JSON.stringify(data);
}


console.log(sumByTown(['Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4'
]));