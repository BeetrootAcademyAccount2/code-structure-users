// import UsersDataService from "./service.js";

const usersList = document.getElementById("usersList");

const url = "https://jsonplaceholder.typicode.com/users";

const userService = new UsersDataService(url);

userService.fetchData().then(() => {
  const users = new Users(userService);
  users.processData();
});

class Users {
  constructor(userService) {
    this.userService = userService;
  }

  renderUsers(users) {
    users.forEach((user) => {
      const userItem = document.createElement("li");
      userItem.textContent = `${user.id}. ${user.name} (${user.company.name})`;
      usersList.append(userItem);
    });
  }

  processData() {
    const users = this.userService.getData();
    if (users.length > 0) {
      console.log("Users available", users);
      this.renderUsers(users);
    } else {
      console.log("No available data");
    }
  }
}
