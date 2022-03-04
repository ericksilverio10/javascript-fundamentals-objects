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
class ClientePoupanca extends Cliente{
    constructor(nome,email,cpf,saldo,saldopoup){
        super(nome,email,cpf,saldo)
        this.saldopoup = saldopoup
        }
        depositarPoupanca(valor){
            this.saldopoup += valor
        }
        sacarPoupanca(valor){
            this.saldopoup -= valor
        }
        exibirSaldoPoupanca(){
            console.log(this.saldopoup)
        }
}
const erick = new ClientePoupanca("Erick","erick1junior@hotmail.com",
"41295181860",200,1000)

console.log(erick)
// ClientePoupanca {
//     nome: 'Erick',
//     email: 'erick1junior@hotmail.com',
//     cpf: '41295181860',
//     saldo: 200,
//     saldopoup: 1000
erick.exibirSaldoPoupanca();
//1000

erick.depositarPoupanca(500)
erick.exibirSaldoPoupanca();
//1500 --> Depositei 500

erick.sacarPoupanca(700)
erick.exibirSaldoPoupanca()
//800 --> Saquei 700

