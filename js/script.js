// PROGRAMMA CAROSELLO

//creo l'array di immagini
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel`s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
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

//carica la prima img
let activeIndex = 3;
uploadImg(activeIndex);

//frecce right left
const leftArrow = document.querySelector("#left-arrow");
leftArrow.addEventListener("click", function () {

    activeIndex--;

    if (activeIndex < 0) {
        activeIndex = images.length - 1;
    }

    uploadImg(activeIndex);
});

