// Subject class
class Stock {
    constructor() {
        this.observers = [];
        this.stock = 0;
    }

    setStock(stock) {
        this.stock = stock;
        this.notify();
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    notify() {
        this.observers.forEach((observer) => observer.update(this.stock));
    }
}

// Observer class
class User {
    constructor(name) {
        this.name = name;
    }

    update(stock) {
        console.log(`User ${this.name} has been notified: stock is now ${stock}.`);
    }
}

// Example usage
const stock = new Stock();

const user1 = new User('Alice');
const user2 = new User('Bob');

stock.addObserver(user1);
stock.addObserver(user2);

stock.setStock(10); // Output: "User Alice has been notified: stock is now 10." and "User Bob has been notified: stock is now 10."

stock.removeObserver(user2);

stock.setStock(5); // Output: "User Alice has been notified: stock is now 5."
