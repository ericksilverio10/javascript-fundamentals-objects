const print = (elemento) =>{
    console.log(elemento);
}

const cliente = {
    nome: "Erick",
    idade: 18,
    cpf: "41295181860",
    email: "erick1junior@hotmail.com"
}

print(`Olá! Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos!`)
//Olá! Meu nome é Erick e tenho 18 anos!

print(`Os 3 primeiros digitos do meu CPF é: ${cliente.cpf.substring(0, 3)}`);
//Os 3 primeiros digitos do meu CPF é: 412