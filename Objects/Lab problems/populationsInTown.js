function populationInTown(data) {

    const obj = {};
    let cities = data.map(city => city.split(/<->/));

    cities.forEach(city => {

        if (Object.keys(obj).includes(city[0])) {

            obj[city[0]] += Number(city[1]);

        } else {

            Object.defineProperty(obj, city[0], { value: Number(city[1]), enumerable: true, writable: true });

        }
    });
    let output = '';
    for (const key in obj) {

        output += `${key}: ${obj[key]}\n`;


    };
    return output;
}
console.log(populationInTown(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]));