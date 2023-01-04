const animeWrapper = document.querySelector(".anime-wrapper");
const mainTitle = document.querySelector(".main-title");

var searchedKey = localStorage.getItem("searched-key");
mainTitle.innerText = `Results for "${searchedKey}"`
fetch(`https://gogoanime.consumet.org/search?keyw=${searchedKey}`)
.then((response) => response.json())
.then((data) => console.log(data.map((e) => {
    createAnime(e.animeTitle, e.animeImg, e.animeId)
})));

function createAnime(title, image, id) {
    let animeElement = document.createElement("a");
    animeElement.classList.add("anime-element");
    let animeImage = document.createElement("img");
    animeImage.classList.add("anime-image");
    let animeTitle = document.createElement("h2");
    animeTitle.classList.add("anime-title");

    animeTitle.innerText = title;
    animeImage.src = image;
    
    animeElement.appendChild(animeImage);
    animeElement.appendChild(animeTitle);
    animeWrapper.appendChild(animeElement);

    animeElement.addEventListener("click", () => {
        createLoadingAnimation();
        fetch(`https://gogoanime.consumet.org/anime-details/${id}`)
        .then((response) => {
            location.href="anime-details.html";
            return response.json();
        })
        .then((data) => {
            window.localStorage.setItem("selected-anime", JSON.stringify(data));
        })
    })
}
