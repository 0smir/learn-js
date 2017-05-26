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

listItem[1].closest('ul').classList.add('olol');


var element = document.createElement('div');
    element.innerHTML = '<b>Новый элемент</b>';
var body = document.body;



function insertAfter(elem, refElement) {
    refElement.parentNode.insertBefore(elem, refElement.nextSibling);
}

// insertAfter(element, body.firstChild);
insertAfter(element, body.lastChild);


function removeChilds(element) {
    while(element.lastChild){
        element.removeChild(element.lastChild);
    }

}
removeChilds(table);


var newUl = document.createElement('ul');
    newUl.classList.add('one-more-list');
    document.body.insertBefore(newUl, document.getElementsByTagName('h2')[0].nextSibling);

function createList() {
    while(true){
        var userTag = prompt('Add new tag', '');
        if(!userTag){
            break;
        }
        var newLi = document.createElement('li');
            newLi.appendChild(document.createTextNode(userTag));
            newUl.insertBefore(newLi, null);
    }
}

createList();