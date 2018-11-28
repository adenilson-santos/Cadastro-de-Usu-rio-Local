class UserView {
  constructor() {
    this.localView = document.querySelector("#users");
  }

  update(users) {
    this.localView.innerHTML = this.template(users);
  }

  template(users) {
    return `${users.mostrar().map(
      user =>
        `<ul>
            <li><strong>Nome: </strong> ${user.nome}</li>
            <li><strong>CPF: </strong> ${user.cpf}</li>
            <li><strong>Cidade: </strong>${user.cidade}</li>
            <li><strong>Bairro: </strong>${user.bairro}</li>
        </ul>`
    )}`;
  }
}
