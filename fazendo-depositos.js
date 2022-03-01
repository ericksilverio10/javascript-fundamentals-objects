const print = elemento => {
    console.log(elemento);
}
const cliente = {
    nome: "Erick",
    idade: 18,
    cpf: "41295181860",
    email: "erick1junior@hotmail.com",
    fones: ["5511941822723", "5511994728895","5511991595637"],
    dependentes: [
    {
        nome: "Rosangela",
        parentesco: "Mãe",
        dataNascimento: "26/01/1965" },
    {
        nome: "Evandro",
        parentesco: "Pai",
        dataNascimento: "31/08/1965"
    }
],
    saldo: 100,
    depositar: function(valor)
    {
        this.saldo += valor;
    }
}
print(cliente.saldo);
//100

cliente.depositar(30);
print(cliente.saldo);
//130