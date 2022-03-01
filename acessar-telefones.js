const print = (elemento) =>{
    console.log(elemento);
}

const cliente = {
    nome: "Erick",
    idade: 18,
    cpf: "41295181860",
    email: "erick1junior@hotmail.com",
    fones: ["5511941822723", "5511991595637", "5511994720693"]
}

cliente.fones.forEach(fone => print(fone));
// 5511941822723
// 5511991595637
// 5511994720693

