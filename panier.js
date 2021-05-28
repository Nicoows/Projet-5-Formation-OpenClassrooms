const serveurPanier = new Ajax;

class Panier{

    ajouterAuPanier(){
        var btn = document.getElementsByClassName('bouton_panier');

        for( var i = 0; i < btn.length; i++) {

        btn[i].addEventListener('click', function(){

            let recupLocal = localStorage.getItem('panier');
            recupLocal = JSON.parse(recupLocal);

            if(recupLocal != null){

                let idProduit = this.getAttribute('data-id');
                    idProduit = spath[1];

                let product = {
                    id: idProduit,
                    qty: 0
                }

                        if(recupLocal[product.id] == undefined){
                            recupLocal= {
                                ...recupLocal,
                                [product.id]: product
                            }
                        }

                        recupLocal[product.id].qty += 1;
            } else {

                let idProduit = this.getAttribute('data-id');
                idProduit = spath[1];

                let product = {
                    id: idProduit,
                    qty: 1
                };

                product.qty = 1;

                recupLocal = {
                    [product.id]: product
                }
            }
            localStorage.setItem('panier', JSON.stringify(recupLocal));

            function ajoutPanier (){
                var nombreProduit = localStorage.getItem("nombrePanier");
                
                nombreProduit = parseInt(nombreProduit);
            
                if(nombreProduit){
                    localStorage.setItem("nombrePanier", nombreProduit + 1);
                    document.querySelector("#nombre_panier").textContent = nombreProduit + 1;
                } else {
                    localStorage.setItem("nombrePanier", 1);
                    document.querySelector("#nombre_panier").textContent = 1;
                }
            }
            ajoutPanier();

            serveurPanier.appelServeur("http://localhost:3000/api/teddies").then(data => {
                for( let index=0; index<data.length; ++index){
                    if(data[index]._id == spath[1]){
                        let prixPanier = localStorage.getItem("prixTotal");

                        if(prixPanier != null){
                            prixPanier = parseInt(prixPanier);
                            localStorage.setItem("prixTotal", prixPanier + data[index].price /100);
                        } else {
                            localStorage.setItem("prixTotal", data[index].price /100);
                        } 
                       
                    }
                }
            })
        })
    }  
    }

    affichagePanier(data){

    let recupLocal = localStorage.getItem('panier');
    recupLocal = JSON.parse(recupLocal);

    let boxProduit = document.querySelector(".box_produit_panier");

    if(recupLocal == null) {
        let boxPanier = document.createElement("div");
            boxPanier.className = "box_general_panier";

        let panierVide = document.createElement("h5");
            panierVide.innerHTML = "Votre panier est vide";
            panierVide.className = "panier_vide centrer_horizontalement";

        boxProduit.appendChild(boxPanier);
        boxPanier.appendChild(panierVide);
    }
    
    let idProduit = Object.values(recupLocal);
    console.log(idProduit);

    for( let index=0; index<data.length; ++index) {
        for( let i=0 ; i < idProduit.length ; i++) {
            if(idProduit[i].id == data[index]._id){
                var boxPanier = document.createElement("div");
                    boxPanier.className = "box_general_panier";

                let boxAjoutProduit = document.createElement("div");
                    boxAjoutProduit.className = "box_ajout_produit";

                let iconeSuppProduit = document.createElement("i");
                    iconeSuppProduit.className = "fas fa-times-circle centrer_verticalement";
                    iconeSuppProduit.dataset.id = data[index]._id;

                let imgAjoutProduit = document.createElement("img");
                    imgAjoutProduit.src = data[index].imageUrl;
                    imgAjoutProduit.className = "img_ajout_produit";

                let nomAjoutProduit = document.createElement("p");
                    nomAjoutProduit.innerHTML = data[index].name;
                    nomAjoutProduit.className = "nom_ajout_produit centrer_verticalement";
                    
                let boxAjoutPrix = document.createElement("div");
                    boxAjoutPrix.className = "box_ajout_prix centrer_verticalement";

                let prixAjoutProduit = document.createElement("p");
                    prixAjoutProduit.innerHTML = data[index].price /100 + "€";
                    prixAjoutProduit.className = "prix_ajout_produit centrer_verticalement";

                let boxAjoutQty = document.createElement("div");
                    boxAjoutQty.className = "box_ajout_qty";

                let signeMoinsQty = document.createElement("i");
                    signeMoinsQty.className = "fas fa-minus centrer_verticalement";
                    signeMoinsQty.dataset.id = data[index]._id;

                let qtyAjoutProduit = document.createElement("h5");
                    qtyAjoutProduit.innerHTML = idProduit[i].qty;
                    qtyAjoutProduit.className = "qty_ajout_produit centrer_verticalement";

                let signePlusQty = document.createElement("i");
                    signePlusQty.className = "fas fa-plus centrer_verticalement";
                    signePlusQty.dataset.id = data[index]._id;

                let boxPrixTotalItem = document.createElement("div");
                    boxPrixTotalItem.className = "box_prix_total_item centrer_verticalement";

                let prixTotalItem = document.createElement("h5");
                    prixTotalItem.innerHTML = data[index].price /100*idProduit[i].qty + "€";
                    prixTotalItem.className = "centrer_horizontalement centrer_verticalement";

                boxProduit.appendChild(boxPanier);
                boxPanier.appendChild(boxAjoutProduit);
                boxPanier.appendChild(boxAjoutPrix);
                boxPanier.appendChild(boxAjoutQty);
                boxPanier.appendChild(boxPrixTotalItem);
                boxAjoutProduit.appendChild(iconeSuppProduit);
                boxAjoutProduit.appendChild(imgAjoutProduit);
                boxAjoutProduit.appendChild(nomAjoutProduit);
                boxAjoutPrix.appendChild(prixAjoutProduit);
                boxAjoutQty.appendChild(signeMoinsQty);
                boxAjoutQty.appendChild(qtyAjoutProduit);
                boxAjoutQty.appendChild(signePlusQty);
                boxPrixTotalItem.appendChild(prixTotalItem);


            }
        }
    }
    let recupPrixTotal = localStorage.getItem('prixTotal');
        recupPrixTotal = JSON.parse(recupPrixTotal);

    let boxAjoutPrixTotal = document.createElement("div");
        boxAjoutPrixTotal.className = "box_ajout_prix_total centrer_verticalement";

    let ajoutPrixTotal = document.createElement("h5");
        ajoutPrixTotal.innerHTML ="Prix total :" + recupPrixTotal + "€";
        ajoutPrixTotal.className = "prix_total";

    boxProduit.appendChild(boxAjoutPrixTotal);
    boxAjoutPrixTotal.appendChild(ajoutPrixTotal);
    }

    panierVide(){
        let recupLocal = localStorage.getItem('nombrePanier');
            recupLocal = JSON.parse(recupLocal);

        let boxProduit = document.querySelector(".box_produit_panier");

        if(recupLocal == 0) {
            let boxPanier = document.createElement("div");
                boxPanier.className = "box_general_panier";

            let panierVide = document.createElement("h5");
                panierVide.innerHTML = "Votre panier est vide";
                panierVide.className = "panier_vide centrer_horizontalement";

            boxProduit.appendChild(boxPanier);
            boxPanier.appendChild(panierVide);
        }
    }
}

