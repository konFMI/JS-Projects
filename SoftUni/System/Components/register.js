/* Info about the function in the ../System/descriptionOfRegister.txt.
 * Love you mom. Love you dad.
 * Love my brothers Ramzes and Aris.
 * Love the familly.
 */

function register(systemData) {

    let print = (database) => {
        let systemKeys = Object.keys(database);

        systemKeys.sort((leftSystemName, rightSystemName) => {
            let [leftComponentsSize, rightComponentsSize] = [Object.keys(database[leftSystemName]).length, Object.keys(database[rightSystemName]).length];
            if (leftComponentsSize != rightComponentsSize) {
                return rightComponentsSize - leftComponentsSize;
            } else {
                return leftSystemName.toLowerCase().localeCompare(rightSystemName.toLowerCase());
            }
        });
        let output = '';
        systemKeys.forEach(systemKey => {
            let componentKeys = Object.keys(database[systemKey]);
            componentKeys.sort((leftComponent, rightComponent) => {
                let [leftComponents, rightComponents] = [database[systemKey][leftComponent], database[systemKey][rightComponent]];
                return rightComponents.length - leftComponents.length;
            });

            output += `${systemKey}\n`;
            componentKeys.forEach(componentKey => {
                output += `|||${componentKey}\n`;
                database[systemKey][componentKey].forEach(subcomponent => {
                    output += `||||||${subcomponent}\n`;
                });
            });

        });

        return output.trim();
    }

    let database = {};
    systemData.forEach(data => {

        let [systemName, componentName, subcomponentName] = data.split('|').map(x => x.trim());
        let systemKeys = Object.keys(database);

        if (!systemKeys.includes(systemName)) {
            Object.defineProperty(database, systemName, { value: {}, enumerable: true, writable: true, configurable: true });
        }

        let componentKeys = Object.keys(database[systemName]);
        if (!componentKeys.includes(componentName)) {
            Object.defineProperty(database[systemName], componentName, { value: [], enumerable: true, writable: true, configurable: true });
        }

        if (!database[systemName][componentName].includes(subcomponentName)) {
            database[systemName][componentName].push(subcomponentName);
        }

    });
    let output = print(database);

    return output;
}


let data = [
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
];
console.log('SULS'.localeCompare('LAMBDA'));
console.log(register(data));