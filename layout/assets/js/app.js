                                        //-----------PARTIE THEORIQUE----------//

/* En première partie de journée on a revu les bases du javascript, son utilitée aussi bien en front qu'en back,
les 6 types de données : Objet, Number, String("chaine de charactère"), Boolean (false/true), 
Null(valeur temporaire) Undefined (en général c'est un retour console pour dire que ya un problème d'assignation dans votre code)
et un peu de mise en forme sur la syntaxe (en gros vous pouvez voir ça dans les tp suivant)
Pour les termes un peu techniques que vous comprenez pas, je vous invites a check sur internet ou attendre demain et poser vos question à Rémi 
(MDN est solide niveau information), je préfère ça qu'essayé d'expliqué et de dire des bêtises ;) */


                                        //----------PARTIE PRATIQUE----------//
//!!! ATENTION LE CODE EST PAS FONCTIONNEL TEL QUEL, SI VOUS VOULEZ VOIR UN RENDU, COPIER/COLLER LES PORTIONS DE CODES DANS L'APP.JS DU DOSSIER TESTJS  !!!//


//  STEP 1 : on ajoute un EventListener pour savoir quand le DOM est chargé.
document.addEventListener("DOMContentLoaded", function(event){
    
    //STEP 2: une fois le DOM chargé, on commence notre scope
    console.log("loaded"); //(la console renvoie le message loaded si le DOM est bien chargé)
   
    //STEP 3: on stock dans une variable un élément HTML
    const elem/*nom de la variable*/= document/*cible la page entière*/.getElementById("test");/*Va cherché l'élément html (ici un ID mais on peut aussi ciblé plusieur classes) ciblé entre les () */
   
    //STEP 4: on log cet element pou virifié qu'il est bien ciblé
    console.log(elem);
    
    //STEP 5: on change son background en enlevant l'ancienne class et en rajoutant la nouvelle (oui c'est un peu rudimentaire)
    elem.classList.remove("bg-green");
    elem.classList.add("bg-blue"); 
})


//cette portion de coter permet d'enlever la class bg-green sur l'id "test" de la div associée quand on click sur la page (ça marche qu'une fois et peut importe ou vous avez le pointeur sur la page, ont est pas parfait sorry <3)
document.addEventListener("click", function(event) {
    const elem = document.getElementById("test");
        elem.classList.remove("bg-green");
        elem.classList.add("bg-blue");
}) 



//et celle-ci premet via le toggle d'inversé le background de la class quand vous cliqué dessus et de la remettre (cette fois seulement sur la section ciblé et autant que vous le voulez, enjoy)
document.addEventListener("DOMContentLoaded", function(event){
    const elem = document.getElementById("test");
        elem.addEventListener("click", function(event){
        elem.classList.toggle("bg-blue")
    });
})

//Petit tips: si vous voulez vous pouvez changé la valeur de "click" par d'autre comme "mouseover" pour le plus beau des effets, attention tout de même si vous êtes épileptiques.