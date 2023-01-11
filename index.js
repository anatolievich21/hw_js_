/////////////
// task #1 //
/////////////
let randomArray = new Array(100);

for (let i = 0; i < randomArray.length; i++){
    randomArray[i] = Math.floor(Math.random() * 101);
}

function sortByHeight(array) {
    let sortedArray = array.slice().sort((a, b) => a - b);
    return sortedArray;
}

function valueGreaterThan50(array) {
    let filteredArray = array.filter(element => element > 50);
    return filteredArray;
}

let sortedArray = sortByHeight(randomArray);
let filteredArray = valueGreaterThan50(sortedArray);


console.log(filteredArray);

/////////////
// task #2 //
/////////////
let myArray = new Array(100);

function getRandomString() {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let randomString = '';
    for (let i = 0; i < 5; i++) {
        randomString += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return randomString;
}

for (let i = 0; i < myArray.length; i++) {
    myArray[i] = getRandomString();
}


function sortAscending(arr) {
    return arr.slice().sort();
}

let sortedArrayTwo = sortAscending(myArray);

function transformToObject(arr) {
    return arr.map(element => {
        return {value: element};
    });
}

let transformedArray = transformToObject(myArray);;