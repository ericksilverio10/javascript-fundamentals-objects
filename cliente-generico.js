const Cliente = (nome, cpf, email, saldo) => {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    depositar = function(valor){
        this.saldo += valor;
    }
}

const andre = new Cliente("André","41295181860","erick1junior@hotmail.com",100)

const print = elemento =>{
    console.log(elemento);
}

print(andre);