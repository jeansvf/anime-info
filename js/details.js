const animeImage = document.querySelector(".anime-image");
const animeTitle = document.querySelector(".anime-title");
const animeSynopsis = document.querySelector(".anime-synopsis");
const animeGenre = document.querySelector(".anime-genre");
const animeStatus = document.querySelector(".anime-status");
const animeRelease = document.querySelector(".anime-release");
const animeTotalEpisodes = document.querySelector(".anime-total-episodes");
const addToListButton = document.querySelector(".add-to-list-wrapper");


selectedAnime = JSON.parse(localStorage.getItem("selected-anime"));

setAnimeDetails();

function setAnimeDetails() {
    animeImage.src = selectedAnime.animeImg;
    animeTitle.textContent = selectedAnime.animeTitle;
    animeSynopsis.textContent = selectedAnime.synopsis;
    animeGenre.textContent = selectedAnime.genres;
    animeStatus.textContent = "Status: " + selectedAnime.status;
    animeRelease.textContent = "Released: " + selectedAnime.releasedDate;
    animeTotalEpisodes.textContent = "Total Episodes: " + selectedAnime.totalEpisodes;
}

addToListButton.addEventListener("click", () => {
    saveDataToLocalStorage(selectedAnime);
})

function saveDataToLocalStorage(data)
{
    var myAnimeList = [];
    myAnimeList = JSON.parse(localStorage.getItem('my-list')) || [];
    myAnimeList.push(data);
    console.log(myAnimeList);  // Should be something like [Object array]
    localStorage.setItem('my-list', JSON.stringify(myAnimeList));
}

// DO THE LIST FEATURE