class CardProduit{

    generateCard(imageUrl, name, price, description, productId){
        
    var lienProduit = document.createElement("a");
        lienProduit.href = "produit.html?id=" + productId;
        lienProduit.className = "lien_produit";

    var box = document.createElement("div");
        box.className = "card mb-3 box_carte centrer_horizontalement";

    var boxDeux = document.createElement("div");
        boxDeux.className = "row g-0";

    var boxImage = document.createElement("div");
        boxImage.className = "col-md-4";

    var imageOurs = document.createElement("img");
        imageOurs.src = imageUrl;
        imageOurs.alt = name;
        imageOurs.className = "image_ours_carte";

    var boxInfo = document.createElement("div");
        boxInfo.className = "col-md-8";

    var sousBoxInfo = document.createElement("div");
        sousBoxInfo.className = "card-body";

    var nomOurs = document.createElement("h5");
        nomOurs.innerHTML = name;
        nomOurs.className = "card-title";

    var prixOurs = document.createElement("p");
        prixOurs.innerHTML = price /100 + "€";
        prixOurs.className = "card-text";

    var descriptionOurs = document.createElement("p");
        descriptionOurs.innerHTML = description;
        descriptionOurs.className = "card-text";

    listeProduit.appendChild(lienProduit);
    lienProduit.appendChild(box);
    box.appendChild(boxDeux);
    boxDeux.appendChild(boxImage);
    boxImage.appendChild(imageOurs);
    boxDeux.appendChild(boxInfo);
    boxInfo.appendChild(sousBoxInfo);
    sousBoxInfo.appendChild(nomOurs);
    sousBoxInfo.appendChild(prixOurs);
    sousBoxInfo.appendChild(descriptionOurs);
    }
}