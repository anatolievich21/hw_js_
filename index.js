/////////////
// task #1 //
/////////////

const randomArray = new Array(100);


for (let i = 0; i < randomArray.length; i++){
    randomArray[i] = Math.floor(Math.random() * 101); 
}

function sortByHeight(array) { 
    let sortedArray = [...array].sort((a, b) => a - b);
    return sortedArray;
}

function valueGreaterThan50(array) { 
    let filteredArray = array.filter(el => el > 50);
    return filteredArray;
}

let sortedArray = sortByHeight(randomArray);
let filteredArray = valueGreaterThan50(sortedArray);


console.log(sortedArray);

/////////////
// task #2 //
/////////////

const myArray = new Array(100);

const randomString = () => {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let randomString = '';
    for (let i = 0; i < 5; i++) {
        randomString += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return randomString;
}

for (let i = 0; i < myArray.length; i++) {
    myArray[i] = randomString();
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

let transformedArray = transformToObject(myArray);

console.log(sortedArrayTwo);
console.log(transformedArray);


/////////////
// task #3 //
/////////////
