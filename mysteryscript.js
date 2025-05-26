fetch('https://api.sampleapis.com/movies/mystery')
    .then(response => response.json())
    .then(data => {
        const movies = {};
        data.forEach((movie, index) => {
            movies[`movie_${movie.id}`] = movie;
        })
        //console.log(movies);
        loadMovies(movies);
    })
    .catch(error => console.log('Hiba: ', error));

function loadMovies(movies){
      const movieContainer = document.getElementById('card-container');

      if(!movies || Object.keys(movies).length === 0){
        console.error('Hiba: Nincsenek filmek');
        return;
      }

      for(const key in movies){
          const card = document.createElement('div');
          card.classList.add('card');
          card.innerHTML = `
          <img src="${movies[key].posterURL}" alt="${movies[key].title}">
          <h3>${movies[key].title}</h3>
          `

          movieContainer.appendChild(card);
      }
}