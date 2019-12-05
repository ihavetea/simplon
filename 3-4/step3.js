
//SALUT 

// ICI LE JS SURVEILLE LE BOUTON HTML
const surveilleBouton = document.querySelector('button');
console.log(surveilleBouton);
//ICI ON RECUPERE LE CONTENU DU <ul id="todoList"></ul> ET ON LE STOCKE DANS UNE VARIABLE touteLaTodoList
//POUR EVITER DE DEVOIR RETAPER document.getElementById('todoList'), MAIS ON PEUT FAIRE SANS.
let touteLaTodoList = document.getElementById('todoList')

//ICI ON GENERE UN TAG <li></li> QUE L'ON VA UTILISER DANS LA FONCTION
var tagsListeARajouter = document.createElement("li");

//ICI ON GENERE LE TEXTE A METTRE DANS LE NOUVEAU <li></li> QUE L'ON VA UTILISER DANS LA FONCTION
var texteARajouterDansLaListe = document.createTextNode('Hello Brian');


// .onclick REAGIT a surveilleBouton ( = document.querySelector('button');) ET PERMET DE LANCER LA FONCTION
surveilleBouton.onclick = function(){
    console.log(surveilleBouton);
    //CONSOLE LOG POUR DEBUGGER C'EST OPTIONEL
    console.log(touteLaTodoList);

    //ICI TU AJOUTES LE TEXTE Hello Brian STOCKE DANS LA VARIABLE TagsListeARajouter DANS LES TAGS <li></li>
    //APPEND VEUT DIRE RAJOUTER A LA FIN
    tagsListeARajouter.appendChild(texteARajouterDansLaListe);

    // ICI TU BALANCES TON COMBO <li>Hello Brian</li> EN BAS DU <ul id="todoList"> DANS LE HTML
    // TU "APPEND" <li>Hello Brian</li> VERS document.getElementById('todoList')
    touteLaTodoList.appendChild(tagsListeARajouter);
}
