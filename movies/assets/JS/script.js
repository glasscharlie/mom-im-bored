var movie = document.querySelector(`#userinput`);
var getMovieBtn = document.querySelector(`#usersearch`)
var getRandomMovieBtn = document.querySelector(`#randommovie`)

function getMovie() {
    var userInput = movie.value;
    // Fetches the movie api of user input 
    fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?t=${userInput}&r=json`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "69c2e70905msh0dd6e7bd25a3373p1865c3jsnc0fca7b9eeb3",
                "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
            }
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (data.Response === `True`) {
                var topCard = document.querySelector(`#topcard`);
                topCard.innerHTML = "";
                // variables creating all of the elements for the information
                var card = document.createElement(`div`);
                var cardTitleBox = document.createElement(`div`);
                var cardTitle = document.createElement(`h2`);
                var movieImage = document.createElement(`img`);
                var cardBoX = document.createElement(`div`);
                var cardTextActors = document.createElement(`p`);
                var cardTextBoxOffice = document.createElement(`p`);
                var cardTextMetascore = document.createElement(`p`);
                var cardTextReleased = document.createElement(`p`);
                var cardTextRunTime = document.createElement(`p`);
                var cardTextPlot = document.createElement(`p`);
                var cardTextAwards = document.createElement(`p`);
                var cardTextRating = document.createElement(`p`);
                // Setting classes to the above made elements.
                card.classList.add(`card`, `align-center`, `cstm-card`);
                cardTitleBox.classList.add(`card-divider`, `cstm-card`);
                movieImage.classList.add(`cstm-image`);
                cardBoX.classList.add(`card-section`, `cstm-card`);
                // Setting the information from the get to the above elements.
                cardTitle.textContent = data.Title;
                cardTextActors.textContent = `Actors: ` + data.Actors;
                cardTextAwards.textContent = `Awards: ` + data.Awards;
                cardTextBoxOffice.textContent = `Box Office: ` + data.BoxOffice;
                cardTextMetascore.textContent = `Meta Score: ` + data.Metascore;
                cardTextReleased.textContent = `Release Date: ` + data.Released;
                cardTextRunTime.textContent = `Run Time: ` + data.Runtime;
                cardTextPlot.textContent = `Plot: ` + data.Plot;
                cardTextRating.textContent = `Rating: ` + data.Rating;
                movieImage.src = data.Poster;
                // Appends the created elements.
                topCard.appendChild(card);
                card.appendChild(cardTitleBox);
                cardTitleBox.appendChild(cardTitle);
                card.appendChild(cardBoX);
                cardBoX.appendChild(cardTextActors);
                cardBoX.appendChild(cardTextAwards);
                cardBoX.appendChild(cardTextBoxOffice);
                cardBoX.appendChild(cardTextMetascore);
                cardBoX.appendChild(cardTextReleased);
                cardBoX.appendChild(cardTextRunTime);
                cardBoX.appendChild(cardTextPlot);
                cardBoX.appendChild(movieImage);
                //console logs the information from the movie
                console.log(data);
            } else {
                var topCard = document.querySelector(`#topcard`);
                topCard.innerHTML = "";
                var card = document.createElement(`h1`);
                card.classList.add(`align-center`, `cstm-title`)
                card.textContent = `No movie found with that title. Please try again`;
                topCard.appendChild(card);
            }
            if (data.Response === `True` && data.Poster === `N/A`) {
                var topCard = document.querySelector(`#topcard`);
                topCard.innerHTML = "";
                var card = document.createElement(`h1`);
                card.classList.add(`align-center`, `cstm-title`)
                card.textContent = `A movie was found with that title but not enough information!`;
                topCard.appendChild(card);
            }
        })
        .catch(err => {
            console.error(err);
        });

}

getMovieBtn.addEventListener(`click`, function() {
    if (movie.value) {
        getMovie();
    }
});
getRandomMovieBtn.addEventListener(`click`, function() {

    getRandomMovie();

});