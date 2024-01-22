//  -----------------------------------  Switch Statements -------------------------------------------------

// var day = prompt("Enter a Day: ");

// switch(day){
//     case "mon":
//         console.log("Happy Monday");
//         break;
//     case "tue":
//         console.log("Tuesday");
//         break;
//     case "wed":
//         console.log("Wednesday");
//         break;
//     case "Thurs":
//         console.log("Thursday");
//         break;
//     case "Fri":
//         console.log("Friday");
//         break;
//     case "sat":
//     case "sun":
//         console.log("Off Day!");
//         break;
//     default:
//         console.log("Special day");
//         break;
// }


// var i = 0;

// while(i<10){
//     i++
//     console.log(i);
// }


/* var i = 0;

do{
    console.log(i);
    i++
}while(i<10)
*/

// function onClick(){
//     console.log("Button Clicked!!!");
// }


function flip(element, value){
    console.log(element, value)
    if(value){
        element.style.backgroundImage = "url('./images/diamond.png')"
    }
    else{
        element.style.backgroundImage = "url('./images/cross.png')"
    }
}