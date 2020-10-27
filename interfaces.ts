interface Entregable{
    entregado:boolean;

    entregar():void;
    devolver():void;
    isEntregado():boolean;
    compareTo(param:object);
}

export {Entregable};
