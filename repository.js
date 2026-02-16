import { Movie } from './movie.js';

export async function loadMovies() {
  const response = await fetch('./movies.json');
  const data = await response.json();

  const sortArray = data.map(
    (m) => new Movie(m.title, m.year, m.price, m.poster)
  );

  return sortArray.sort(function (a, b) {
    return b.year - a.year;
  });
}

// Horrible naming scheme, I know
