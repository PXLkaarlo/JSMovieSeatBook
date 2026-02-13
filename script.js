const screen = document.querySelector('.screen');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count'); // use innerHTML to show seats selected
const total = document.getElementById('total'); // use innerHTML to show payment total
const movieSelect = document.getElementById('movie');

import { loadMovies } from './repository.js';
// import { fillMovieList, updateSeatAndPrice, updatePoster } from './engine.js';

const movieList = await loadMovies();
let ticketPrice = +movieSelect.value; // + converts string to number

fillMovieList(movieList, movieSelect, screen);


for (let seat of seats) {
  seat.addEventListener('click', () => {
    seat.classList.toggle('selected');
    updateSeatAndPrice(ticketPrice ,movieSelect, count, total);
  });
}

movieSelect.addEventListener('change', () => {
  updateSeatAndPrice(ticketPrice ,movieSelect, count, total),
  updatePoster(screen, movieList[movieSelect.selectedIndex])
});





import { Movie } from './movie.js';


export function fillMovieList(movieList, movieSelect, screen) {
    for (let movie of movieList) {
        movie = new Movie(movie.title, movie.year, movie.price, movie.poster);
        const option = document.createElement('option');

        option.value = movie.price;
        option.text = `${movie.title} (${movie.price} kr)`;
        movieSelect.appendChild(option);

        if (option.selected) {
            updatePoster(screen, movie);
        }
    }
}


export function updatePoster(screen, movie) {
  if (screen.firstChild) {
    screen.removeChild(screen.firstChild);
  }

  const img = document.createElement('img');
  img.src = movie.poster;

  screen.appendChild(img);
}


export function updateSeatAndPrice(ticketPrice, movieSelect, count, total) {
  const selectedSeats = document.querySelectorAll('.seat.selected');
  const selectedCount = selectedSeats.length;

  ticketPrice = +movieSelect.value;

  count.innerHTML = selectedCount - 1;
  total.innerHTML = `${(selectedCount - 1) * ticketPrice} kr`;
}