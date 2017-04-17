/**
 * Created by Olga on 4/17/17.
 */
var day = prompt("Write day of the week!", " ");
switch(day){
    case 'Monday':
        alert('Today I have English lesson');
    case 'Tuesday':
        alert('Today  I have training in gym');
        break;
    case 'Wednesday':
        alert('Today, English lesson, again!)))');
        break;
    case 'Thursday':
        alert('Today I have yoga training! Ooom!))');
        break;
    case 'Friday':
        alert("Today, I'm stay at home and learn JS");
        break;

    case 'Saturday':
    case 'Sunday':
        alert('Yeah! It is weekend, and I will do nothing!');
        break;
    default:
        alert("Ok, you are do not want talk about my week");
}

// from switch to if
var browser = prompt("Tell us, what browser are you use?");
    if(browser === "IE"){
        alert("Wow-wow! IE!");
    } else if(browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera"){
        alert("Ok, that is great!");
    } else{
        alert("Hope, you have normal browser");
    }


//from if...else to switch
var someNumber = prompt("a?", " ");
switch(someNumber){
    case '0':
        alert("a=1");
        break;
    case '1':
        alert("a=1");
        break;
    case '2':
    case '3':
        alert("a=2 or a=3");
        break;
    default:
        alert("You wow wow wow!!!");
        break;
}