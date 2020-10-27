"use strict";
exports.__esModule = true;
exports.Libros = void 0;
var Libros = /** @class */ (function () {
    function Libros(titulo, autor, horasest, editorial, genero, entregado) {
        if (horasest === void 0) { horasest = 40; }
        if (entregado === void 0) { entregado = false; }
        this.horasest = 40;
        this.entregado = false;
        this.titulo = titulo;
        this.autor = autor;
        this.horasest = horasest;
        this.editorial = editorial;
        this.genero = genero;
        this.entregado = entregado;
    }
    Libros.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libros.prototype.setTitulo = function (nuevotitulo) {
        this.titulo = nuevotitulo;
    };
    Libros.prototype.getAutor = function () {
        return this.autor;
    };
    Libros.prototype.setAutor = function (nuevoautor) {
        this.autor = nuevoautor;
    };
    Libros.prototype.getEditorial = function () {
        return this.editorial;
    };
    Libros.prototype.setEditorial = function (nuevaeditorial) {
        this.editorial = nuevaeditorial;
    };
    Libros.prototype.getHorasEst = function () {
        return this.horasest;
    };
    Libros.prototype.setHorasEst = function (nuevashoras) {
        this.horasest = nuevashoras;
    };
    Libros.prototype.getGenero = function () {
        return this.genero;
    };
    Libros.prototype.setGenero = function (nuevogenero) {
        this.genero = nuevogenero;
    };
    Libros.prototype.entregar = function () {
        return this.entregado = true;
    };
    Libros.prototype.devolver = function () {
        return this.entregado = false;
    };
    Libros.prototype.isEntregado = function () {
        return this.entregado;
    };
    Libros.prototype.toString = function () {
        return ("\n Titulo -- " + this.titulo + "\n Editorial -- " + this.editorial + "\n Autor -- " + this.autor + "\n Horas estimadas -- " + this.horasest + "\n Genero -- " + this.genero + "\n");
    };
    Libros.prototype.compareTo = function (param) {
        if (this.horasest == param.horasest) {
            return true;
        }
        else {
            return false;
        }
    };
    return Libros;
}());
exports.Libros = Libros;
var mylibro = new Libros("harry potter", "JK Rowling", 8, "tiempo", "infantil", false);
