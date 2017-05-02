/**
 * Created by Olga on 5/2/17.
 */
var paragraph = document.getElementsByTagName('p'),
    paragraphText = paragraph[0].innerText,
    paragraphSpleted = paragraphText.split(' ');

console.log(paragraph);
console.log(paragraphText);
console.log(paragraphText.length);
console.log(paragraphSpleted);


console.log(paragraphSpleted.length);


for(var i = 0; i < paragraphSpleted.length; i++){
    var item = paragraphSpleted[i];
    // console.log(item[0]);
    var wordUppercased = item[0].substring(0, 1).toUpperCase() + item.substring(1) + ' ';
    console.log(typeof(wordUppercased));
    document.write(wordUppercased);
}

