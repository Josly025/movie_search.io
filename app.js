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
  fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${inputValue}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.Genre);

      let movie = data;
      let render = `
     <div class="card m-5 " style="width: 25rem;">
    <div class="card-body">
      <h4 class="card-title text-success text-center">${movie.Title}</h4>
      <hr>
      <h6 class="card-subtitle text-success text-center"> Rated: ${movie.Rated} </h6>
    </div>
    <img
      src="${movie.Poster}"
      class="thumbnail justify-content-center"
      width="auto" height="auto"
    ></img>
    <div class="card-body">
      <p class="card-text text-success text-center">${movie.Plot}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item text-success text-center"> Actors: ${movie.Actors}</li>
      <li class="list-group-item text-success text-center">Release Date: ${movie.Year} </li>
      <li class="list-group-item text-success text-center">Runtime: ${movie.Runtime}</li>
    </ul>
    <div class="card-body text-center">
    <button type="button" class="btn btn-outline-success"><a  class="text-success" href="http://imdb.com/title/${movie.imdbID}">
        IMDB Page
      </a></button>
    </div>
  </div>`;
      allMovies.innerHTML = render;
    });
}
