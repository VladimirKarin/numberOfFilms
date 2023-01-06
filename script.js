let numberOfFilms = +prompt("How many movies have you already seen?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  generes: [],
  privat: false,
};

const q1 = prompt("Name the last movie you've seen?", ""),
  q2 = prompt("How much would you rate it?", ""),
  q3 = prompt("Name the last movie you've seen?", ""),
  q4 = prompt("How much would you rate it?", "");

personalMovieDB.movies[q1] = q2;
personalMovieDB.movies[q3] = q4;

console.log(personalMovieDB);
