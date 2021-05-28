const serveur = new Ajax;
const qtyPanier = new Quantite;
const affiPanier = new Panier;
const sectionPanier = document.getElementById("panier");

serveur.appelServeur("http://localhost:3000/api/teddies").then(data => {

    affiPanier.affichagePanier(data);
    qtyPanier.qtyMoins(data);
    qtyPanier.qtyPlus(data);
    qtyPanier.suppProduit(data);
    affiPanier.panierVide();
})
function onLoadPanierProduit (){
    var nombreProduit = localStorage.getItem("nombrePanier");

    nombreProduit = parseInt(nombreProduit);
    
    if(nombreProduit) {
        document.querySelector("#nombre_panier").textContent = nombreProduit;
    } 
}
onLoadPanierProduit();