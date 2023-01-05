const animeWrapper = document.querySelector(".anime-wrapper");
const mainWrapper = document.querySelector(".main-wrapper");
const searchInput = document.querySelector(".nav-bar-search-input");
const dropdownButton = document.querySelector("[data-dropdown-button]");
const dropdownMenu = document.querySelector("[data-dropdown]");
const genreItem = document.querySelector(".genre-item");

fetch("https://gogoanime.consumet.org/popular")
  .then((response) => response.json())
  .then((animelist) => animelist.forEach((element) => {
    createAnime(element.animeTitle, element.animeImg, element.animeId);
})
)

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

searchInput.addEventListener("keydown", e => {
    if (e.key === "Enter" && searchInput.value !== "") {
        window.localStorage.setItem("searched-key", searchInput.value);
        searchInput.value = "";
        window.location="./search-anime.html";
    }
})

// code for the genre dropdown menu

document.addEventListener("click", (e) => {
    let clickedDropdownButton = e.target.matches("[data-dropdown-button]");
    let clickedDropdownMenu = e.target.matches("[data-dropdown]");
    let dropdownMenuExists = document.querySelector("[data-dropdown].active");
    let clickedGenreItem = e.target.matches(".genre-item");

    if (clickedGenreItem) {
        localStorage.setItem("selected-genre", e.target.innerText);
    }
    if (dropdownMenuExists !== null && clickedDropdownButton) {
        dropdownMenu.classList.remove("active");
    } else {
        dropdownMenu.classList.add("active");
    }
    if (!clickedDropdownMenu && !clickedDropdownButton) {
        dropdownMenu.classList.remove("active");
    }

})