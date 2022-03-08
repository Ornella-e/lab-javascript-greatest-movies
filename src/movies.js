// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require("./data");

function getAllDirectors(moviesArray1) {
const allDirectors = moviesArray1.map ((el)  => {
 return el.director;
  });
return allDirectors};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray, item) {
  let counter = 1;
   moviesArray.forEach (x =>{
     if (x === "Steven Spielberg") counter ++
   })
   return counter };
 
 

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies2) {
  if(!movies2.length){
    return 0;
  }
const average = movies2.reduce ((acc, val) => {
return acc + val.score;},0);
const av2 = average/ movies2.length;
  return Number(av2.toFixed(2))
};

 
  

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesAr) {
const averageDrama = moviesAr.reduce ((acc, val) => {
return acc + val.genre;},0);
const averageDrama2 = averageDrama/ moviesAr.genre.length;
  return averageDrama2.toFixed(2)
};
//if (genre === "Drama"){
  //return moviesAr.genre;}
  //const averageMovies = moviesAr.reduce ((acc, val) => {
    //return acc + val.genre.includes("Drama");},0) / moviesAr.length;
    //return averageMovies;
//}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
 const copiedArray = [...moviesArray];
 copiedArray.sort((a, b) => {
   if (a.year === b.year){
     return a.title.localeCompare(b.title)
   }
return a.year - b.year;
});
return copiedArray
};



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
 const sortedMovies= movies.sort(title => {
return movies.title;   
 });
  return sortedMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
