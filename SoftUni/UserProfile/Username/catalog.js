    function catalog(listOfNames) {
        let orderedList = listOfNames.sort((left, right) => {
            if (left.length !== right.length) {
                return left.length - right.length;
            } else {
                return left.localeCompare(right);
            }
        });
        return [...new Set(orderedList)].join('\n');
    }

    let testData = [
        [
            'Ashton',
            'Ashton',
            'Ashton',
            'Ashton',
            'Ashton',
            'Kutcher',
            'Kutcher',
            'Kutcher',
            'Kutcher',
            'Ariel',
            'Lilly',
            'Lilly',
            'Lilly',
            'Lilly',
            'Lilly',
            'Keyden',
            'Aizen',
            'Aizen',
            'Aizen',
            'Aizen',
            'Aizen',
            'Billy',
            'Braston'
        ],
        ['Denise',
            'Ignatius',
            'Iris',
            'Isacc',
            'Indie',
            'Dean',
            'Donatello',
            'Donatello',
            'Donatello',
            'Enfuego',
            'Benjamin',
            'Biser',
            'Bounty',
            'Renard',
            'Rot'
        ]
    ];
    console.log("*************************************");
    testData.forEach(data => {
        console.log(catalog(data));
        console.log("*************************************");
    });