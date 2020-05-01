function countWordsInText(text) {
    text += '';
    let words = text.split(/[^A-Za-z]/).filter(x => x);
    let obj = {};
    words.forEach(word => {
        if (Object.keys(obj).includes(word)) {
            obj[word] += 1;
        } else {
            Object.defineProperty(obj, word, { value: 1, enumerable: true, writable: true });
        }
    });
    return JSON.stringify(obj);
}

console.log(countWordsInText(['Far too slow, you\'re far too slow.']));