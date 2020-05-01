function townsParser(data) {

    data.shift();
    let reducer = (acc, townInfo) => {
        let [townName, latitude, longitude] = townInfo.split('|').filter(x => x.length > 0).map(x => x.trim());
        acc.push({
            Town: townName,
            Latitude: Number(Number(latitude).toFixed(2)),
            Longitude: Number(Number(longitude).toFixed(2))
        });
        return acc;
    };
    let parsedData = data.reduce(reducer, []);

    return JSON.stringify(parsedData);
}


console.log(townsParser(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]));