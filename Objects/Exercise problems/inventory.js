function inventory(data) {
    let reducer = (acc, heroString) => {
        let [heroName, level, items] = heroString.split(' / ');
        acc.push({
            name: heroName,
            level: Number(level),
            items: items ? items.split(',').map(x => x.trim()) : []
        });
        return acc;

    };

    let parsedData = data.reduce(reducer, []);

    return JSON.stringify(parsedData);
}

console.log(inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]));