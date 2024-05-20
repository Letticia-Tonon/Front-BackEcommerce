export class Produtos {
    id: number = 0;
    nome_produto: string = "";
    descricao_curta: string = "";
    descricao_longa: string = "";
    preco: number = 0;
    link_foto: string ="";

    
    constructor(obj?:Produtos){
        if(obj!=undefined){
            this.id = obj.id;
            this.nome_produto = obj.nome_produto;
            this.descricao_curta = obj.descricao_curta;
            this.descricao_longa = obj.descricao_longa;
            this.preco = obj.preco;
            this.link_foto = obj.link_foto;
        }
    }
}
