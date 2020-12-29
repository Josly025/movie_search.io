const apiKey = "657f72d4";
const input = document.getElementById("inputLarge");
const search = document.getElementById("search");
const allMovies = document.getElementById("allMovies");

search.addEventListener("click", function (e) {
  let inputValue = input.value;
  console.log(inputValue);
  getMovies(inputValue);
  e.preventDefault();
});

function getMovies(inputValue) {
  fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${inputValue}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let render = "";
      data.Search.map(
        (movie) =>
          (render += `
          <div class="card m-3">
  <div class="card-body">
    <h5 class="card-title">${movie.Title}</h5>
    <h6 class="card-subtitle text-muted">Popularity: ${movie.popularity} Release Date: ${movie.Year}</h6>
  </div>
  <img
    src=${movie.Poster}
    class="thumbnail"
  ></img>
  <div class="card-body">
    <p class="card-text">${movie.imbdID}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">
      Card link
    </a>
    <a href="#" class="card-link">
      Another link
    </a>
  </div>
</div>
      
      `)
      );
      allMovies.innerHTML = render;
    });
}

//old html
{
  /* <div class="col-md-3"> 
      <h6 class="text-success">${movie.title}<h6>
    
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="thumbnail">
      <p>${movie.overview}<p>
      </div> */
}
