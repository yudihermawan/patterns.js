// Object to be provided
const userApi = {
    getUser(id) {
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .catch(error => console.log(error));
    },
};

// Provider function
function provideUser(userId, callback) {
    userApi.getUser(userId)
        .then(user => callback(user))
        .catch(error => console.log(error));
}

// Consumer function
function displayUser(user) {
    const userElement = document.createElement('div');
    userElement.innerHTML = `
    <h2>${user.name}</h2>
    <p>Email: ${user.email}</p>
    <p>Phone: ${user.phone}</p>
  `;
    document.body.appendChild(userElement);
}

// Using Provider Pattern
const userId = 1;
provideUser(userId, function(user) {
    displayUser(user);
});
