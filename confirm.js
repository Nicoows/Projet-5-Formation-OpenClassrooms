var recupOrder = localStorage.getItem("orderId");

var recupPrix = localStorage.getItem("prixTotal");

var boxConfirm = document.querySelector("#box_confirm");

let commandSuccess = document.createElement("h3");
    commandSuccess.innerHTML = "Votre commande a bien été enregistré !";

let orderCommand = document.createElement("p");
    orderCommand.innerHTML = "Votre numéro de commande est : " + recupOrder + "et le prix total est de " + recupPrix + "€.";

let aBientot = document.createElement("p");
    aBientot.innerHTML = "Merci pour votre commande ! A bientôt !";

boxConfirm.appendChild(commandSuccess);
boxConfirm.appendChild(orderCommand);
boxConfirm.appendChild(aBientot);
