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

