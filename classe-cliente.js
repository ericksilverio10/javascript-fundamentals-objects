class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor
    }
    exibirSaldo(){
        console.log(this.saldo);
    }
}
const erick = new Cliente("Erick","erick1junior@hotmail.com","41295181860",500);
console.log(erick);

erick.exibirSaldo()
//500
erick.depositar(100)
// Cliente {
//     nome: 'Erick',
//     email: 'erick1junior@hotmail.com',
//     cpf: '41295181860',
//     saldo: 500
//   }
console.log(erick)
// Cliente {
//     nome: 'Erick',
//     email: 'erick1junior@hotmail.com',
//     cpf: '41295181860',
//     saldo: 600
//   }