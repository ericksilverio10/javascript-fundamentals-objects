const print = (elemento) =>{
    console.log(elemento);
}
const cliente = {
    nome: "Erick",
    idade: 18,
    cpf: "41295181860",
    email: "erick1junior@hotmail.com"
}

cliente.telefone = "941822723";
print(cliente);
// {
//     nome: 'Erick',
//     idade: 18,
//     cpf: '41295181860',
//     email: 'erick1junior@hotmail.com',
//     telefone: '941822723'
//   }

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

print(objPersonagem.aliado.nome);