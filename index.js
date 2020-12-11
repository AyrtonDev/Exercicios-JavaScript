const cliente =  require("./cliente");
const contaCorrente = require("./contas/contaCorrente");
const contaPoupança = require("./contas/contaPoupança");
const Gerente = require("./funcionarios/gerente");
const Diretor = require("./funcionarios/diretor");
const sistemaAutenticacao = require("./sistemaAutenticacao");

const cliente1 = new cliente("Ricardo", 11122233309, "456");

const contaCorrenteRicardo = new contaCorrente(0, cliente1, 1001,);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new contaPoupança(50, cliente1, 1001);
contaPoupanca.sacar(10);    

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 12345678901);
gerente.cadastrarSenha("654321");
const diretorLogado = sistemaAutenticacao.login(diretor, "123456");
const gerenteLogado = sistemaAutenticacao.login(gerente, "654321");

const clienteLogado = sistemaAutenticacao.login(cliente1, "456");

console.log(diretorLogado, gerenteLogado);
console.log(clienteLogado);