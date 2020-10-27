import{Entregable} from "./interfaces"


class Serie implements Entregable{
    public tipo:string;
    public Ntemporadas:number=3;
    public entregado:boolean=false;
    public genero:string;
    public creador:string;

    constructor(tipo:string,Ntemporadas:number=3,entregado:boolean=false,genero:string,creador:string){
        this.tipo=tipo;
        this.Ntemporadas=Ntemporadas;
        this.entregado=entregado;
        this.genero=genero;
        this.creador=creador;
    }

    getTipo():string{
        return this.tipo;
    }
    setTipo(nuevotipo:string){
        this.tipo=nuevotipo;
    }
    getNtemporadas():number{
        return this.Ntemporadas;
    }
    setNtemporadas(ntemporadas:number){
        this.Ntemporadas=ntemporadas;
    }
    getGenero():string{
        return this.genero;
    }

    setGenero(nuevogenero:string){
        this.genero=nuevogenero;
    }
    getCreador():string{
        return this.creador;
    }

    setCreador(nuevocreador:string){
        this.creador=nuevocreador;
    }

    toString():string{
        return "Tipo de param -- " + this.tipo + "\nNº de temporadas -- " + this.Ntemporadas +"\nGenero -- " + this.genero + "\nCreador -- " + this.creador + "\nEntregado -- " + this.entregado + "\n\n"   ;
        
    }

    isEntregado():boolean{
       return this.entregado;
    }
    
    entregar():void{
       this.entregado=true;
    }

    devolver():void{
        this.entregado=false;
    }
    compareTo(param: Serie ){
        if (this.Ntemporadas==param.Ntemporadas){
            return true;
        }
        else{
            return false;
        }

    }
}


export {Serie};

// let walkingDead= new Serie ("zombies",8,false,"thriller","j.adams");
// let elequipoa= new Serie ("accion",7,false,"comedia","r.kuric");

// console.log(walkingDead.toString());
// console.log(walkingDead.entregar());
// console.log(walkingDead.toString());
// console.log(walkingDead.devolver());
// console.log(walkingDead.toString());
// console.log(walkingDead.isEntregado());
// walkingDead.compareTo(elequipoa);


