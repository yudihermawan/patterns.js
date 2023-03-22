// Prototype object
const CarPrototype = {
    brand: "Toyota",
    color: "White",

    getBrand: function() {
        console.log(`Car brand: ${this.brand}`);
    }
}

// Cloning prototype object to create new object
const NewCar = Object.create(CarPrototype);

// Modifying one property of new object
NewCar.color = "Black";

// Calling getBrand method to display car brand
NewCar.getBrand(); // Output: Car brand: Toyota
