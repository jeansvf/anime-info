const mainWrapper = document.querySelector(".main-wrapper")
const animeWrapper = document.querySelector(".anime-wrapper");
const mainTitle = document.querySelector(".main-title");

fetch(`https://gogoanime.consumet.org/anime-movies`)
    .then((response) => response.json())
    .then((animelist) => animelist.forEach((element) => {
    createAnime(element.animeTitle, element.animeImg, element.animeId)
}))

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

function truncate(input) {
    if (input.length > 60) {
        return input.substring(0, 60) + '...';
    }
    return input;
}

function createLoadingAnimation() {
    let loadingGif = document.createElement("img");
    loadingGif.classList.add("loading-gif");
    loadingGif.src="./images/loading.gif";
    mainWrapper.appendChild(loadingGif);
}