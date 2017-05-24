/**
 * Created by Olga on 5/24/17.
 */

var listItem = document.getElementsByTagName('li');
var ul = document.getElementsByTagName('ul')[0];

[].forEach.call(listItem, function (item) {
    console.log(item);
});

for(var i = 0; i < listItem.length; i++){
    listItem[i].classList.add('ololo');
    if(listItem[i].matches('.first')){
        listItem[i].classList.add('cached');
    }
    console.log(i);
}

if(ul.childNodes.length != 0){
    console.log('есть элементы');
}

// listItem[1].closest('li').classList.add('olol');