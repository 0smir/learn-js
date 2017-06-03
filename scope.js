/**
 * Created by Olga on 5/27/17.
 */

function first() {
    var outer = [1, 3, 5];
    for( var i = 0; i < outer.length; i++){
        console.log(i + ' first function work');
        second();
    }
}


function second() {
    var inner = [2, 4, 6];
    for(var i = 0; i < inner.length; i++){
        console.log(i + ' second function work');
    }

}
first();
