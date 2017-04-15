/**
 * Created by Olga on 4/3/17.
 */
var i;
for (i = 0; i < 5; i++) {
    if(i == 3) break;
    console.log(i);
}

var sum = 0, n;
for (n = 0; n < 4; n++){
    console.log(n);
    if(n == 3) break;
    var value = +prompt("Wright number", "");
    sum += value;
    console.log("Sum:" + sum);
}


var a;
for(a = 0; a <= 10; a++){
    if(a % 2 == 0) continue;
    console.log(a);
}


var number = 0;
while(true){
    var result = +prompt("Write number more than 100!", '');
    console.log(result);
    if (!result) {
        break;
    } else if(result >= 100){
        alert("Yess!!! That is right number");
        break;

    } else {
        alert("Try one more time?");
    }
    number =+ result;

}
alert("You are exit from cycle");

nextPrime:
for ( var k = 2; k <= 10; k++){
    for (var j = 2; j < k; j++){
        if (k % j == 0) continue nextPrime;
    }
    console.log(k);
};