var buildCar;
var getCarInfo;
var car1;
var car2;

buildCar = function (make, model, year, color, price) {
    return {
        make: make,
        model: model,
        year: year,
        color: color,
        price: price
    };
};
getCarInfo = function (car) {
    return car.year + " " + car.make + " " + car.model + ": " + car.color + ", $" + car.price;
};
car1 = buildCar("Toyota", "Camry", 2022, "Red", 30000);
car2 = buildCar("Honda", "Civic", 2023, "Blue", 25000);
console.log(getCarInfo(car1));
console.log(getCarInfo(car2));