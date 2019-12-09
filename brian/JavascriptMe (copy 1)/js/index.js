window.onload = function () {


  // -------------------------- STEP 3a
  let User = class {

    constructor(name, email, password) {
      this.name = name;
      this.email = email;
      this.password = password;
    }
    getUsername() {
      let name = this.name;
      return name;
    }
  }


  // -------------------------- STEP 1  
  const connexionForm = document.getElementById("connexion-form");
  const registerForm = document.getElementById("register-form");

  const formSwitch = document.querySelectorAll('button.square-button-empty');
  const connexionButton = connexionForm.querySelector('button.square-button');
  const registerButton = registerForm.querySelector('button.square-button');

  formSwitch[0].onclick = function () {
    connexionForm.style.display = "none";
    registerForm.style.display = "flex";
  }

  formSwitch[1].onclick = function () {
    connexionForm.style.display = "flex";
    registerForm.style.display = "none";
  }

  // -------------------------- STEP 2
  function checkLowerCase(str) { return str === str.toLowerCase(); };
  function checkNumber(str) { return /\d/.test(str); };
  function checkMin5(str) { return str.length > 4; };
  function checkMin8(str) { return str.length > 7; };

  // -------------------------- STEP 4
  connexionButton.onclick = function () {
    const fetchConnexionEmail = connexionForm.querySelector('input[type=email]').value;
    const fecthConnexionPass1 = connexionForm.querySelectorAll('input[type=password]')[0].value;

    const retrievedObject = localStorage.getItem('user');
    const parsedJSON = JSON.parse(retrievedObject);

    if (!(retrievedObject)) {
      console.log("Account does not exist, please register.");
    }
    else if ((fetchConnexionEmail == parsedJSON.email) && (fecthConnexionPass1 == parsedJSON.password)) {
      console.log("Valid Login. Welcome.");
      window.location.href = "home.html";
    }
    else {
      console.log("Invalid email and/or password");
      document.getElementsByTagName("section")[0].style.display="flex";
      document.getElementsByTagName("section")[0].style.flexDirection="column";      
      const nodeAlert = document.createTextNode("Invalid email and/or password");
      document.getElementsByTagName("section")[0].prepend(nodeAlert);
    }
    //console.log(parsedJSON.password);
  }


  registerButton.onclick = function () {
    const fetchRegisterText = registerForm.querySelector('input[type=text]').value;
    const fetchRegisterEmail = registerForm.querySelector('input[type=email]').value;
    const fecthRegisterPass1 = registerForm.querySelectorAll('input[type=password]')[0].value;
    const fecthRegisterPass2 = registerForm.querySelectorAll('input[type=password]')[1].value;

    if (!(checkMin5(fetchRegisterText))) {
      console.log("Invalid Name");
      return false;
    }
    if (!((checkNumber(fecthRegisterPass1) && (!(checkLowerCase(fecthRegisterPass1)) && (checkMin8(fecthRegisterPass1)))))) {
      console.log("Invalid Password");
      return false;
    }
    if (!(fecthRegisterPass1 == fecthRegisterPass2)) {
      console.log("Passwords Do Not Match");
      return false;
    }
    console.log("Valid Name & Password")
    // -------------------------- STEP 3b
    const registerArray = [fetchRegisterText, fetchRegisterEmail, fecthRegisterPass1];

    var newUser = new User(registerArray[0], registerArray[1], registerArray[2]);
    console.log('Bonjour ' + newUser.getUsername() + ' !');

    // -------------------------- STEP 3b
    localStorage.setItem('user', JSON.stringify(newUser));

    var retrievedObject = localStorage.getItem('user');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
    
    window.location.href = "home.html";    
  }
}



