// Gather emelements from the DOM
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count'); // use innerHTML to show seats selected
const total = document.getElementById('total'); // use innerHTML to show payment total
const movieSelect = document.getElementById('movie');


fetch('movieDB.json')
    .then(response => response.json())
    .then(movieDB => {
        let movieData = movieDB.movies;
    })
    .catch(error => console.error('Error fetching movie data:', error));
    console.log(movieData);



// for (let o of movieDB.movies) {
//     const option = document.createElement('option');

//     option.value = o.price;
//     option.text = `${o.title} (${o.price} kr)`;

//     movieSelect.appendChild(option);

//     console.log(option);
// }


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
