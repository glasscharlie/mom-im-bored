var movie = document.querySelector(`#userinput`);
var getMovieBtn = document.querySelector(`#usersearch`);
var getRandomMovieBtn = document.querySelector(`#randommovie`);
var movies = [
    `Toy Story`,
    `Toy Story 2`,
    `Toy Story 3`,
    `Iron Man`,
    `Iron Man 2`,
    `Iron Man 3`,
    `Thor`,
    `Thor the dark world`,
    `Thor Ragnarok`,
    `Avengers Endgame`,
    `Spider-man far from home`,
    `spider-man homecoming`,
    `Black widow`,
    `Captain Marvel`,
    `The Fast and the Furious`,
    `2 fast 2 furious`,
    `The Fast and the Furious: Tokyo Drift`,
    `Coraline`,
    `Monsters Inc`,
    `Die Hard`,
    `Rambo`,
    `Tropic Thunder`,
    `Step Brothers`,
    `Kicking and Screaming`,
    `Stranger than Fiction`,
    `Star Wars`,
    `The Last Jedi`,
    `Force Awakens`,
    `Moana`,
    `Taladega Nights`,
    `Frozen`,
    `Frozen 2`,
    `Harry Potter and the Sorcerer's Stone`,
    `Harry Potter and the Chamber of Secrets`,
    `Harry Potter and the Prisoner of Azkaban`,
    `Harry Potter and the Goblet of Fire`,
    `Harry Potter and the Order of the Phoenix`,
    `Harry Potter and the Half-Blood Prince`,
    `Harry Potter and the Deathly Hallows: Part 1`,
    `Harry Potter and the Deathly Hallows: Part 2`,
    `The Other Guys`,
    `Teenage Mutant Ninja Turtles II: The Secret of the Ooze`,
    `Fast Five`,
    `Horrible Bosses`,
    `Death and a Funeral`,
    `Death of a Salesman`,
    `Ocotober Sky`,
    `Man on the Moon`,
    `28 Days Later`,
    `Arrival`,
    `Being John Malkovich`,
    `The Big Lebowski`,
    `Kingpin`,
    `A Clockwork Orange`,
    `Full Metal Jacket`,
    `Saving Private Ryan`,
    `Black Hawk Down`,
    `Cast Away`,
    `Terminal`,
    `Halloween`,
    `Monty Python and the Holy Grail`,
    `Jaws`,
    `Django`,
    `Pulp Fiction`,
    `Kill Bill: Vol 1`,
    `Kill Bill: Vol 2`,
    `No Country for Old Men`,
    `Raiders of the Lost Ark`,
    `Reservior Dogs`,
    `Robocop`,
    `Schindler's List`,
    `The Shining`,
    `The Silence of the Lambs`,
    `Snow Piercer`,
    `Taxi Driver`,
    `The Thing`,
    `Oceans Eleven`,
    `Oceans Twelve`,
    `Mission Impossible`,
    `Twilight`,
    `Fatherhood`,
    `It Takes two`,
    `How to lose a guy in 10 days`,
    `Dirty Dancer`,
    `Hulk`,
    `The Princess Bride`,
    `Robin Hood`,
    `The little mermaid`,
    `Cinderella`,
    `Snow White`,
    `Akira`,
    `Sleeping Beauty`,
    `Mulan`,
    `Fox and the Hound`,
    `Old Yeller`,
    `The Muppets`,
    `Field of Dreams`,
    `Angels in the outfield`,
    `Never ending story`,
    `Air bud`,
    `Cool Runnings`,
    `Heavy Weights`,
    `Willy Wonka and the Chocolate Factory`,
    `The Mighty Ducks`,
    `Hook`,
    `Inspector Gadget`,
    `Jumanji`,
    `Patch Adams`,
    `Mrs. Doubtfire`,
    `Tarzan`,
    `Aladin`,
    `Pretty Woman`,
    `Brave`,
    `Snow White and the Huntsman`,
    `The Dictator`,
    `Austin Powers`,
    `Waynes World`,
    `Shrek`,
    `The love Guru`,
    `Back to the Future`,
    `A Christmas Carol`,
    `The Santa Claus`,
    `Chicken Run`,
    `The Barrowers`,
    `The Wizard of OZ`,
    `Gone with the Wind`,
    `Casablanca`,
    `Breakfast at Tiffany's`,
    `Lawrence of Arabia`,
    `Citizen Kane`,
    `Psycho`,
    `The Godfather`,
    `Scarface`,
    `The Sound of Music`,
    `Inglorious Bastards`,
    `Spirited Away`
]


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
                var cardBoxOne = document.createElement(`p`);
                var trailer = document.createElement(`a`);
                // Setting classes to the above made elements.
                card.classList.add(`card`, `align-center`, `cstm-card`);
                cardTitleBox.classList.add(`card-divider`, `cstm-card`);
                movieImage.classList.add(`cstm-image`);
                cardBoX.classList.add(`card-section`, `cstm-card`);
                trailer.setAttribute(`href`, `https://www.youtube.com/results?search_query=${userInput}+Trailer`)
                trailer.setAttribute(`target`, `_blank`)
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
                trailer.textContent = `Check out the Trailer`;
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
                cardBoX.appendChild(cardBoxOne);
                cardBoxOne.appendChild(trailer);
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

function getRandomMovie() {
    var randomMovie = movies[Math.floor(Math.random() * movies.length)];
    fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?t=${randomMovie}&r=json`, {
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
                var cardBoxOne = document.createElement(`p`);
                var trailer = document.createElement(`a`);
                // Setting classes to the above made elements.
                card.classList.add(`card`, `align-center`, `cstm-card`);
                cardTitleBox.classList.add(`card-divider`, `cstm-card`);
                movieImage.classList.add(`cstm-image`);
                cardBoX.classList.add(`card-section`, `cstm-card`);
                trailer.setAttribute(`href`, `https://www.youtube.com/results?search_query=${randomMovie  }+Trailer`)
                trailer.setAttribute(`target`, `_blank`)
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
                trailer.textContent = `Check out the Trailer`;
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
                cardBoX.appendChild(cardBoxOne);
                cardBoxOne.appendChild(trailer);
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

