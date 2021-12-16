// déclaration de variable lié au DOM
const getButton = document.querySelectorAll("button");
const getCard = document.querySelectorAll(".card");
const getModal = document.getElementById("modal");
const getModalContent = document.getElementById("modalContent");
const getPModal = document.querySelector("#modal p");
const getTitleModal = document.querySelector("#modal h1");
const getCloseButton = document.getElementById("closeButton");
const getBgModal = document.getElementById("backgroundModal");

let getCardOfParent;

// fonction pour retirer le modal + background + l'effet boxshadow sur la card 
const hideAction = function(){
    getModal.classList.replace("modalShow","modalHidden");
    getBgModal.classList.replace("show", "hidden");
    getCardOfParent.classList.replace("cardColor", "cardNormal");
}

getButton.forEach(element => {
    // boucle foreach pour ajouter un eventlistener sur chaque button
    element.addEventListener("click", function() {
        // je récupère toute la div parent du button
        getCardOfParent = element.parentNode;
        // si le modal est caché (class) je le rend visible, puis je remplace le titre H1 et P du modal par le H1 et P de l'element parent du button sur lequel le click a été effectué
        if(getModal.className == "modalHidden") {
            let getH1 = element.parentElement.getElementsByTagName("h1");
            let getPOfCard = element.parentElement.getElementsByTagName("p");
            getTitleModal.innerText = getH1[0].innerText;
            getPModal.innerText = `Rajout de texte : ${getPOfCard[0].innerText}`;
            // rajout d'un box shadow sur la carte selectioné, apparition d'une div en background sur tout le body
            getCardOfParent.classList.replace("cardNormal", "cardColor" );
            getBgModal.classList.replace("hidden", "show");
            getModal.classList.replace("modalHidden","modalShow");                    
        } else {
            // si pour une raison inconnu le modal est déjà visible lors du click sur le button, je le cache
            hideAction();
        }  
    });
});

// la croix du modal pour cacher le modal
getCloseButton.addEventListener("click", function() {
    hideAction();
})

window.addEventListener("click", function(e) {
    // lors du click sur le background ( qui apparait lorsque le modal est visible ), ou sur la croix du modal, je cache tout
    if (e.target == getBgModal || e.target == getCloseButton) {
        hideAction();
    }
})