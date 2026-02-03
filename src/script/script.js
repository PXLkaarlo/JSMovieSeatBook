const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count'); // use innerHTML to show seats selected
const total = document.getElementById('total'); // use innerHTML to show payment total
const movieSelect = document.getElementById('movie');

import { Movie } from './model/Movie.js';
import { loadMovies } from './repository.js';


const movieList = await loadMovies();

for (let movie of movieList) {
    movie = new Movie(movie.title, movie.year, movie.price, movie.poster);
    const option = document.createElement('option');

    option.value = movie.price;
    option.text = `${movie.title} (${movie.price} kr)`;
    movieSelect.appendChild(option);
}



let ticketPrice = +movieSelect.value; // + converts string to number

function updateSeatAndPrice() {
  const selectedSeats = document.querySelectorAll('.seat.selected');
  const selectedCount = selectedSeats.length;

  ticketPrice = +movieSelect.value;

  count.innerHTML = selectedCount - 1;
  total.innerHTML = `${(selectedCount - 1) * ticketPrice} kr`;
}

for (let seat of seats) {
  seat.addEventListener('click', () => {
    seat.classList.toggle('selected');
    updateSeatAndPrice();
  });
}

movieSelect.addEventListener('change', () => updateSeatAndPrice());
