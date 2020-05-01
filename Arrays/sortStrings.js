/*
 * Function that orders a given array of strings, by length in ascending order as primary criteria, and
 * by alphabetical value in ascending order as second criteria.
 */


function sortStrings(array) {

    let comparer = (leftString, rightString) => {
        if (leftString.length === rightString.length) {
            return leftString.toLocaleLowerCase().localeCompare(rightString.toLocaleLowerCase());
        } else {
            return leftString.length - rightString.length;
        }
    }

    return array.join('\n');
}