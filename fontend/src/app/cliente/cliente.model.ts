export class Cliente {
    id: number = 0;
    nome: string = "";
    sobrenome: string = "";
    cpf: string = "";
    email: string = "";
    senha: string = "";
    telefone: string = "";
    
    constructor(obj?:Cliente){
        if(obj!=undefined){
            this.id = obj.id;
            this.nome = obj.nome;
            this.email = obj.email;
            this.senha = obj.senha;
            this.telefone = obj.telefone;
            this.cpf = obj.cpf;
            this.sobrenome = obj.sobrenome;
        }
    }
}
