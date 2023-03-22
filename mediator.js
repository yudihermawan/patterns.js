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

echo "# patterns.js" >> README.md
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin https://github.com/yudihermawan/patterns.js.git
git push -u origin main
