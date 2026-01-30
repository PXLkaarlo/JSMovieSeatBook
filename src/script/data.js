
export class Movie {
    constructor(title, year, price, poster) {
        this.title = title;
        this.year = year;
        this.price = price;
        this.poster = poster;
    }
}

export async function loadMovies() {
    const response = await fetch('/src/script/movieDB.json');
    const data = await response.json();

    const sortArray = data.map(
        m => new Movie(m.title, m.year, m.price, m.poster)
    );

    return sortArray.sort(function(a, b){return b.year - a.year});
}

// Horrible naming scheme, I know