import {Serie} from "./serie"
import {Libros} from "./libros"

var libro1= new Libros ("harry potter 1","JK Rowling",4,"planeta","ficción",false);
var libro2= new Libros ("harry potter 2","JK Rowling",3,"planeta","ficción",false);
var libro3= new Libros ("harry potter 3","JK Rowling",5,"planeta","ficción",false);
var libro4= new Libros ("harry potter 4","JK Rowling",6,"planeta","ficción",true);
var libro5= new Libros ("harry potter 5","JK Rowling",3,"planeta","ficción",false);

var serie1= new Serie ("accion",2,false,"comedia","jose");
var serie2= new Serie ("accion",3,false,"comedia","jose");
var serie3= new Serie ("accion",7,false,"comedia","jose");
var serie4= new Serie ("accion",5,false,"comedia","jose");
var serie5= new Serie ("accion",4,false,"comedia","jose");

var libros= [libro1,libro2,libro3,libro4,libro5];
var series= [serie1,serie2,serie3,serie4,serie5];

libro3.entregar();
serie3.entregar();
serie4.entregar();

let totalLibrosEntregados=0;
let totalSeriesEntregadas=0;
function contarEntregados(){
    for(let i=0;i<libros.length;i++){
        if (libros[i].entregado==true)
        {
            totalLibrosEntregados++;
        }
        if (series[i].entregado==true)
        {
            totalSeriesEntregadas++;
        }
     
    }
    return (`Hay ${totalSeriesEntregadas} series entregadas y ${totalLibrosEntregados} libros entregados \n`);
}

console.log(contarEntregados());

let mayora=0;
let libromas:Libros;
let mayorb=0;
let seriemas:Serie;
function masHorasMasTemp(){
    for (let i=0;i<libros.length;i++)
    {
        if (libros[i].horasest>mayora){
            mayora=libros[i].horasest;
            libromas=libros[i];
        }

        if (series[i].Ntemporadas>mayorb)
        {    mayorb= series[i].Ntemporadas;
             seriemas= series[i];
        }
    }
    return ("estos son la serie con más temporadas y el libro con más horas: \n "+ seriemas.toString() + libromas.toString());
}

console.log(masHorasMasTemp());