export class Cesta  {
    id: number = 0;
    idCliente: number = 0;
    valorTotal: number = 0;
    itens: string = "";
    
    constructor(obj?:Cesta ){
        if(obj!=undefined){
            this.id = obj.id;
            this.idCliente = obj.idCliente;
            this.valorTotal = obj.valorTotal;
            this.itens = obj.itens;
        }
    }
}
