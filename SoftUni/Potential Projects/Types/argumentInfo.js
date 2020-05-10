// Function that displays information about the arguments
// which are passed to it (type and value) and a summary about the number of times
// each type was passed.

function argumentInfo() {
    let typesRepository = [];
    let countTypes = {};
    for (let i = 0; i < arguments.length; ++i) {
        let type = typeof(arguments[i]);
        let value = String(arguments[i]);

        typesRepository.push(`${type}: ${value}`);
        if (!countTypes.hasOwnProperty(type)) {
            //Object.defineProperty(countTypes, type, { value: 0, enumerable: true, writable: true });
            countTypes[type] = 0;
        }

        countTypes[type] += 1;
    }

    let output = '';
    output += typesRepository.join('\n');
    output += '\n';
    output += Object.keys(countTypes).reduce(
        (acc, type) => {
            acc.push(`${type} = ${countTypes[type]}`);
            return acc;
        }, []).join('\n');
    return (output);
}

console.log(argumentInfo(1, 2, 3, 'asdasd', function() { console.log }));