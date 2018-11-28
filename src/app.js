const controller = new UserController();

const formCriar = document.querySelector("form#criar");

formCriar.addEventListener("submit", controller.add.bind(controller));

const formSearch = document.querySelector("#procurar");

formSearch.addEventListener("submit", controller.pesquisar.bind(controller));
