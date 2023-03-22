// mixin object
const myMixin = {
    sayHello() {
        console.log("Hello, my name is " + this.name);
    }
};

// target object
const person = {
    name: "John"
};

// "mixing in" the mixin into the object
Object.assign(person, myMixin);

// calling the added method
person.sayHello(); // Output: "Hello, my name is John"
