function arenaTier(commands) {
    let gladiatorPool = {};
    for (let index = 0; index < commands.length; index++) {
        const command = commands[index];
        if (command === 'Ave Cesar') {
            break;
        } else if (command.includes('vs')) {

            let [fighterOneName, fighterTwoName] = command.split('vs').map(x => x.trim());
            let gladiatorNames = Object.keys(gladiatorPool);
            if (gladiatorNames.includes(fighterOneName) && gladiatorNames.includes(fighterTwoName)) {

                let [fighterOneSkills, fighterTwoSkills] = [Object.keys(gladiatorPool[fighterOneName]), Object.keys(gladiatorPool[fighterTwoName])];
                let commonSkills = fighterOneSkills.filter(s => fighterTwoSkills.includes(s));
                if (commonSkills.length > 0) {

                    let [gladiatorOneTottalPoins, gladiatorTwoTottalPoins] = [gladiatorPool[fighterOneName]['TottalSkillPoints'], gladiatorPool[fighterTwoName]['TottalSkillPoints']];
                    let defeatedFighter = (gladiatorOneTottalPoins < gladiatorTwoTottalPoins) ? fighterOneName : fighterTwoName;

                    delete gladiatorPool[defeatedFighter];
                }
            }
        } else {
            let [name, skill, skillPoint] = command.split('->').map(x => x.trim());
            //let skillPoint = Number(_skillPoint);
            let gladiatorNames = Object.keys(gladiatorPool);
            if (!gladiatorNames.includes(name)) {
                Object.defineProperty(gladiatorPool, name, { value: {}, enumerable: true, writable: true, configurable: true });
                Object.defineProperty(gladiatorPool[name], 'TottalSkillPoints', { value: 0, enumerable: false, writable: true, configurable: true });
            }

            let gladiatorSkills = Object.keys(gladiatorPool[name]);
            if (!gladiatorSkills[skill]) {
                Object.defineProperty(gladiatorPool[name], skill, { value: 0, enumerable: true, writable: true });
            }

            if (gladiatorPool[name][skill] < skillPoint) {
                gladiatorPool[name]['TottalSkillPoints'] -= (gladiatorPool[name][skill] - skillPoint);
                gladiatorPool[name][skill] = skillPoint;

            }
        }


    }

    let output = '';
    let gladiatorNames = Object.keys(gladiatorPool);
    gladiatorNames.sort((a, b) => {

        if (!(gladiatorPool[b]['TottalSkillPoints'] === gladiatorPool[a]['TottalSkillPoints'])) {
            return gladiatorPool[b]['TottalSkillPoints'] - gladiatorPool[a]['TottalSkillPoints'];
        } else {
            return a.localeCompare(b);
        }
    });
    gladiatorNames.forEach(name => {
        output += `${name}: ${gladiatorPool[name]['TottalSkillPoints']} skill\n`;
        let skills = Object.keys(gladiatorPool[name]);
        skills.sort((a, b) => {
            if (!(gladiatorPool[name][a] === gladiatorPool[name][b])) {
                return gladiatorPool[name][b] - gladiatorPool[name][a];
            } else {
                return a.localeCompare(b);
            }
        })
        skills.forEach(skill => {
            output += `- ${skill} <!> ${gladiatorPool[name][skill]}\n`;
        });
    });
    return output;
}


let commands = [
    [
        'Pesho -> BattleCry -> 400',
        'Gosho -> PowerPunch -> 300',
        'Stamat -> Duck -> 200',
        'Stamat -> Tiger -> 250',
        'Ave Cesar'
    ],
    [
        'Pesho -> Duck -> 400',
        'Julius -> Shield -> 150',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Pesho vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Gosho',
        'Ave Cesar'
    ]
]

console.log(arenaTier(commands[1]));
console.log('a'.localeCompare('b'))