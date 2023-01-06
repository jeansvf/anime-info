const animeWrapper = document.querySelector(".anime-wrapper");
const mainWrapper = document.querySelector(".main-wrapper");

var list = JSON.parse(localStorage.getItem("my-list"));

list.map((anime) => {
    createAnime(anime.animeTitle, anime.animeImg, anime.animeId);
})

function createAnime(title, image, id) {
    let animeElement = document.createElement("a");
    animeElement.classList.add("anime-element");
    let animeImage = document.createElement("img");
    animeImage.classList.add("anime-image");
    let animeTitle = document.createElement("h2");
    animeTitle.classList.add("anime-title");

    animeTitle.innerText = truncate(title);
    animeImage.src = image;
    
    animeElement.appendChild(animeImage);
    animeElement.appendChild(animeTitle);
    animeWrapper.appendChild(animeElement);
}

function truncate(input) {
    if (input.length > 60) {
        return input.substring(0, 60) + '...';
    }
    return input;
}
