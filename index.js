import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutentificacao } from "./SistemaAutentificacao.js"

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456789");
const gerente = new Gerente("Paulo", 5000, 12345601);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 78954126, "456");
const gerenteEstaLogado = SistemaAutentificacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutentificacao.login(diretor, "123456789");

const clienteEstaLogado = SistemaAutentificacao.login(cliente, "456");
console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);