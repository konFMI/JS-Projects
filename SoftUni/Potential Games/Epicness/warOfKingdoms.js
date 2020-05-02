function warOfKingdoms(input) {
    const kingdoms = {}
    let kingdomObjects = input[0];
    kingdomObjects.forEach(object => {

        let [kingdom, general, army] = [object['kingdom'], object['general'], object['army']];

        let kingdomsNames = Object.keys(kingdoms);
        if (!kingdomsNames.includes(kingdom)) {
            Object.defineProperty(kingdoms, kingdom, { value: {}, enumerable: true, writable: true });
        }

        let generalsNames = Object.keys(kingdoms[kingdom]);
        if (!generalsNames.includes(general)) {
            Object.defineProperty(kingdoms[kingdom], general, { value: {}, enumerable: true, writable: true });
            Object.defineProperty(kingdoms[kingdom][general], 'wins', { value: 0, enumerable: true, writable: true });
            Object.defineProperty(kingdoms[kingdom][general], 'losses', { value: 0, enumerable: true, writable: true });
            Object.defineProperty(kingdoms[kingdom][general], 'army', { value: 0, enumerable: true, writable: true });
        }

        kingdoms[kingdom][general]['army'] += Number(army);
    });

    let battles = input[1];
    battles.forEach(battle => {
        const winningPercentageIncrease = 0.1;
        const loosingPercentageDecrease = 0.1;
        let [attackingKingdom, attackingGeneral, defendingKingdom, defendingGeneral] = battle;
        let [attackingKingdomArmy, defendingKingdomArmy] = [kingdoms[attackingKingdom][attackingGeneral]['army'], kingdoms[defendingKingdom][defendingGeneral]['army']];
        if (attackingKingdom != defendingKingdom) {


            if (attackingKingdomArmy > defendingKingdomArmy) {

                kingdoms[attackingKingdom][attackingGeneral]['army'] += attackingKingdomArmy * winningPercentageIncrease;
                kingdoms[attackingKingdom][attackingGeneral]['army'] = Math.floor(kingdoms[attackingKingdom][attackingGeneral]['army']);
                kingdoms[attackingKingdom][attackingGeneral]['wins'] += 1;

                kingdoms[defendingKingdom][defendingGeneral]['army'] -= defendingKingdomArmy * loosingPercentageDecrease;
                kingdoms[defendingKingdom][defendingGeneral]['army'] = Math.floor(kingdoms[defendingKingdom][defendingGeneral]['army']);
                kingdoms[defendingKingdom][defendingGeneral]['losses'] += 1;

            } else if (attackingKingdomArmy < defendingKingdomArmy) {

                kingdoms[attackingKingdom][attackingGeneral]['army'] -= attackingKingdomArmy * loosingPercentageDecrease;
                kingdoms[attackingKingdom][attackingGeneral]['army'] = Math.floor(kingdoms[attackingKingdom][attackingGeneral]['army']);
                kingdoms[attackingKingdom][attackingGeneral]['losses'] += 1;

                kingdoms[defendingKingdom][defendingGeneral]['army'] += defendingKingdomArmy * winningPercentageIncrease;
                kingdoms[defendingKingdom][defendingGeneral]['army'] = Math.floor(kingdoms[defendingKingdom][defendingGeneral]['army']);
                kingdoms[defendingKingdom][defendingGeneral]['wins'] += 1;

            }
        }
    });

    let kingdomsPrintFormat = [];
    Object.keys(kingdoms).forEach(kingdom => {
        let wins = 0;
        let losses = 0;
        Object.keys(kingdoms[kingdom]).forEach(general => {

            wins += kingdoms[kingdom][general]['wins'];
            losses += kingdoms[kingdom][general]['losses'];

        })
        kingdomsPrintFormat.push({
            name: kingdom,
            wins,
            losses
        });
    });
    kingdomsPrintFormat.sort((leftKingdom, rightKingdom) => {
        if (leftKingdom['wins'] != rightKingdom['wins']) {
            return rightKingdom['wins'] - leftKingdom['wins'];
        } else if (leftKingdom['losses'] != rightKingdom['losses']) {
            return leftKingdom['losses'] - rightKingdom['losses'];
        } else {
            return leftKingdom['name'].localCompare(rightKingdom['name']);
        }
    });

    let winningKingdom = kingdomsPrintFormat[0]['name'];
    let generalsPrintFormat = Object.keys(kingdoms[winningKingdom]);
    generalsPrintFormat.sort((a, b) => kingdoms[winningKingdom][b]['army'] - kingdoms[winningKingdom][a]['army']);

    let output = `Winner: ${winningKingdom}\n`;
    generalsPrintFormat.forEach(general => {

        output += `/\\general: ${general}\n`;
        output += `---army: ${kingdoms[winningKingdom][general]['army']}\n`;
        output += `---wins ${kingdoms[winningKingdom][general]['wins']}\n`;
        output += `---losses ${kingdoms[winningKingdom][general]['losses']}\n`;

    });

    return output;
}

let input = [
    [
        [
            { kingdom: "Maiden Way", general: "Merek", army: 5000 },
            { kingdom: "Stonegate", general: "Ulric", army: 4900 },
            { kingdom: "Stonegate", general: "Doran", army: 70000 },
            { kingdom: "YorkenShire", general: "Quinn", army: 0 },
            { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
            { kingdom: "Maiden Way", general: "Berinon", army: 100000 }
        ],
        [
            ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
            ["Stonegate", "Ulric", "Stonegate", "Doran"],
            ["Stonegate", "Doran", "Maiden Way", "Merek"],
            ["Stonegate", "Ulric", "Maiden Way", "Merek"],
            ["Maiden Way", "Berinon", "Stonegate", "Ulric"]
        ]
    ],
    [
        [
            { kingdom: "Maiden Way", general: "Merek", army: 5000 },
            { kingdom: "Stonegate", general: "Ulric", army: 4900 },
            { kingdom: "Stonegate", general: "Doran", army: 70000 },
            { kingdom: "YorkenShire", general: "Quinn", army: 0 },
            { kingdom: "YorkenShire", general: "Quinn", army: 2000 }
        ],
        [
            ["YorkenShire", "Quinn", "Stonegate", "Doran"],
            ["Stonegate", "Ulric", "Maiden Way", "Merek"]
        ]
    ]
];

input.forEach(game => {
    console.log(warOfKingdoms(game));
    console.log('*******************');
});