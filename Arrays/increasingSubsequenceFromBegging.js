function increasingSubsequenceFromBegging(array) {
    let subsequence = [];
    let index = -1;
    array.forEach(element => {
        if (index === -1) {
            subsequence.push(element);
            index++;
        } else if (subsequence[index] <= element) {
            subsequence.push(element);
            index++;
        }
    });
    return subsequence.join('\n');
}