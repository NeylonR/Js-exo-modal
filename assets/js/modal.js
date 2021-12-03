const getButton = document.querySelectorAll("button");
const getCard = document.querySelectorAll(".card");
const getModal = document.getElementById("modal");
const getModalContent = document.getElementById("modalContent");
const getP = document.querySelector("#modal p");
const getTitle = document.querySelector("#modal h1");
const getCloseButton = document.getElementById("closeButton");

getButton.forEach(element => {
    // boucle foreach pour ajouter un eventlistener sur chaque button
    element.addEventListener("click", function() {
        // si le modal est caché ( class ) je le rend visible et je change le titre et p du modal selon le h1 et p de l'element parent du button 
        if(getModal.className == "modalHidden") {
            let getH1 = element.parentElement.getElementsByTagName('h1');
            let getPOfCard = element.parentElement.getElementsByTagName('p');
            getTitle.innerText = getH1[0].innerText;
            getP.innerHTML = `Rajout de texte : ${getPOfCard[0].innerText}`;
            getModal.classList.replace("modalHidden",'modalShow');                    
        } else {
            // s'il est déjà visible lors du click, je le recache
            getModal.classList.replace('modalShow', "modalHidden");
        }  
    });
});

// la croix du modal pour cacher le modal
getCloseButton.addEventListener("click", function() {
    getModal.classList.replace( "modalShow","modalHidden");
})

window.addEventListener("click", function(e) {
    // lors du click sur la page je vérifie qu'il ne soit pas sur un button/modal/le contenu du modal/son P et h1 et je cache le modal
    if (e.target != getButton[0] && e.target != getButton[1] && e.target != getButton[2] && e.target != getButton[3] && e.target != getButton[4] && e.target != getButton[5] && e.target != getModalContent && e.target != getP && e.target != getTitle) {
        getModal.classList.replace("modalShow","modalHidden");
    }
  })