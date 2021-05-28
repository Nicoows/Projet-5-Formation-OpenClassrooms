const listeProduit = document.getElementById("liste_produit");
const serveur = new Ajax;
const carteProduit = new CardProduit;

serveur.appelServeur("http://localhost:3000/api/teddies").then(data => {
    
    for(var index = 0; index < data.length; index++) {
        console.log(
            data[index].name,
            data[index].price /100,
            data[index].imageUrl,
            data[index].description,
            data[index].colors,
            data[index]._id,
        );

    carteProduit.generateCard(data[index].imageUrl, data[index].name, data[index].price, data[index].description, data[index]._id);
    
        }

     });
    
     function onLoadPanierProduit (){
        var nombreProduit = localStorage.getItem("nombrePanier");
    
        nombreProduit = parseInt(nombreProduit);
        
        if(nombreProduit) {
            document.querySelector("#nombre_panier").textContent = nombreProduit;
        } 
    }
onLoadPanierProduit();