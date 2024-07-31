import Mustache from "mustachejs";
import { createApp } from "vue";

console.log("Happy Thurday!");

// ///////////
// Vanilla JS
// ///////////

// const url = `https://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7`;

// // 1. Select elements (results)
// const results = document.querySelector("#results");
// // 2. No event listen to listen to (card appearing at page load)

// // 2.5 Fetch the movie data from omdbAPI
// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     const movies = data.Search;
//     movies.forEach((movie) => {
//       // 3. Change the DOM, insert the cards into the results div
//       const cardTemplate = `
//       <div class='col-6'>
//         <div class="card my-3">
//           <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title} poster">
//           <div class="card-body">
//             <h2 class="card-title">${movie.Title}</h2>
//             <p class="card-text">${movie.Year}</p>
//             <a href="https://www.imdb.com/title/${movie.imdbID}" class="btn btn-primary" target="_blank">Go on IMDB</a>
//           </div>
//         </div>
//       </div>`;
//       results.insertAdjacentHTML("beforeend", cardTemplate);
//     });
//   });

// ///////////
// JS with templates
// ///////////

// const url = `https://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7`;

// const results = document.querySelector("#results");
// const template = document.querySelector("#movieCardTemplate");
// // console.log(template);
// // template.innerHTML returns a string of the template content
// // template.content // returns an HTML element of the template content

// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     const movies = data.Search;
//     movies.forEach((movie) => {
//       const templateCopy = template.content.cloneNode(true);
//       templateCopy.querySelector(".card-title").innerText = movie.Title;
//       templateCopy.querySelector(".card-text").innerText = movie.Year;
//       templateCopy.querySelector(".card-img-top").src = movie.Poster;
//       templateCopy.querySelector(".card-img-top").alt = movie.Title;
//       templateCopy.querySelector("a").href += movie.imdbID;
//       // console.log(templateCopy);
//       results.appendChild(templateCopy);
//     });
//   });

// ///////////
// MUSTACHEJS
// ///////////

// const result = Mustache.render("<h1>Today, I ate a {{food}} !!!</h1>", {food: "burger"})
// //                               TEMPLATE                               DATA
// console.log(result);

// const url = `https://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7`;

// const results = document.querySelector("#results");
// const template = document.querySelector("#movieCardTemplate");

// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     const moviesData = data.Search;
//     moviesData.forEach((movieData) => {
//       const templateString = template.innerHTML;
//       const output = Mustache.render(templateString, movieData);
//       results.insertAdjacentHTML("beforeend", output);
//     });
//   });


// ///////////
// MUSTACHEJS + ITERATION
// ///////////

// const url = `https://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7`;

// const results = document.querySelector("#results");
// const template = document.querySelector("#movieCardTemplate");

// fetch(url)
//   .then(response => response.json())
//   .then((data) => { 
//     // {
//     //   movies: [
//     //     {
//     //       Title: "blabla",
//     //       Poster: "blabla",
//     //       ...
//     //     },
//     //     {...
//     //     },
//     //     {...
//     //     },
//     //   ]
//     // }
//     const templateString = template.innerHTML;
//     const moviesData = data.Search;
//     // console.log(moviesData);
//     // console.log({movies: moviesData });
    
//     const output = Mustache.render(templateString, {movies: moviesData })
//     console.log(output);
//     results.innerHTML = output;
//   });


// ///////////
// VUEJS
// ///////////

createApp({
  data() {
    return {
      message: "Hello from Vue.js"
    }
  }
}).mount("#vue-root");