function htmlnEntitiesEncoder(text) {
    let htmlText = '';
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
}