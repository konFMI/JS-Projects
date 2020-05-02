"use strict"

function getValue(obj, propertyName) {
    console.log(obj[propertyName]);
}

const bestFriend = {
    firstName: 'Aris',
    lastName: 'Ramzes',
    fullName: function() {
        return `${ this.firstName } ${ this.lastName }`;
    }
};
const friend = {
    firstName: 'Neke',
    lastName: 'Burde',
    fullName: function() {
        return `${ this.firstName } ${ this.lastName }`;
    }
};
let array = [1, 2];

for (const key of array) {
    console.log(array[key]);

}