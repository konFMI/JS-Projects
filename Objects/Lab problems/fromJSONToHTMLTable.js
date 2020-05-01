function fromJSONToHTMLTable(json) {
    let html = "";
    let objects = JSON.parse(json);
    var keys = Object.keys(objects[0]);
    html += ("<table>\n\t");
    html += '<tr>';
    keys.forEach(key => {
        html += (`<th>${key}</th>`);
    });
    html += '</tr>\n';

    // (&,<,>,",') 

    let preventDangerousCode = (text) => {
        text += "";

        if (text.includes('&')) {
            text = text.replace(/&/g, '&amp;');
        }
        if (text.includes('<')) {
            text = text.replace(/</g, '&lt;');
        }
        if (text.includes('>')) {
            text = text.replace(/>/g, '&gt;');
        }
        if (text.includes('"')) {
            text = text.replace(/"/g, '&quot;');
        }
        if (text.includes('\'')) {
            text = text.replace(/\'/g, '&apos;');
        }

        return text;
    }

    objects.forEach(obj => {
        html += '\t<tr>';

        keys.forEach(key => {

            let htmlElement = `<td>${preventDangerousCode(obj[key])}</td>`;
            html += (htmlElement);
        });
        html += '</tr>\n';
    });

    html += ("</table>\n");
    return html;
}


var data = ['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]'];
console.log(fromJSONToHTMLTable(data));
//console.log("<div>>".replace(/>/g, "kur"));