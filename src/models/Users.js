class Users {
  constructor() {
    this.users = [];
  }

  add(user) {
    this.users.push(user);
  }

  mostrar() {
    return this.users;
  }
}
