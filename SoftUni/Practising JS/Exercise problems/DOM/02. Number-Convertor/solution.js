function solveMine() {
    function addOptionTo(id, value, text) {
        let selectMenuTo = document.getElementById(id);
        let option = document.createElement('option');
        option.nodeValue = 'value'
        option.value = value;
        option.text = text;
        selectMenuTo.appendChild(option);
    }
    addOptionTo('selectMenuTo', 'binary', 'Binary');
    addOptionTo('selectMenuTo', 'hexadecimal', 'Hexadecimal');

    let option = document.getElementById('selectMenuTo');
    let input = document.getElementById('input');
    let button = document.querySelector("button");

    button.addEventListener('click', (e) => {
        let result = '';
        if (option.value === 'binary') {
            result = Number(input.value).toString(2);
        } else if (option.value === 'hexadecimal') {
            result = Number(input.value).toString(16).toUpperCase();
        }

        document.getElementById('result').value = result;
    })


}

function solve() {
    let optionList = document.querySelectorAll("#selectMenuTo")[0];
    optionList.innerHTML = `
    <option selected value=""></option>
    <option value="binary">Binary</option>
    <option value="hexadecimal">Hexadecimal</option>
`;

    let input = document.getElementById('input');
    let button = document.querySelector("button");

    button.addEventListener('click', (e) => {
        let result = '';
        if (optionList.value === 'binary') {
            result = Number(input.value).toString(2);
        } else if (optionList.value === 'hexadecimal') {
            result = Number(input.value).toString(16).toUpperCase();
        }

        document.getElementById('result').value = result;
    })


}