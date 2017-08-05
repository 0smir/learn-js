/**
 * Created by Olga on 7/1/17.
 */
(function () {
    console.log("form.js - work");
    var input = document.getElementsByName("sum")[0],
        button = document.getElementsByClassName("btn-submit")[0],
        spanValue = button.querySelector(".input-value");

    function getChar(event) {
        if(event.wich == null){
            if(event.keyCode < 32){
                return null;
            }
            return String.fromCharCode(event.keyCode);
        }
        if(event.which != 0 && event.which != 0){
            if(event.which < 32){
                return null;
            }
            return String.fromCharCode(event.which);
        }
    }

    input.onkeypress = function (e) {
        var e = e || event;
        if(e.ctrlKey || e.altKey || e.metaKey){
            return;
        }
        var char = getChar(e);
        if(char == null){
            return;
        }
        if((char < '0' || char > '9') && (event.keyCode !== 46)){
            console.dir(event.keyCode);
            console.log("char " + char);
            return false;
        } else {
            console.log("event.keyCode " + event.keyCode);
            console.log("char " + char);
        }
    };

    function testInputValue() {
        var
            inputCarrentvalue = input.value;
        console.log(inputCarrentvalue);
        if(inputCarrentvalue == "."){
            input.value = ("0.");
            setInputValue();
        }
        setInputValue();

    }

    function setInputValue() {
        spanValue.innerHTML = input.value;
    }

    input.addEventListener("input", testInputValue);
})();