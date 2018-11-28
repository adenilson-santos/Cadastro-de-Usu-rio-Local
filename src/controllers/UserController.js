class UserController {
  constructor() {
    const $ = document.querySelector.bind(document);

    this._nome = $("#nome");
    this._cpf = $("#cpf");
    this._cidade = $("#cidade");
    this._bairro = $("#bairro");
    this.users = new Users();
    this.view = new UserView();
    this.inputSearch = document.querySelector("#search");
    this.view.update(this.users);
  }

  add(e) {
    e.preventDefault();
    this.users.add(this.createUser());
    this.view.update(this.users);
    this.cleanInputs();
  }

  createUser() {
    return new User(
      this._nome.value,
      this._cpf.value,
      this._cidade.value,
      this._bairro.value
    );
  }

  pesquisar(e) {
    e.preventDefault();
    document.querySelector("#resultado").innerHTML = this.template(this.users);
  }

  //PESQUISAR E TEMPLATE PODE SER FEITO EM UM NOVO CONTROLLER E VIEW, FOI FEITO JUNTO COM USERCONTROLLER
  //POIS NÃO ESTAVA FUNCIONANDO

  template(users) {
    const result = users.mostrar().find(item => {
      return item.nome === this.inputSearch.value;
    });

    if (result) {
      return `<ul>
        <li>Nome: ${result.nome}</li>
        <li>CPF: ${result.cpf}</li>
        <li>Cidade: ${result.cidade}</li>
        <li>Bairro: ${result.bairro}</li>
      </ul>`;
    } else {
      return `<span>O usuário <strong>${
        this.inputSearch.value
      }</strong> não foi encontrado.</span>`;
    }
  }

  cleanInputs() {
    this._nome.value = "";
    this._cpf.value = "";
    this._cidade.value = "";
    this._bairro.value = "";
  }
}
