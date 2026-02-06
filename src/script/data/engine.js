import { Movie } from '../model/movie.js';


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