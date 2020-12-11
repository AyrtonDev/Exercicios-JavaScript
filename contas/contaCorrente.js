const conta = require("./conta");

class contaCorrente extends conta {
    static numerodeContas = 0;
    constructor(cliente, agencia){
        super (0,cliente,agencia);
        contaCorrente.numerodeContas += 1;
    }

    sacar(valor) {
        const taxa = 1.1
        return this._sacar(valor, taxa)
    }
}

module.exports = contaCorrente;