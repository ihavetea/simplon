
let allbackgrounds = document.getElementsByClassName('red-background');
let counter = 0;

//console.log("hello");
//console.log(allbackgrounds.length);

let bgreen = ".green-background{ background : green};"
const addedText = document.createTextNode(bgreen);
let styletag = document.getElementsByTagName('style')[0];

console.log(styletag); 

styletag.appendChild(addedText);

console.log(styletag); 

while (counter < allbackgrounds.length) {

console.log(allbackgrounds[counter]);
    if ((counter % 2) == 0) {
        console.log("yipee");
    }
    else {
        console.log("yipoo");
        allbackgrounds[counter].classList.toggle('green-background');
    }
    counter++;
}


