/**
 * Created by Olga on 5/3/17.
 */

var vegetables = ['Asparagus', 'Beetroot', 'Carrot', 'Dill', 'Garlic'],
    min = 0;
    max = vegetables.length - 1;
    rand = min + Math.floor(Math.random() * (max + 1 - min));


function randomVeg(array, element) {
    console.log(array[element]);
}

randomVeg(vegetables, rand);

function addToEnd(array, element) {
    array.push(element);
}

addToEnd(vegetables, 'Kale');
console.log(vegetables);

addToEnd(vegetables, 'Mushrooms');
console.log(vegetables);


var userNumbersSum = 0,
    customNumbers = [];

while(true){
    var userNumbers = prompt('Add number', 0);
    if(isNaN(userNumbers) || userNumbers === '' || userNumbers === null) break;
    customNumbers.push(userNumbers);
    userNumbersSum = userNumbersSum + +userNumbers;
}

console.log(userNumbersSum);
console.log(customNumbers);

var numbForFiltr = [2, 3, 4, 6];

function filterRange(array) {

}

var filtered = filterRange(numbForFiltr, 3, 5);

console.log(filtered);



