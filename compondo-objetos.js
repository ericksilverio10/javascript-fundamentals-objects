const print = elemento => {
    console.log(elemento);
}

const cliente = {
    nome: "Erick",
    idade: 18,
    cpf: "41295181860",
    email: "erick1junior@hotmail.com",
    fones: ["5511941822723", "5511994728895","5511991595637"]
}

cliente.dependentes = {
    nome: "Rosangela",
    parentesco: "Mãe",
    dataNascimento: "26/01/1965"
}

print(cliente)

cliente.dependentes.nome = "Rosangela Silverio"

print(cliente);