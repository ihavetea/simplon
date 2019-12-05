
//SALUT MATTHIEU
// ICI LE JS SURVEILLE LE BOUTON HTML
const button = document.querySelector('button');

//ICI ON RECUPERE LE CONTENU du <ul id="todoList"></ul> ET ON LE STOCKE DANS UNE VARIABLE list
//POUR EVITER DE DEVOIR RETAPER document.getElementById('todoList'), MAIS ON PEUT FAIRE SANS.
let list = document.getElementById('todoList')

//ICI ON GENERE UN TAG <li></li> QUE L'ON VA UTILISER DANS LA FONCTION
var newListItem = document.createElement("li");

//ICI ON GENERE LE TEXTE A METTRE DANS LE NOUVEAU <li></li> QUE L'ON VA UTILISER DANS LA FONCTION
var addedText = document.createTextNode('Hello Brian');


// .onclick REAGIT a button ( = document.querySelector('button');) ET PERMET DE LANCER LA FONCTION
button.onclick = function () {

    //CONSOLE LOG POUR DEBUGGER C'EST OPTIONEL
    console.log(list);

    //ICI TU AJOUTES LE TEXTE Hello Brian STOCKE DANS LA VARIABLE newListItem DANS LES TAGS <li></li>
    //APPEND VEUT DIRE RAJOUTER A LA FIN
    newListItem.appendChild(addedText);

    // ICI TU BALANCES TON COMBO <li>Hello Brian</li> EN BAS DU <ul id="todoList"> DANS LE HTML
    // TU "APPEND" <li>Hello Brian</li> VERS document.getElementById('todoList')
    list.appendChild(newListItem);
}
