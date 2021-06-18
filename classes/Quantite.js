const panierVide = new Panier;

class Quantite {

    qtyMoins(data){

        var signeMoins = document.getElementsByClassName("fa-minus");

        for( let i = 0; i < signeMoins.length; i++){

            signeMoins[i].addEventListener('click', function(){

                let recupLocal = localStorage.getItem('panier');
                    recupLocal = JSON.parse(recupLocal);

                let prixTotalPanier = localStorage.getItem("prixTotal");

                let nombreProduit = localStorage.getItem("nombrePanier");
                nombreProduit = parseInt(nombreProduit);
                localStorage.setItem("nombrePanier", nombreProduit - 1);

                let tabProduit = Object.values(recupLocal);

                let idProduit = this.getAttribute('data-id');

                data[i]._id = idProduit;
                
                for( let i = 0; i < tabProduit.length; i++){
                    if(tabProduit[i].id == idProduit){

                        tabProduit[i].qty -= 1;

                        for( let i = 0; i < data.length; i++){
                            if(idProduit == data[i]._id){

                        prixTotalPanier = parseInt(prixTotalPanier);
                        localStorage.setItem("prixTotal", prixTotalPanier - data[i].price /100);
                            }
                        }

                        if(tabProduit[i].qty == 0){

                            tabProduit.splice([i]);

                        }
                    }
                }
                console.log(tabProduit);

                localStorage.setItem('panier', JSON.stringify(tabProduit));
                document.location.reload();
                //panierVide.affichagePanier(data);
            })
        }
        
    }

    qtyPlus(data){

        var signePlus = document.getElementsByClassName("fa-plus");

        for( let i = 0; i < signePlus.length; i++){

            signePlus[i].addEventListener('click', function(){

                let recupLocal = localStorage.getItem('panier');
                    recupLocal = JSON.parse(recupLocal);

                let prixTotalPanier = localStorage.getItem("prixTotal");

                let nombreProduit = localStorage.getItem("nombrePanier");
                nombreProduit = parseInt(nombreProduit);
                localStorage.setItem("nombrePanier", nombreProduit + 1);


                let tabProduit = Object.values(recupLocal);

                let idProduit = this.getAttribute('data-id');
                
                data[i]._id = idProduit;
                
                for( let i = 0; i < tabProduit.length; i++){
                    if(tabProduit[i].id == idProduit){
                        
                        tabProduit[i].qty += 1;    
                        
                        for( let i = 0; i < data.length; i++){
                                if(idProduit == data[i]._id){

                        prixTotalPanier = parseInt(prixTotalPanier);
                        localStorage.setItem("prixTotal", prixTotalPanier + data[i].price /100);
                        
                                }
                        }
                    }
                }

                localStorage.setItem('panier', JSON.stringify(tabProduit));
                document.location.reload();
            })
        }
    }
    suppProduit(data){

        var btnSupp = document.getElementsByClassName("fa-times-circle");

        for( let i = 0; i < btnSupp.length; i++) {

            btnSupp[i].addEventListener('click', function(){

                let recupLocal = localStorage.getItem('panier');
                    recupLocal = JSON.parse(recupLocal);

                let prixTotalPanier = localStorage.getItem("prixTotal");

                let tabProduit = Object.values(recupLocal);
                
                let idProduit = this.getAttribute("data-id");
                
                let recupQty = tabProduit[i].qty;

                let nombreProduit = localStorage.getItem("nombrePanier");
                nombreProduit = parseInt(nombreProduit);
                localStorage.setItem("nombrePanier", nombreProduit - recupQty);
                
                for( let i = 0; i < tabProduit.length; i++){
                    if(tabProduit[i].id == idProduit){
                        console.log(tabProduit[i]);
                        tabProduit.splice([i], 1);
                        
                        }
                        
                        for( let i = 0; i < data.length; i++){
                            if(idProduit == data[i]._id){

                        prixTotalPanier = parseInt(prixTotalPanier);
                        localStorage.setItem("prixTotal", prixTotalPanier - data[i].price /100*recupQty);
                    
                            }
                        }

                        localStorage.setItem('panier', JSON.stringify(tabProduit));
                        document.location.reload();
                    }
                    console.log(tabProduit);
            })
        }
    }
    suppPanier() {
        var btnSuppAll = document.getElementById("bouton_supp_all");

        btnSuppAll.addEventListener('click', function() {
            localStorage.clear();
            document.location.reload();
        })
    }
}