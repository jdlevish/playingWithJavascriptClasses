var house = /** @class */ (function () {
    function house(name, bedrooms, bathrooms, doors, windows, garage, price, squareFeet, yearBuilt, stories) {
        var _this = this;
        this.getPrice = function () { return "$" + _this.price; };
        this.getBedrooms = function () { return _this.bedrooms; };
        this.getBathrooms = function () { return _this.bathrooms; };
        this.getDoors = function () { return _this.doors; };
        this.getWindows = function () { return _this.windows; };
        this.getGarage = function () { return _this.garage; };
        this.getSquareFeet = function () { return _this.squareFeet; };
        this.getYearBuilt = function () { return _this.yearBuilt; };
        this.getStories = function () { return _this.stories; };
        this.getPricePerSquareFoot = function () { return "$" + _this.price / _this.squareFeet; };
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
    return house;
}());
var newHouse = new house("rental   1 ", 2, 3, 2, 4, true, 350000, 1500, 2009, 2);
console.log(newHouse.getPrice());
console.log(newHouse.getPricePerSquareFoot());
console.log(newHouse.getGarage());
var newHouse2 = new house("rental   2 ", 2, 3, 2, 4, false, 350000, 1500, 2009, 2);
console.log(newHouse2.getPrice());
console.log(newHouse2.getPricePerSquareFoot());
console.log(newHouse2.getGarage());
