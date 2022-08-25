class house {
    name: string;
    bedrooms: number;
    bathrooms: number;
    doors: number;
    windows: number;
    garage: boolean;
    price: number;
    squareFeet: number;
    yearBuilt: number;
    stories: number;
    constructor(name: string, bedrooms: number, bathrooms: number, doors: number, windows: number, garage: boolean, price: number, squareFeet: number, yearBuilt: number, stories: number) {
        this.name = name;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.doors = doors;
        this.windows = windows;
        this.garage = garage;
        this.price = price;
        this.squareFeet = squareFeet;
        this.yearBuilt = yearBuilt;
        this.stories = stories;
    }
    getPrice = () => "$" + this.price;
    getBedrooms = () => this.bedrooms;
    getBathrooms = () => this.bathrooms;
    getDoors = () => this.doors;
    getWindows = () => this.windows;
    getGarage = () => this.garage;
    getSquareFeet = () => this.squareFeet;
    getYearBuilt = () => this.yearBuilt;
    getStories = () => this.stories;
    getPricePerSquareFoot = () => "$" + this.price / this.squareFeet;
}

let newHouse = new house("rental   1 ", 2, 3, 2, 4, true, 350000, 1500, 2009, 2);
console.log(newHouse.getPrice());
console.log(newHouse.getPricePerSquareFoot());
console.log(newHouse.getGarage());
let newHouse2 = new house("rental   2 ", 2, 3, 2, 4, false, 350000, 1500, 2009, 2);
console.log(newHouse2.getPrice());
console.log(newHouse2.getPricePerSquareFoot());
console.log(newHouse2.getGarage());