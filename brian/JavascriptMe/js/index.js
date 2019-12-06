window.onload = function () {

    // --------------------- STEP 1 ---------------------
    // Par defaut le formulaire de connection est afficher, le formulaire d'inscription quand a lui est en 'display: none';
    // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button-empty'
    // DE MASQUER LE LOGIN FORM POUR AFFICHER LE REGISTER FORM, ET INVERSEMENT <->

    var sbe = document.querySelectorAll('button.square-button-empty');

    sbe[0].onclick = function () {
        document.getElementById("connexion-form").style.display = "none";
        document.getElementById("register-form").style.display = "flex";
        console.log("check function 1");
    }

    sbe[1].onclick = function () {
        document.getElementById("connexion-form").style.display = "flex";
        document.getElementById("register-form").style.display = "none";
        console.log("check function 2");
    }




    // --------------------- STEP 2 ----------------------
    // maintenant que l'on peut afficher nos 2 formulaires l'intéret serait maintenant qu'ils fonctionnent ! pour cela :
    // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button' DE :
    //  1. récuperer la valeur de tout les champs de formulaires
    //  2. vérifier que le 'username' fait au moins 5 caracteres alphanumérique
    //  3. vérifier que le password fait au moins 8 caracteres et contient a minima une majuscule/minuscule ainsi qu'un entier (integer)

    // VARIABLES --------------------------------------------------- //

    // Aim all connexion-form
    var loginform = document.getElementById("connexion-form");
    // Aim all button.square-button in connexion form
    var buttonlogin = loginform.querySelector('button.square-button');


    // Aim all register-form
    var signupform = document.getElementById("register-form");
    // Aim all button.square-button in register form
    var buttonsignup = signupform.querySelector('button.square-button');

    // FUNCTIONS --------------------------------------------------- //

    // Is it all lower case?
    function checkLowerCase(str) {return str === str.toLowerCase();};

    // Has Number?
    function checkNumber(str) {return /\d/.test(str);};

    // More than 5 & 8 Characters?
    function minimum5(str) {return str.length > 4;};
    function minimum8(str) {return str.length > 7;};

    // --------------------------------------------------------------- //

    // BUTTON LOGIN -------------------------------------------------- //
    // Check login info - Email, Password
    buttonlogin.onclick = function () {
        let email = loginform.querySelector('input[type=email]').value;
        let pass = loginform.querySelector('input[type=password]').value;
        //Checking Password
        if (checkNumber(pass) && (!(checkLowerCase(pass)) && (minimum8(pass)))){console.log("Password : 1st Password OK");}
        else{console.log("Password : Input at least 8 Characters, a Number, an Upper Case");}

    };

    // BUTTON SIGNUP ------------------------------------------------- //
    // Check Signup Form, Name, Email, Confirm
    buttonsignup.onclick = function () {
        let text = signupform.querySelector('input[type=text]').value;
        let email = signupform.querySelector('input[type=email]').value;
        let pass = signupform.querySelectorAll('input[type=password]');

        //Fetching First & Second password
        let pass0 = pass[0].value;
        let pass1 = pass[1].value;

        // Checking Text for 5 minimum
        if (minimum5(text)) {console.log("Name : Valid Name");}
        else {console.log("Name : Input More than 5 Characters")}

        //Checking Pass0 for Maj, 8 Chars, Number
        if (checkNumber(pass0) && (!(checkLowerCase(pass0)) && (minimum8(pass0)))){console.log("Password : 1st Password OK");}
        else{console.log("Password : Input at least 8 Characters, a Number, an Upper Case");}

        //Checking Pass1 for Maj, 8 Chars, Number
        if (checkNumber(pass1) && (!(checkLowerCase(pass1)) && (minimum8(pass1)))){console.log("Password : 2nd Passowrd OK");}
        else{console.log("Password : Input at least 8 Characters, a Number, an Upper Case");}

        // Check Password Match
        if(pass0 == pass1){console.log("Passwords Match");}
        else{console.log("Passwords Do Not Match");}
    }
}


    // --------------------- STEP 3 -------------------------
    // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
    // A L'INSCRIPTION :

    // 1. le code commenter ci-dessous devras etre fonctionnelle (pour ça vous allez devoir déclarer une class 'User' -> POO Javascript)
    // cette classe devras avoir des les propriétés 'username', 'email', 'password' ainsi qu'une methode nommé 'getUsername' --->
    // --> qui devra retourner l'username de l'instance courante de 'User'

    let User = class {

        constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
        }
        getUsername (){
            let a = this.name.split(" ");
            return a[0];
        }
        }
    
    var user = new User('ToTo (username)', 'toto@email.fr (email)', 'tamereenslip (password)');
    console.log('Bonjour ' + user.getUsername() + ' !');


    // 2. Modifier ensuite le code ci dessus pour qu'a l'instantation d'un nouvelle 'User' ---
    // --> on utilise les données saisie du formulaire d'inscription pour setup les propriétés notre nouvelle 'User'
    // puis on stocke ce nouvelle objet utilisateurs dans le 'localStorage' sous la clé 'user' en utilisant la method stringify de l'objet JSON





    // --------------------- STEP 4 -------------------------
    // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
    // A LA CONNEXION :

    // 1. Vérifier l'existance dans le 'localStorage' de la clé 'user'
    // 1.1 Si la clé 'user' n'existe pas, retourner un message d'erreur a l'utilisateurs (Account do not exist, please register.)
    // 1.2 Si la clé existe, comparer les données saisie a celle présente dans le 'localStorage'
    // 1.2.1 si l'email ou le mot de passe ne correspondent pas, retourner un message d'erreur (les alert() sont proscrit)

    // 2. Si les données saisies correspondent a celles présentes dans le 'localStorage', rediriger l'utilisateur sur la page 'home.html'

