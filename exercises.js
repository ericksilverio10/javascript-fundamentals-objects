//1º Exercício
class Usuario {
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }
    isAdmin(){
        if(this.admin==true){
            console.log(true);
        } else{
            console.log(false);
        }
    }
}
class Admin extends Usuario{
    constructor(email, senha){
        super(email,senha);
        this.admin = true;
    }
}
const User1 = new Usuario("erick1junior@hotmail.com","erick123")
const Adm1 = new Admin("rosangelasilverio@hotmail.com","rosangela123")
console.log(User1.isAdmin())
//false
console.log(Adm1.isAdmin())
//true
