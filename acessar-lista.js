const print = (elemento) =>{
    console.log(elemento);
}

const cliente = {
    nome: "Erick",
    idade: 18,
    cpf: "41295181860",
    email: "erick1junior@hotmail.com"
}

const chaves =["nome","idade","cpf","email"];


//Notação de colchete
print(cliente[chaves[0]])
//Erick

chaves.forEach(info=>print(cliente[info]));
// Erick
// 18
// 41295181860
// erick1junior@hotmail.com

