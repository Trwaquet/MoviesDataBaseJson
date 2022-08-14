let posters = document.getElementById('posters');

fetch('./assets/js/movies.json')
    .then(response => response.json())
    .then(function(data) { 
        data.results.forEach(movies => {
        posters.innerHTML += `<div class="movies">
            <img class="picture" src="${movies.poster_path}"/>
            <div class="details">
            <h2 class="title">${movies.original_title}</h2>
            <p class="overview">${movies.overview}</p>
            <div class="rates">${movies.vote_average}</div>
            </div>
        </div>`
})})