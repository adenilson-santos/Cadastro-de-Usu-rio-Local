class User {
  constructor(_nome, _cpf, _cidade, _bairro) {
    Object.assign(this, { _nome, _cpf, _cidade, _bairro });
    Object.freeze(this);
  }

  get nome() {
    return this._nome;
  }

  get cpf() {
    return this._cpf;
  }

  get cidade() {
    return this._cidade;
  }

  get bairro() {
    return this._bairro;
  }
}
