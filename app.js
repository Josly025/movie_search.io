//API request
import { http } from "./http";

// Get movies
http
  .get(
    "https://api.themoviedb.org/3/movie/550?api_key=ee632c2d76ec063fa122caf12fae9405"
  )
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Update Post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete User
// http.delete('https://jsonplaceholder.typicode.com/users/2')
// .then(data => console.log(data))
// .catch(err => console
