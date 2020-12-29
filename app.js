const apiKey = "ee632c2d76ec063fa122caf12fae9405";
const input = document.getElementById("inputLarge");
const search = document.getElementById("search");

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
    });
}
