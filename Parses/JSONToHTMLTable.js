//TODO: The data insert into the table row is not converted to html equivelant. E.x. & => & but is has to go to & => &amp
//      This is done in the htmlEntitiesEncoder.js 
//TODO: Refactor.
function JSONToHTMLTable(arrayOfJSON) {
    let htmlTable = '';
    htmlTable += '<table>\n';

    let htmlEntitiesEncoder = (text) => {
        let htmlText = text;
        text += '';

        if (text.includes('&')) {
            htmlText = text.replace(/&/g, '&amp;');
        }
        if (text.includes('<')) {
            htmlText = text.replace(/</g, '&lt;');
        }
        if (text.includes('>')) {
            htmlText = text.replace(/>/g, '&gt;');
        }
        if (text.includes('"')) {
            htmlText = text.replace(/"/g, '&quot;');
        }
        if (text.includes('\'')) {
            htmlText = text.replace(/\'/g, '&apos;');
        }

        return htmlText;
    };
    let addTableData = (data) => {
        htmlTable += `\t\t<td>${data}</td>\n`;
    };
    let addTableRow = (json) => {

        htmlTable += '\t<tr>\n';

        let obj = JSON.parse(json);
        let objKeys = Object.keys(obj);

        objKeys.forEach(key => {
            addTableData(htmlEntitiesEncoder(obj[key]));
        });

        htmlTable += '\t</tr>\n';

    };

    arrayOfJSON.forEach(json => {
        addTableRow(json);
    });

    htmlTable += '</table>';
    return htmlTable;
}

// Example:
let arrayOfJSON = ['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}',
    '{"family":"Kolevite","familyHouse":"Medkovec"}'
];

console.log(JSONToHTMLTable(arrayOfJSON));