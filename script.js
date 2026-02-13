const screen = document.querySelector('.screen');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count'); // use innerHTML to show seats selected
const total = document.getElementById('total'); // use innerHTML to show payment total
const movieSelect = document.getElementById('movie');

import { loadMovies } from './repository.js';
import { fillMovieList, updateSeatAndPrice, updatePoster } from './engine.js';

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
