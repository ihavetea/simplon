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

const button = document.querySelector('button add');
let list = document.getElementById('todoList')

var newListItem = document.createElement("li");
var addedText = document.createTextNode('Hello Brian');


button.onclick = function () {
    console.log(list);
    newListItem.appendChild(addedText);
    list.appendChild(newListItem);
}
