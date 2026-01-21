// Gather emelements from the DOM
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count'); // use innerHTML to show seats selected
const total = document.getElementById('total'); // use innerHTML to show payment total
const movieSelect = document.getElementById('movie');

// const movieDB = JSON.parse(localStorage.getItem('selectedMovie'));

// import * as dataBase from './db.json' assert { type: 'json' };

// console.log(dataBase);


for (let option of movieSelect.options) {
    // if (movieDB !== null) {
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
