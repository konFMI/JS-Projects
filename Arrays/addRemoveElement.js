function addRemoveElement(commands) {
    let element = 1;
    let array = [];
    commands.forEach(command => {
        switch (command) {
            case "add":
                array.push(element);
                element++;
                break;
            case "remove":
                if (array.length > 0) {
                    array.pop();
                }
                element++;
                break;
            default:
                break;
        }
    });

    let output = (array.length === 0) ? "Empty" : array.join('\n');
    return output;
}

console.log(addRemoveElement(['add', 'add', 'remove', 'remove', 'remove']));