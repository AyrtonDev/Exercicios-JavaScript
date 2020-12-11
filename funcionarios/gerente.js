const funcionario = require("./funcionario")

class gerente extends funcionario{
    constructor(nome, salario, cpf){
        super(nome, salario, cpf)
        this._bonificacao = 1.1;
    }
}

module.exports = gerente;