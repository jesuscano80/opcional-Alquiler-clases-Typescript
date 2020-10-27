

import{Entregable} from "./interfaces"

class Libros implements Entregable{
public titulo: string;
public autor: string;
public horasest: number =40
public editorial: string;
public genero: string;
public entregado:boolean =false
constructor(titulo: string, autor: string,horasest:number=40,editorial:string, genero:string, entregado:boolean= false){
    this.titulo=titulo;
    this.autor=autor;
    this.horasest=horasest;
    this.editorial=editorial;
    this.genero=genero;
    this.entregado=entregado;
}

    getTitulo():string{
       return this.titulo;
    }
    setTitulo(nuevotitulo:string){
        this.titulo=nuevotitulo;
    }

    getAutor():string{
        return this.autor;
    }

    setAutor(nuevoautor:string){
        this.autor=nuevoautor;
    }

    getEditorial():string{
        return this.editorial;
    }
    
    setEditorial(nuevaeditorial:string){
        this.editorial=nuevaeditorial;
    }

    getHorasEst():number{
        return this.horasest;
    }
   
    setHorasEst(nuevashoras:number){
        this.horasest=nuevashoras;
    }

    getGenero():string{
        return this.genero;
    }

    setGenero(nuevogenero:string){
        this.genero=nuevogenero;
    }

    entregar(){
        return  this.entregado=true;
     }
 
     devolver(){
         return this.entregado=false;
     }

     isEntregado():boolean{
        return this.entregado;
     }

     toString():string{
         return ("\n Titulo -- " + this.titulo + "\n Editorial -- " + this.editorial + "\n Autor -- " + this.autor + "\n Horas estimadas -- " + this.horasest + "\n Genero -- "+ this.genero+ "\n");
     }
     compareTo(param:Libros){
         if (this.horasest==param.horasest){
             return true;
         }
         else{
             return false;
         }

     }

}
export {Libros};
let mylibro = new Libros ("harry potter","JK Rowling",8,"tiempo","infantil",false);

