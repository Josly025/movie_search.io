const input = document.getElementById("inputLarge");
const apiKey = "ee632c2d76ec063fa122caf12fae9405";
const search = document.getElementById("search");
const allMovies = document.getElementById("allMovies");

search.addEventListener("click", function (e) {
  let inputValue = input.value;
  console.log(inputValue);
  getMovies(inputValue);
  e.preventDefault();
});

function getMovies(inputValue) {
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${inputValue}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let render = "";
      data.results.map(
        (movie) =>
          (render += `
      <div class="col-md-4 "> 
      <div class="card m-2" style="width: 25rem ;">
    <div class="card-body">
      <h4 class="card-title text-white text-center text-wrap">${movie.title}</h4>
    </div>
    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="thumbnail justify-content-center"
      width="auto" height="70%"></img>
<div class="card-body">
      <div class="card-body">
      <p class="card-text text-success text-center text-wrap">Overview: <p>${movie.overview}<p></p>
    </div>
    </div>
       <ul class="list-group list-group-flush">
    <li class="list-group-item text-success text-center"> Popularity: <p>${movie.popularity}%<p></li>
    </ul>
    </div>
  </div>`)
      );
      allMovies.innerHTML = render;
    });
}
