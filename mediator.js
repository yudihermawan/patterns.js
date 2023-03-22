// Mediator function
function mediator() {
    let subscribers = [];

    function subscribe(fn) {
        subscribers.push(fn);
    }

    function unsubscribe(fn) {
        subscribers = subscribers.filter(subscriber => subscriber !== fn);
    }

    function publish(data) {
        subscribers.forEach(subscriber => subscriber(data));
    }

    return {
        subscribe,
        unsubscribe,
        publish
    };
}

// Subscriber functions
function logMessage(data) {
    console.log(`Message received: ${data}`);
}

function alertMessage(data) {
    console.info(`New message: ${data}`);
}

// Create mediator instance
const messageMediator = mediator();

// Subscribe functions to mediator
messageMediator.subscribe(logMessage);
messageMediator.subscribe(alertMessage);

// Publish message through mediator
messageMediator.publish("Hello, world!");
