const print = elemento =>{
    console.log(elemento);
}
const Cliente = (nome, cpf, email, saldo) => {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    depositar = function(valor){
        this.saldo += valor
    }
}
clientePoupanca = (nome, cpf, email, saldo,saldoPoup) => {
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}
const erick = new clientePoupanca("erick","41295181860","erick1junior@hotmail.com",100,200)

print(erick)