
class movieObject {
    constructor(title, price, poster) {
        this.title = title;
        this.price = price;
        this.poster = poster;
    }
}

let movieDB = [
    new movieObject('The Lion King', 100, 'lionking.jpg'),
    new movieObject('Mowgli: Legend of the Jungle', 40, 'mowgli.jpg'),
    new movieObject('Doctor Strange', 120, 'doctorstrange.jpg'),
    new movieObject('John Wick', 60, 'johnwick.jpg')
];
