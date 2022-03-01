const print = elemento => {
    console.log(elemento);
}
const cliente = {
    nome: "Erick",
    idade: 18,
    cpf: "41295181860",
    email: "erick1junior@hotmail.com",
    fones: ["5511941822723", "5511994728895","5511991595637"],
    //Transformei o objeto "Dependentes" em um Array []
    dependentes: [{
        nome: "Rosangela",
        parentesco: "Mãe",
        dataNascimento: "26/01/1965"
    }]
}
cliente.dependentes.push({
    nome: "Evandro",
    parentesco: "Pai",
    dataNascimento: "31/08/1965"
})
print(`Minha mãe se chama ${cliente.dependentes[0].nome}`);
//Minha mãe se chama Rosangela
print(`Meu pai se chama ${cliente.dependentes[1].nome}`);
//Meu pai se chama Evandro

const mae = cliente.dependentes.filter(dependente => 
    dependente.dataNascimento==="26/01/1965"); 
print(mae);
// [
//     {
//       nome: 'Rosangela',
//       parentesco: 'Mãe',
//       dataNascimento: '26/01/1965'
//     }
//   ]

print(mae[0].nome)
//Rosangela