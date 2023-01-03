const animeImage = document.querySelector(".anime-image");
const animeTitle = document.querySelector(".anime-title");
const animeSynopsis = document.querySelector(".anime-synopsis");
const animeGenre = document.querySelector(".anime-genre");

selectedAnime = JSON.parse(localStorage.getItem("selected-anime"));

setAnimeDetails();

function setAnimeDetails() {
    animeImage.src = selectedAnime.animeImg;
    animeTitle.textContent = selectedAnime.animeTitle;
    animeSynopsis.textContent = selectedAnime.synopsis
    animeGenre.textContent = selectedAnime.genres;
    console.log(selectedAnime);
}