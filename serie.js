"use strict";
exports.__esModule = true;
exports.Serie = void 0;
var Serie = /** @class */ (function () {
    function Serie(tipo, Ntemporadas, entregado, genero, creador) {
        if (Ntemporadas === void 0) { Ntemporadas = 3; }
        if (entregado === void 0) { entregado = false; }
        this.Ntemporadas = 3;
        this.entregado = false;
        this.tipo = tipo;
        this.Ntemporadas = Ntemporadas;
        this.entregado = entregado;
        this.genero = genero;
        this.creador = creador;
    }
    Serie.prototype.getTipo = function () {
        return this.tipo;
    };
    Serie.prototype.setTipo = function (nuevotipo) {
        this.tipo = nuevotipo;
    };
    Serie.prototype.getNtemporadas = function () {
        return this.Ntemporadas;
    };
    Serie.prototype.setNtemporadas = function (ntemporadas) {
        this.Ntemporadas = ntemporadas;
    };
    Serie.prototype.getGenero = function () {
        return this.genero;
    };
    Serie.prototype.setGenero = function (nuevogenero) {
        this.genero = nuevogenero;
    };
    Serie.prototype.getCreador = function () {
        return this.creador;
    };
    Serie.prototype.setCreador = function (nuevocreador) {
        this.creador = nuevocreador;
    };
    Serie.prototype.toString = function () {
        return "Tipo de param -- " + this.tipo + "\nNº de temporadas -- " + this.Ntemporadas + "\nGenero -- " + this.genero + "\nCreador -- " + this.creador + "\nEntregado -- " + this.entregado + "\n\n";
    };
    Serie.prototype.isEntregado = function () {
        return this.entregado;
    };
    Serie.prototype.entregar = function () {
        this.entregado = true;
    };
    Serie.prototype.devolver = function () {
        this.entregado = false;
    };
    Serie.prototype.compareTo = function (param) {
        if (this.Ntemporadas == param.Ntemporadas) {
            return true;
        }
        else {
            return false;
        }
    };
    return Serie;
}());
exports.Serie = Serie;
// let walkingDead= new Serie ("zombies",8,false,"thriller","j.adams");
// let elequipoa= new Serie ("accion",7,false,"comedia","r.kuric");
// console.log(walkingDead.toString());
// console.log(walkingDead.entregar());
// console.log(walkingDead.toString());
// console.log(walkingDead.devolver());
// console.log(walkingDead.toString());
// console.log(walkingDead.isEntregado());
// walkingDead.compareTo(elequipoa);
