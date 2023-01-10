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
