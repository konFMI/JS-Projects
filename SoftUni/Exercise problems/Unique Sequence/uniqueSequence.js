function uniqueSequence(arrayOfJSON) {
    let collection = {};

    // Filling the collection
    arrayOfJSON.forEach(json => {
        let array = JSON.parse(json).sort((a, b) => b - a);
        let key = [...new Set(array)].join(''); // The unique elemets are the keys.
        let collectionKeys = Object.keys(collection);

        if (!collectionKeys.includes(key)) {
            Object.defineProperty(collection, key, { value: array, enumerable: true });
        }
    });

    let collectionKeys = Object.keys(collection);
    let output = '';
    collectionKeys.sort((leftKey, rightKey) => collection[leftKey].length - collection[rightKey].length);
    collectionKeys.forEach(key => {
        output += `[${collection[key].join(', ')}]\n`;
    });
    return output;
}

let arrayOfJSON = ["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
];


console.log(uniqueSequence(arrayOfJSON));