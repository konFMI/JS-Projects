/*
 *   You are tasked to create a register for a company that produces cars. 
 *   You need to store how many cars have been produced from a specified model of a specified brand.
 *   The input comes as array of strings. Each element holds information in the following format:
 *   “{carBrand} | {carModel} | {producedCars}”
 *   The car brands and models are strings, the produced cars are numbers. If the car brand you’ve received already exists,
 *   just add the new car model to it with the produced cars as its value. If even the car model exists, just 
 *   add the given value to the current one.
 */

function autoRegister(autoList) {
    let register = {};

    autoList.forEach(auto => {

        let [brand, model, quantity] = auto.split('|').map(x => x.trim());
        let brands = Object.keys(register);

        if (!brands.includes(brand)) {
            Object.defineProperty(register, brand, { value: {}, enumerable: true, writable: true, configurable: true });
        }

        let models = Object.keys(register[brand])
        if (!models.includes(model)) {
            Object.defineProperty(register[brand], model, { value: 0, enumerable: true, writable: true });
        }

        register[brand][model] += Number(quantity);

    });

    let print = (autoRegister) => {
        let output = '';
        let brands = Object.keys(autoRegister);

        brands.forEach(brand => {
            output += `${brand}\n`;

            let models = Object.keys(autoRegister[brand]);
            models.forEach(model => {
                output += `###${model} -> ${autoRegister[brand][model]}\n`;
            });

        });

        return output.trim();

    };
    return print(register);
}

let autoList = [
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
];

console.log(autoRegister(autoList));