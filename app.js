const input = document.getElementById("inputLarge");
const search = document.getElementById("search");

search.addEventListener("click", function (e) {
  let inputValue = input.value;
  console.log(inputValue);
  e.preventDefault();
});

function getMovies() {
  fetch(
    `https://api.themoviedb.org/3/movie/550?api_key=ee632c2d76ec063fa122caf12fae9405`
  )
    .then((response) => {
      return response.json();
      console.log(response);
    })
    .then((data) => {
      console.log(data);
    });
}
