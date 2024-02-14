// PROGRAMMA CAROSELLO

//creo l'array di immagini
const images = [
    {
        image: '../img/01.webp',
        title: 'Marvel`s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: '../img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: '../img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: '../img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: '../img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel`s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//creo una function per cariare le immagini
function uploadImg(index) {

    const imgBig = document.querySelector("#img-big");
    imgBig.src = images[index].image;
    imgBig.alt = images[index].title;

    const title = document.querySelector("#title");
    title.textContent = images[index].title;

    const text = document.querySelector("#text");
    text.textContent = images[index].text;
}

//caric0 la prima img
let activeIndex = 0;
uploadImg(activeIndex);

//ottiengo tutti gli elementi img-small del thumbnails
let imgSmallElements = document.querySelectorAll('#img-small img');
let activeCount = 0;

//aggiungo la class active al primo elemento
imgSmallElements[activeCount].classList.add("active");

//freccia up
const upArrow = document.querySelector("#up-arrow");
upArrow.addEventListener("click", function () {

    //rimuovo la classe active dall'immagine corrente
    imgSmallElements[activeCount].classList.remove("active");

    activeIndex--;
    activeCount--;

    if (activeIndex < 0) {
        activeIndex = images.length - 1;
    }

    if (activeCount < 0) {
        activeCount = images.length - 1;
    }

    uploadImg(activeIndex);

    //aggiungo la classe active all'immagine corrente
    imgSmallElements[activeCount].classList.add("active");
});

//freccia down
const downArrow = document.querySelector("#down-arrow");
downArrow.addEventListener("click", function () {

    //rimuovo la classe active dall'immagine corrente
    imgSmallElements[activeCount].classList.remove("active");

    activeIndex++;
    activeCount++

    if (activeIndex >= images.length) {
        activeIndex = 0;
    }

    if (activeCount >= images.length) {
        activeCount = 0;
    }

    uploadImg(activeIndex);

    //aggiungo la classe active all'immagine corrente
    imgSmallElements[activeCount].classList.add("active");
});

console.log(imgSmallElements);

//agiungo un event listener ad ogni immagine del carosello
imgSmallElements.forEach((currentElement, index) => {

    currentElement.addEventListener("click", function() {

        //aggiorna l'activeIndex e l'activeCount in base all'elemento cliccato
        activeIndex = index;
        activeCount = index;

        //rimuovi la classe active a tutti
        imgSmallElements.forEach(img => img.classList.remove("active"));

        //aggiungo la classe active all'elemento cliccato
        this.classList.add("active");

        uploadImg(activeIndex);
        
    });
});