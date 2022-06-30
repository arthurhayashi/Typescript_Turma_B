import Endereco from "./Endereco";
import Usuario from "./Usuario";
import { Sexo } from "./Utils";

let endereco1: Endereco = new Endereco("Rua Saldanha Marinho", 1687,85035160,"Dos Estados","Guarapuava");
let endereco2: Endereco = new Endereco("Rua Capitão Rocha", 649,85035170,"Vila Carli","Guarapuava");
let endereco3: Endereco = new Endereco("Rua Quinze de Novembro", 1256,85010000,"Centro","Guarapuava");

let usuario1: Usuario = new Usuario("Jacob Peralta", 10235748932,128527596, endereco1);
let usuario2: Usuario = new Usuario("Amy Santiago", 25876898132,654874562, endereco2);
let usuario3: Usuario = new Usuario("Charles Boyle", 19874246378,246587415, endereco3);

usuario1.sexo = Sexo.MASCULINO;

usuario2.sexo = Sexo.FEMININO;

usuario3.sexo = Sexo.INDEFINIDO;

console.log(usuario1);
console.log(usuario2);
console.log(usuario3);