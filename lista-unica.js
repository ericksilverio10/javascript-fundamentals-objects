const print = elemento => {
    console.log(elemento);
}
print("Olá, mundo!")
const clientes = [
    {
        nome: "Erick",
        idade: 18,
        cpf: "41295181860",
        dependentes: [{
            nome: "Rosangela",
            parentesco: "Mãe",
            dataNascimento: "26/01/1965"
        }]
    },
    {
        nome: "Ana",
        idade: 16,
        cpf: "99995181860",
        dependentes: [{
            nome: "Lucia",
            parentesco: "Tia",
            dataNascimento: "20/04/1958"
        }]
    },
    {
        nome: "Evandro",
        idade: 56,
        cpf: "06195181860",
        dependentes: [{
            nome: "Edna",
            parentesco: "Vó",
            dataNascimento: "10/11/1952"
        }]
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes,...clientes[2].dependentes];

print(listaDependentes[1]);