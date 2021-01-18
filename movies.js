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
      <div class="col-md-3"> 
      <h6 class="text-success">${movie.title}<h6>
    
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="thumbnail">
        <p>${movie.overview}<p>
      </div>
      `)
      );
      allMovies.innerHTML = render;
    });
}
