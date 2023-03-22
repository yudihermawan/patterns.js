// Container component (Smart component)
class UserListContainer {
    constructor() {
        this.users = [];
        this.getUserData();
    }

    getUserData() {
        // Fetch data from API
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                this.users = data;
                this.render();
            });
    }

    render() {
        // Render presentational component with data
        const userList = new UserList(this.users);
        document.getElementById('user-list-container').innerHTML = userList.render();
    }
}

// Presentational component (Dumb component)
class UserList {
    constructor(users) {
        this.users = users;
    }

    render() {
        // Render list of users
        let listItems = '';
        this.users.forEach(user => {
            listItems += `<li>${user.name}</li>`;
        });
        return `<ul>${listItems}</ul>`;
    }
}

// Initialize container component
const userListContainer = new UserListContainer();
