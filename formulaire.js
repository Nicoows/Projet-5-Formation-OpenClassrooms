document.forms["formulaire"].addEventListener("submit", function(e) {
    var erreur;
    var inputs = this;
    console.log(inputs);
    e.preventDefault();
    for ( var i =0; i < inputs.length; i++) {
        
        if(!inputs[i].value){
            erreur = "Veuillez renseigner tous les champs";
        }
    }

    if(erreur){
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
    }

    var recupPrenom = document.getElementById("prenom").value;
    var recupNom = document.getElementById("nom").value;
    var recupAdresse = document.getElementById("adresse").value;
    var recupVille = document.getElementById("ville").value;
    var recupEmail = document.getElementById("email").value;

    let contact = {
        firstName : recupPrenom,
        lastName : recupNom,
        address : recupAdresse,
        city : recupVille,
        email : recupEmail
    }
    console.log(contact);

    let recupLocal = localStorage.getItem('panier');
    recupLocal = JSON.parse(recupLocal);

    let idProduit = Object.values(recupLocal);

    let product_id = [];
    
    for( let i=0 ; i < idProduit.length ; i++) {

        product_id.push(idProduit[i].id);
    
        }

        var commande = {
            contact: contact,
            products: product_id
        }

    sendServeur.envoiServeur("http://localhost:3000/api/teddies/order", JSON.stringify(commande)).then(data => {
        console.log(data);
        
        localStorage.setItem("orderId", JSON.stringify(data.orderId));
    });

})

var form = document.querySelector("#form");

var boutonRedirect = document.getElementById("bouton");

boutonRedirect.addEventListener("click", function() {

    for ( var i =0; i < form.length; i++)
        if(form[0].value && form[1].value && form[2].value && form[3].value){
            console.log(form[i].value);
            function redirect(){
                document.location.href="confirmation.html";
            }
            redirect();
            }
})

const validEmail = function(inputEmail) {

    let emailRegExp = new RegExp ('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

    let testEmail = emailRegExp.test(inputEmail.value);

    let small = inputEmail.nextElementSibling;

    if(testEmail) {
        small.innerHTML = "Email valide"
        small.classList.remove("text-danger");
        small.classList.add("text-success");
    } else {
        small.innerHTML = "Email non valide"
        small.classList.remove("text-success");
        small.classList.add("text-danger");
    }
}

const validPrenom = function(inputPrenom) {

    let prenomRegExp = new RegExp ("^([a-zàáâäçèéêëìíîïñòóôöùúûü]+(( |')[a-zàáâäçèéêëìíîïñòóôöùúûü]+)*)+([-]([a-zàáâäçèéêëìíîïñòóôöùúûü]+(( |')[a-zàáâäçèéêëìíîïñòóôöùúûü]+)*)+)*$", 'iu');

    let testPrenom = prenomRegExp.test(inputPrenom.value);

    let small = inputPrenom.nextElementSibling;

    if(testPrenom) {
        small.innerHTML = "Prénom valide"
        small.classList.remove("text-danger");
        small.classList.add("text-success");
    } else {
        small.innerHTML = "Prénom non valide"
        small.classList.remove("text-success");
        small.classList.add("text-danger");
    }
}

const validNom = function(inputNom) {

    let nomRegExp = new RegExp ("^([a-zàáâäçèéêëìíîïñòóôöùúûü]+(( |')[a-zàáâäçèéêëìíîïñòóôöùúûü]+)*)+([-]([a-zàáâäçèéêëìíîïñòóôöùúûü]+(( |')[a-zàáâäçèéêëìíîïñòóôöùúûü]+)*)+)*$", 'iu');

    let testNom = nomRegExp.test(inputNom.value);

    let small = inputNom.nextElementSibling;

    if(testNom) {
        small.innerHTML = "Nom valide"
        small.classList.remove("text-danger");
        small.classList.add("text-success");
    } else {
        small.innerHTML = "Nom non valide"
        small.classList.remove("text-success");
        small.classList.add("text-danger");
    }
}

const validAdresse = function(inputAdresse) {

    let adresseRegExp = new RegExp ("^([0-9]*) ?([a-zàáâäçèéêëìíîïñòóôöùúûüA-Z,\. ]*)$", 'iu');

    let testAdresse = adresseRegExp.test(inputAdresse.value);

    let small = inputAdresse.nextElementSibling;

    if(testAdresse) {
        small.innerHTML = "Adresse valide"
        small.classList.remove("text-danger");
        small.classList.add("text-success");
    } else {
        small.innerHTML = "Adresse non valide"
        small.classList.remove("text-success");
        small.classList.add("text-danger");
    }
}

const validVille = function(inputVille) {

    let villeRegExp = new RegExp ("^([a-zàáâäçèéêëìíîïñòóôöùúûü]+(( |')[a-zàáâäçèéêëìíîïñòóôöùúûü]+)*)+([-]([a-zàáâäçèéêëìíîïñòóôöùúûü]+(( |')[a-zàáâäçèéêëìíîïñòóôöùúûü]+)*)+)*$", 'iu');

    let testVille = villeRegExp.test(inputVille.value);

    let small = inputVille.nextElementSibling;

    if(testVille) {
        small.innerHTML = "Ville valide"
        small.classList.remove("text-danger");
        small.classList.add("text-success");
    } else {
        small.innerHTML = "Ville non valide"
        small.classList.remove("text-success");
        small.classList.add("text-danger");
    }
}

form.email.addEventListener('change', function() {
    validEmail(this);
})

form.prenom.addEventListener('change', function() {
    validPrenom(this);
})

form.nom.addEventListener('change', function() {
    validNom(this);
})

form.adresse.addEventListener('change', function() {
    validAdresse(this);
})

form.ville.addEventListener('change', function() {
    validVille(this);
})

const sendServeur = new Send;