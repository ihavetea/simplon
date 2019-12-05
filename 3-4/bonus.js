// RAPPEL ---->

var leNomDeMaVariable = 'la valeur de ma variable'; // Déclarer une variable (pour la réutiliser plus tard)

var elementHtml = document.getElementById('idDeMonElementHtml'); // document fait réference au document HTML (tout ce qui est compris entre les balise <html>)
// getElementById est une fonction prédéfinis par Javascript qui permet de ciblé un element html grace à son id

// onclick, onmouseover, onload, etc.. :
// sont des fonction prédefinis que l'on peut utiliser sur des elements html et qui prenne en paramettre un attribut 'event'
// Pour pouvoir changer le fonctionnement de base d'un evenement onclick --
// -- ou autres il faut lui assigné en valeur une nouvelle fonction (souvent une fonction anonyme)
// exemple : elementHtml.onclick = function() { ici le code javascript à executer au click de 'element' }

// elementHtml.innerText = 'texte a insérer dans l\'element html ciblé au préalable'; --> innerText pour insérer du texte
// elementHtml.innerHTML = '<p>balise html a insérer dans l\'element html ciblé au préalable</p>'; --> innerHTML pour insérer des balises html


//    <----- END


// ADD BUTTON TRIGGERS
console.log("ho");
let buttonAdd = document.querySelector('button');
console.log(buttonAdd);
let flick = 0;
console.log("ho");
const buttonrmv = document.querySelector('buttonRmv');
const buttonmark = document.querySelector('buttonMark');


// FETCH <ul> id="todoList" and all <li>
let list = document.getElementById('todoList')
let sctn = document.getElementsByTagName('section')


var newListItem = document.createElement("li");
var newButtonItem = document.createElement("button");

var addedText = document.createTextNode('Hello Brian');

// On Button click, state = 1, create 2 buttons

/* 
buttonAdd.onclick = function () {
    console.log("ha");
    newListItem.appendChild(addedText);
    list.appendChild(newListItem);
}
*/

console.log("ho");

buttonAdd.onclick = function () {
    console.log("ho");
    if (flick === 0) {
        console.log("hi");
        flick = 1;
        newButtonItem.appendChild(addedText) = function () {
            var d
            d = document.getElementsByClassName("buttonAdd");
            d.innerHTML = "This text is in div.";
        }
    }
}
