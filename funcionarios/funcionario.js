class funcionario{
    constructor(nome, salario, cpf){
        this._nome;
        this._salario;
        this._cpf;
        if(this.constructor == "funcionario"){
            throw new Error("Você não devia instaciar um objeto do tipo funcionario, pois ela é abstrata");
        }
        this._bonificacao = 1;
        this._senha
    }

    autenticar(senha){
        return senha == this._senha;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }
}

module.exports = funcionario;