/*You have to create a sorted catalogue of store products.
 *You will be given the products’ names and prices. 
 *You need to order them by alphabetical order. 
 */

/*
 * We will assume that the catalogue will only be used to print the info of the items.
 * The itemsInfo will contain no duplicate elemets. Or if they are duplicate they will be with different prices.
 * Or even if it contains duplicate items they will be next to each other. Because of the sorting order.
 */

function catalogue(itemsInfo) {

    let sortedCatalog = (catalogue) => {
        let sortedCatalog = "";
        let letterKeys = Object.keys(catalogue);
        letterKeys.sort();
        letterKeys.forEach(letter => {
            sortedCatalog += `${letter}\n`;
            let productKeys = Object.keys(catalogue[letter]);
            productKeys.sort();

            productKeys.forEach(productKey => {
                sortedCatalog += `\t${productKey}: ${catalogue[letter][productKey]}\n`
            });

        });
        return sortedCatalog;
    }
    const catalogue = {};

    itemsInfo.forEach(items => {

        let [name, price] = items.split(':').map(x => x.trim());
        let keys = Object.keys(catalogue);

        let startingLetter = name[0].toUpperCase();
        if (!keys.includes(startingLetter)) {

            Object.defineProperty(catalogue, startingLetter, { value: {}, enumerable: true, writable: true, configurable: true });

        }

        Object.defineProperty(catalogue[startingLetter], name, { value: Number(price), enumerable: true });

    });

    return sortedCatalog(catalogue);
}
let itemsInfo = [
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10',
        'Banana : 2',
        'Rubic\'s Cube: 5 ',
        'Raspberry P : 4999',
        'Rolex : 100000',
        'Rollon : 10',
        'Rali Car : 2000000',
        'Pesho : 0.000001',
        'Barrel : 10'
    ]

];

itemsInfo.forEach(items => {
    console.log(catalogue(items));
    console.log();
})