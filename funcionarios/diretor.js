const funcionario = require("./funcionario")

class diretor extends funcionario{
    constructor(nome, salario, cpf){
        super(nome, salario, cpf)
        this._bonificacao = 2;

    }
}

module.exports = diretor;