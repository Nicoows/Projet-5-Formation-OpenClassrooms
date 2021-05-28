var spath = window.location.search.split("="), index;
const produit = document.getElementById("produit");
const serveurProduit = new Ajax;
const ajouterPanier = new Panier;

serveurProduit.appelServeur("http://localhost:3000/api/teddies").then(data => {
	for( let index=0; index<data.length; ++index) {
		if(data[index]._id == spath[1]) {

			var boxPageProduit = document.createElement("div");
				boxPageProduit.className = "card mb-3 box_carte centrer_horizontalement box_page_produit";

			var sousBoxPageProduit = document.createElement("div");
				sousBoxPageProduit.className = "row g-0";

			var boxImagePageProduit = document.createElement("div");
				boxImagePageProduit.className = "col-md-4";

			var imagePageProduit = document.createElement("img");
				imagePageProduit.src = data[index].imageUrl;
				imagePageProduit.className = "image_ours_carte";

			var boxInfoPageProduit = document.createElement("div");
				boxInfoPageProduit.className = "col-md-8";

			var sousBoxInfoPageProduit = document.createElement("div");
				sousBoxInfoPageProduit.className = "card-body";

			var nomPageProduit = document.createElement("h5");
				nomPageProduit.innerHTML = data[index].name;
				nomPageProduit.className = "card-title";

			var prixPageProduit = document.createElement("p");
				prixPageProduit.innerHTML = data[index].price /100 + "€";
				prixPageProduit.className = "card-text";

			var descriptionPageProduit = document.createElement("p");
				descriptionPageProduit.innerHTML = data[index].description;
				descriptionPageProduit.className = "card-text";

			var boxCouleursProduit = document.createElement("div");
				boxCouleursProduit.className = "box_couleurs";

			var paraCouleurs = document.createElement("p");
				paraCouleurs.className = "card-text";
				paraCouleurs.innerHTML = "Couleurs :";

				produit.appendChild(boxPageProduit);
				boxPageProduit.appendChild(sousBoxPageProduit);
				sousBoxPageProduit.appendChild(boxImagePageProduit);
				boxImagePageProduit.appendChild(imagePageProduit);
				sousBoxPageProduit.appendChild(boxInfoPageProduit);
				boxInfoPageProduit.appendChild(sousBoxInfoPageProduit);
				sousBoxInfoPageProduit.appendChild(nomPageProduit);
				sousBoxInfoPageProduit.appendChild(prixPageProduit);
				sousBoxInfoPageProduit.appendChild(descriptionPageProduit);
				sousBoxInfoPageProduit.appendChild(boxCouleursProduit);
				boxCouleursProduit.appendChild(paraCouleurs);
				
			for( let i=0; i < data[index].colors.length; i++) {

				var boxChoixCouleurs =document.createElement("div");
					boxChoixCouleurs.className = "form-check";

				var inputCouleurs = document.createElement("input");
					inputCouleurs.className = "form-check-input ms-1";
					inputCouleurs.setAttribute("name", "flexRadioDefault1");
					inputCouleurs.setAttribute("type","radio");

				var labelCouleurs = document.createElement("label");
					labelCouleurs.className = "form-check-label";
					labelCouleurs.setAttribute("for", "flexRadioDefault1");
					labelCouleurs.innerHTML = data[index].colors[i];

					boxCouleursProduit.appendChild(boxChoixCouleurs);
					boxChoixCouleurs.appendChild(inputCouleurs);
					boxChoixCouleurs.appendChild(labelCouleurs);

			}
		}
	}
})

var lienBoutonPanier = document.createElement("a");
	lienBoutonPanier.href = "#";
	lienBoutonPanier.className = "lien_bouton_panier centrer_horizontalement";
	lienBoutonPanier.id = "lien_btn_panier";

var boxBoutonPanier = document.createElement("div");
	boxBoutonPanier.className = "d-grid gap-2 col-6 mx-auto";

var boutonPanier = document.createElement("button");
	boutonPanier.innerHTML = "Ajouter au panier";
	boutonPanier.className = "btn btn-primary bouton_panier centrer_horizontalement";
	boutonPanier.id = "bouton_ajout_panier";
	boutonPanier.dataset.id = "00000";

produit.appendChild(boxBoutonPanier);
boxBoutonPanier.appendChild(lienBoutonPanier);
lienBoutonPanier.appendChild(boutonPanier);

//Panier

serveurProduit.appelServeur("http://localhost:3000/api/teddies").then(data => {

//création du panier avec tableau et produit


function onLoadPanierProduit (){
	var nombreProduit = localStorage.getItem("nombrePanier");

	nombreProduit = parseInt(nombreProduit);
	
	if(nombreProduit) {
		document.querySelector("#nombre_panier").textContent = nombreProduit;
	} 
}
onLoadPanierProduit();

ajouterPanier.ajouterAuPanier();


});
