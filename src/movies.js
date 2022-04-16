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
function howManyMovies(moviesArray){
  filteredMovies= movies.filter(function(eachMovie){
    if (eachMovie.director==='Steven Spielberg' && 
    eachMovie.genre.includes('Drama')){
      return true}
    });
    return filteredMovies.length
   };
 
 

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies2) {
  if(!movies2.length){
    return 0;
  }
const average = movies2.reduce ((acc, val) => {
  if (val.score){
  return acc + val.score;}
  else{
    return acc;
  }
},0);
const av2 = average/ movies2.length;
  return Number(av2.toFixed(2))
};

 
  

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesAr) {
  let dramaMovie = movies.filter(function(eachMovie){
    return eachMovie.genre.includes('Drama')
  });
  return scoresAverage(dramaMovie);
}

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
  const moviesArr=JSON.parse(JSON.stringify(movies));
sortedMovies = moviesArr
.sort ((a,b)=>{
  if (a.title > b.title){
  return 1;
}else if (a.title < b.title){
  return -1; 
} else {
  return 0;
}
})
.map(eachMovie => eachMovie.title)
.slice(0,20);
  return sortedMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let calculateHour = hourString.split('h');
  return Number (calculateHour[0])*60;
}
function convertMinutes(minuteString){
  let calculateMinutes = minuteString.split('min');
  return Number(calculateMinutes[0]);
}
function convertDuration (duration){
  let timePieces = duration.split(' ');

  let minutes = timePieces.reduce((sum, onePiece)=>{
    if (onePiece.includes('h')){
      return sum + convertHours(onePiece);
    }
    return sum + convertMinutes (onePiece);
  }, 0);
  return minutes;
}
let moviesHourToMin = movies.map(function(eachMovie){
  let fixedMovie =JSON.parse(JSON.stringify(eachMovie))
  fixedMovie.duration = convertDuration(fixedMovie.duration)
return fixedMovie
})
//return moviesHourToMin
//}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (!movies.length) return null; 
  let masterObject ={};
  movies.forEach(eachMovie => {
if(!masterObject[eachMovie.year]){
  masterObject[eachMovie.year] = [eachMovie];
}else {
  masterObject[eachMovie.year].push(eachMovie);
} 
  });
  let highest = 0;
  let actualYear;
  for (let Year1 in masterObject){
    if(ratesAv(masterObject[Year1])> highest){
      highest = ratesAv(masterObject[Year1]);
      actualYear = Year1;
}
}
return `The best year was ${actualYear} with an average rate of${highest} `;
}

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
