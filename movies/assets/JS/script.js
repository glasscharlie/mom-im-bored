var movie = document.querySelector(`#userinput`);
var getMovieBtn = document.querySelector(`#usersearch`)

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
        .then(response => {
            var topCard = document.querySelector(`#topcard`);
            // topCard.innerHTML = "";
            console.log(response);
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
